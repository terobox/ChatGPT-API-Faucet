import styles from "styles/Layout.module.scss"; // Styles
import { default as HTMLHead } from "next/head"; // Meta

// Page layout
export default function Layout({
  children,
}: {
  children: (JSX.Element | null)[];
}) {
  return (
    <div className={styles.layout}>
      {/* Meta + Head */}
      <Head />

      {/* Layout sizer */}
      <div className={styles.layout__content}>{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Head + Meta
function Head() {
  return (
    <HTMLHead>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* Favicon */}
      <link rel="shortcut icon" href="/favicon.ico" />

      {/* Primary Meta Tags */}
      <title>水龙头</title>
      <meta
        name="title"
        content="ChatGPT API 水龙头 | 每24小时可免费申请 $1.00 令牌 "
      />
      <meta
        name="description"
        content="每24小时可以免费领取 $1.00, 这是为 AI 开发者提供的."
      />

      {/* OG + Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://faucet.openkey.cloud" />
      <meta
        property="og:title"
        content="ChatGPT API 水龙头"
      />
      <meta
        property="og:description"
        content="每24小时可以免费领取 $1.00, 这是为 AI 开发者提供的."
      />
      <meta
        property="og:image"
        content="https://faucet.openkey.cloud/meta.png"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://faucet.openkey.cloud" />
      <meta
        property="twitter:title"
        content="ChatGPT API 水龙头"
      />
      <meta
        property="twitter:description"
        content="每24小时可以免费领取 $1.00, 这是为 AI 开发者提供的."
      />
      <meta
        property="twitter:image"
        content="https://faucet.openkey.cloud/meta.png"
      />

    </HTMLHead>
  );
}

// Footer
function Footer() {
  return (
    <div className={styles.layout__footer}>
      {/* Disclaimer */}
      <p>
        本平台提供的免费 ChatGPT API 令牌, 有 OpenKey 账号池服务提供支持. 我们不会收集用户信息, 并对使用此服务造成的任何损失不承担责任. 用户应该理解与此服务相关的风险, 并独立评估其价值. 我们保留随时修改或终止此服务的权利, 恕不另行通知. 请谨慎使用.
      </p>
    </div>
  );
}
