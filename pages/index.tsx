import axios from "axios"; // Requests
import Image from "next/image"; // Image
import { toast } from "react-toastify"; // Toast notifications
import Layout from "components/Layout"; // Layout wrapper
import { useRouter } from "next/router"; // Router
import styles from "styles/Home.module.scss"; // Styles
import { ReactElement, useState } from "react"; // Local state + types
import { getAddressDetails } from "utils/addresses"; // Faucet addresses
import { hasClaimed } from "pages/api/claim/status"; // Claim status
import { signIn, getSession, signOut } from "next-auth/client"; // Auth
import useSWR from 'swr'

/**
 * Checks if a provider address or ENS name is valid
 * @param {string} address to check
 * @returns {boolean} validity
 */
export function isValidInput(address: string): boolean {
  // Check if valid email address
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(address);
}

// 
const fetcher = (url: string) => axios.get(url).then(res => res.data)

interface UserType {
  email: string;
  token: string;
  success_time: number;
}

export default function Home({
  session,
  claimed: initialClaimed,
}: {
  session: any;
  claimed: boolean;
}) {
  // Collect prefilled address
  const {
    query: { addr },
  } = useRouter();
  // Fill prefilled address

  const prefilledAddress: string = addr && typeof addr === "string" ? addr : "";
  const notify = (title:string)=>toast(title)
  // Claim address
  const [address, setAddress] = useState<string>(prefilledAddress);
  // Claimed status
  const [claimed, setClaimed] = useState<boolean>(initialClaimed);
  // First claim
  const [firstClaim, setFirstClaim] = useState<boolean>(false);
  // Loading status
  const [loading, setLoading] = useState<boolean>(false);
  // Claim other
  const [claimOther, setClaimOther] = useState<boolean>(false);

  // Collect details about addresses
  const { networkCount, sortedAddresses } = getAddressDetails();

  // 增加新的状态
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [isVerificationSent, setVerificationSent] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [token, setToken] = useState(null);

  // 普通刷新
  // const { data: userList, error } = useSWR('/api/items', fetcher)
  // 轮询方案
  // 在useSWR中添加refreshInterval选项来实现轮询
  const { data: userList, error } = useSWR('/api/items', fetcher, {
    refreshInterval: 1000, // 这里的值是轮询的间隔时间，单位是毫秒，5000毫秒即5秒
  });

  // 定义 handleCopy 函数，复制存储在状态中的 token
  const handleCopy = () => {
    if (token) {
      navigator.clipboard.writeText(token).then(() => {
        // 这里可以添加一些复制成功后的处理，例如显示一个通知
        notify(`成功复制: ${token}`);
      });
    }
  };

  /**
   * Processes a claim to the faucet
   */
  const processClaim = async () => {
    setLoading(true);
  
    if (!isVerificationSent) {
      // 发送邮件验证码
      try {
        const response = await axios.post("/api/send_verification_code", { email: address }, { withCredentials: true });
        console.log("Server Response:", response.data);
        if (response.data.status === 1) {
          notify(response.data.message)
          setVerificationSent(true);
        } else {
          notify(response.data.message)
        }
      } catch (error) {
        console.error(error);
        notify("未知错误, 请联系管理员处理")
      }
    } else {
      // 验证用户输入的验证码
      try {
        const response = await axios.post("/api/verify_code", { 
          email: address, 
          code: verificationCode 
        });
        console.log("Server Response:", response.data);
        if (response.data.status === 1) {
          notify(response.data.message)
          setToken(response.data.token); // 假设 token 存储在 response.data.token 中
          setClaimed(true); // 标记为已领取
        } else {
          notify(response.data.message)
        }
      } catch (error) {
        console.error(error);
        notify("未知错误, 请联系管理员处理")
      }
    }
  
    setLoading(false);
  };

  // 检查复选框
  const [isChecked, setIsChecked] = useState(true);  // 默认值设置为 true

  return (
    <Layout>
      {/* 1. description */}
      <div className={styles.home__cta}>
        <div>
          <a
            href="https://openkey.cloud/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/logo.png" height="42.88px" width="180px" />
          </a>
        </div>
        <h1>ChatGPT API 水龙头</h1>
        <span>
          每24小时可领取一个 $1.00 令牌用于开发测试 AI 产品.
        </span>
        {/* 添加GitHub链接 */}
        <a
          href="https://github.com/terobox/ChatGPT-API-Faucet"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block', // 将链接变为内联块级元素
            marginTop: '10px', // 添加上边距
            textDecoration: 'none', // 取消下划线
            color: '#a61b29' // 将字体颜色设置为 #a61b29
          }}
        >
          GitHub链接
        </a>
      </div>

      {/* 2. Claim from facuet card */}
      <div className={styles.home__card}>
        {/* Card title */}
        <div className={styles.home__card_title}>
          <h3>申请令牌</h3>
        </div>

        {/* Card content */}
        <div className={styles.home__card_content}>
          {!session ? (
            <div className={styles.content__authenticated}>
              {claimed ? (
                <div className={styles.content__claimed}>
                  <p>
                    {firstClaim
                      ? "You have successfully claimed tokens. You can request again in 24 hours."
                      : "恭喜! 您已成功领取一个令牌, 可在24小时后再次申请. "}
                  </p>
                  {token && (
                    <div style={{ marginTop: '20px', marginBottom: '20px' }}> {/* 添加 marginTop 和 marginBottom 样式 */}
                      <div style={{ marginTop: '20px', marginBottom: '10px' }}>
                        <p> 获得令牌: </p>
                      </div>
                      <div><p style={{
                        color: '#333', // 字体颜色
                        backgroundColor: '#f4f4f4', // 背景颜色
                        padding: '10px', // 内边距
                        borderRadius: '5px', // 圆角
                        fontFamily: 'Monaco, monospace', // 字体
                        wordBreak: 'break-all', // 自动换行
                      }}
                    >
                        {token}</p></div>

                      <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                        <p>接口地址: </p>
                      </div>
                      <div><p style={{
                        color: '#333', // 字体颜色
                        backgroundColor: '#f4f4f4', // 背景颜色
                        padding: '10px', // 内边距
                        borderRadius: '5px', // 圆角
                        fontFamily: 'Monaco, monospace', // 字体
                        wordBreak: 'break-all', // 自动换行
                      }}
                    >
                        https://openkey.cloud</p></div>

                      <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                        <p>可用余额: $1.00</p>
                      </div>
                      
                    </div>
                  )}
                  <button className={styles.button__main}
                    // 定义 handleCopy 函数，复制存储在状态中的 token
                    onClick={() => {
                      handleCopy();
                      // processClaim();
                    }}
                  >
                    复制令牌
                  </button>
                </div>
              ) : (
                <div className={styles.content__unclaimed}>
                  <p>{isVerificationSent ? "请输入收到的邮箱验证码:" : "请输入您的电子邮件地址以获取ChatGPT API令牌:"}</p>
                  {/* <p>请输入您的电子邮件地址以获取ChatGPT API令牌:</p> */}

                  {/* 根据 isVerificationSent 状态切换输入框 */}
                  <input
                    type="text"
                    placeholder={isVerificationSent ? "验证码" : "support@openkey.cloud"}
                    value={isVerificationSent ? verificationCode : address}
                    onChange={(e) => isVerificationSent ? setVerificationCode(e.target.value) : setAddress(e.target.value)}
                  />

                  <div className={styles.content__unclaimed_others}>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => setIsChecked((previous) => !previous)}
                    />
                    <label>
                      我承诺不滥用API
                    </label>
                  </div>

                  {statusMessage && <p>{statusMessage}</p>}

                  {isValidInput(address) ? (
                    isChecked ? (
                      <button
                        className={styles.button__main}
                        onClick={processClaim}
                        disabled={loading}
                      >
                        {!loading ? (isVerificationSent ? "验证" : "发送验证码") : "处理中..."}
                      </button>
                    ) : (
                      <button className={styles.button__main} disabled>
                        未承诺, 拒绝申请
                      </button>
                    )
                  ) : (
                    <button className={styles.button__main} disabled>
                      {address === "" ? "输入邮箱地址" : "无效的邮箱地址"}
                    </button>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className={styles.content__unauthenticated}>
              {/* Reasoning for Twitter OAuth */}
              {/* Sign in with Twitter */}
            </div>
          )}
        </div>
      </div>

      {/* 3. Faucet details card */}
      <div className={styles.home__card}>
        <div>
          {error && <div></div>}
          {userList ? (
            <div>
              {userList.map((user: UserType, index: number) => (
                <div 
                  key={index} 
                  style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '10px',
                    backgroundColor: index % 2 === 0 ? '#c02c38' : '#248067',
                    color: 'white',
                  }}
                >
                  <span>{new Date(user.success_time).toLocaleString()}</span>
                  <span>{user.email}</span>
                  <span>{user.token}</span>
                </div>
              ))}
            </div>
          ) : (
            <div>正在加载记录...</div>
          )}
        </div>
      </div>

      {/* 4. Tips card */}
      <div className={styles.home__card}>
        {/* Card title */}
        <div className={styles.home__card_title}>
          <h3>关于水龙头</h3>
        </div>
        <div>
          {/* <h3>平台说明</h3> */}
          <p>
            - 您将收到一个API令牌和接口地址, 将 OpenAI 官方接口替换为此处提供的地址, 即可开始使用.
          </p>
          <p className={styles.home__card_content_section_lh}>
            - 默认情况下, 令牌有 $1.00 的使用限制, 有效期为1个月. 这是完全免费的, 请勿滥用.
          </p>
          <p>
            - 您可以每24小时从水龙头领取一次.
          </p>
          <p>
            - 如果您愿意支持这个项目, 我们将不胜感激.
          </p>
          <p style={{
                      color: '#333', // 字体颜色
                      backgroundColor: '#f4f4f4', // 背景颜色
                      padding: '10px', // 内边距
                      borderRadius: '5px', // 圆角
                      fontFamily: 'Monaco, monospace', // 字体
                      wordBreak: 'break-all', // 自动换行
                   }}
                 >
                  USDT TRC-20: TTtgEjbTWcv5hryt4pKTQK9Zov47ffA8s1</p>
           {/* <p>联系我们: support@openkey.cloud</p> */}
           <p>
            - 欢迎评论交流, 今天你打卡了吗?
          </p>
         </div>
      </div>
      
      {/* 5. 评论区 */}
      <div className={styles.home__card}>
        {/* Card title */}
        <div className={styles.home__card_title}>
          <h3>讨论区</h3>
        </div>

        {/* General information */}
        <div>
          {/* Waline 评论插件 */}
          <div id="waline"></div>
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <script type="module">
                  import { init } from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';
                  init({
                    el: '#waline',
                    serverURL: 'https://waline.openkey.cloud/',
                  });
                </script>
              `,
            }}
          ></div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  // Collect session
  const session: any = await getSession(context);

  return {
    props: {
      session,
      // If session exists, collect claim status, else return false
      claimed: session ? await hasClaimed(session.twitter_id) : false,
    },
  };
}
