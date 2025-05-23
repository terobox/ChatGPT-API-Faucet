<div align="center">
<img src="https://faucet.openkey.cloud/_next/image?url=%2Flogo.png&w=256&q=75" alt="LOGO"/>

<h1 align="center">ChatGPT API 水龙头</h1>

每24小时可以免费领取 $1.00, 为 AI 生态圈开发者提供支持的公益项目.

[演示 Demo](https://faucet.openkey.cloud/) / [后端服务](https://openkey.cloud/) / [Telegram频道](https://t.me/s/niuyeyegpt)

</div>

## 写在前面

本项目为公益平台 [ChatGPT API 水龙头](https://faucet.openkey.cloud/) 的前端代码，灵感来自加密项目 [MultiFaucet](https://github.com/terobox/MultiFaucet) ，一个免费领取Ethereum代币的网站。

<img src="https://gptocean.com/assets/files/2023-09-22/1695421804-735262-index-fotor-2023092362656.png" alt="LOGO"/>

<img src="https://gptocean.com/assets/files/2023-09-22/1695421851-408589-success-fotor-2023092362725.png" alt="LOGO"/>

<img src="https://gptocean.com/assets/files/2023-09-22/1695421817-258178-balance-fotor-2023092362623.png" alt="LOGO"/>

## 支持模型

<img src="https://terobox.oss-cn-hongkong.aliyuncs.com/openkey/faucet-models.png" alt="models"/>


## 框架介绍

程序使用 Next.js 框架和 React 库开发，其中 _app.tsx 文件是 Next.js 应用程序的主组件，用于初始化页面；

index.tsx 文件是应用程序的主页组件，主要的修改区域；

Layout.tsx 文件定义了应用程序的布局组件，包括头部、内容和页脚。

## 部署流程

**1. 安装依赖**

在项目根目录下运行以下命令，来安装项目所需的依赖包：

```shell
npm install
```

该命令将会根据package.json文件中列出的依赖包进行安装。如果安装过程中遇到问题，您可以尝试使用npm cache clean --force清理npm缓存后重试。

**2. 构建项目**

```shell
npm run build
```

此命令将源代码编译、打包成最终的可执行代码。构建过程可能会涉及代码转换、压缩、打包等一系列任务。

**3. 启动项目**

构建完成后，您可以运行以下命令来启动项目：

```shell
npm run start
```

该命令将用于启动项目。执行此命令后，您应该能够在指定的端口上访问应用程序。

**4. 配置反向代理 / 或使用端口:IP访问**

4.1 前端服务代理配置：

> Proxy dir：/
> 
> Target URL：http://localhost:3000/

4.2 端口:IP访问

打开浏览器，访问http://localhost:3000 , 服务正常启动

**5. 启动开发服务器（用于开发环境测试）**

```shell
npm run dev
```

注意：此命令通常用于开发环境，而不推荐用于生产环境。请确保在运行npm run dev之前已经成功执行了 `npm install` 和 `npm run build` 。以确保所有依赖都已正确安装，项目已经正确构建。

**6. 使用pm2包管理器来运行项目（推荐）**

首先，全局安装pm2

```shell
npm install pm2 -g
```

PM2启动应用

```shell
pm2 start npm --name "chatgpt-api-faucet" -- run start
```

PM2查看日志
```shell
pm2 logs chatgpt-api-faucet
```
⚠️ 注意：如果你安装过程中遇到了问题，请检查依赖是否安装。

## 令牌余额查询地址

https://billing.openkey.cloud/

## 相关项目

* [one-api](https://github.com/songquanpeng/one-api): OpenAI 接口管理 & 分发系统

* [ChatGPT-Cost-Calculator](https://github.com/terobox/ChatGPT-Cost-Calculator): 免费开源的 ChatGPT API 成本计算器

* [PoixeAI](https://poixe.com): 您可以使用平台提供的LLM API接口轻松构建 AI 产品，同时也可以成为供应商，为平台提供大模型资源以赚取收益

## 开源赞助

<a href="https://hematown.com/" target="_blank">
  <img src="https://terobox.oss-cn-hongkong.aliyuncs.com/openkey/poster-hema.png" alt="河马小镇"/>
</a>

## 开源协议

[MIT](https://opensource.org/license/mit/)