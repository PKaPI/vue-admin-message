## 项目说明
1、 基于vue-cli3构建的vue、element-ui、vuex、vue-router后端管理系统

2、 安装依赖包。
```
npm install  或者cnpm install 或者yarn(推荐)


```
3、运行脚手架。
```js
 1.npm run dev //或者 npm run start 启动开发环境

 2.npm run build //打包静态文件,输出到dist文件夹

 ```
 ## 项目目录结构说明
 
 ```js
 .
├── README.md
├── babel.config.js
├── package.json
├── postcss.config.js
├── public
│   ├── assets  //资源管理
│   │   ├── css
│   │   ├── img
│   │   ├── logo.png
│   │   └── vuetable.json
│   ├── config  //项目配置文件管理
│   ├── favicon.ico
│   ├── index.html
│   ├── mock   //mock数据
│   │   ├── homeData.json
│   │   ├── navData.json
│   │   └── userData.json
│   └── vuetable.json
├── src
│   ├── api   //api管理
│   │   ├── index.js
│   │   └── restful.js
│   ├── assets // 样式资源文件
│   │   ├── css
│   │   ├── img
│   │   ├── logo.png
│   │   └── vuetable.json
│   ├── components  //公用组件管理
│   │   ├── common
│   │   ├── loading
│   │   └── page
│   ├── constants  //公用静态变量管理
│   │   └── options.js
│   ├── layout  //公用布局文件
│   │   ├── globalLayout
│   │   ├── sideLayout
│   │   └── topLayout
│   ├── main.js  //入口文件
│   ├── pages  //页面
│   │   ├── global
│   │   └── home
│   ├── router   // 路由管理
│   │   └── index.js
│   ├── store   // vuex store 管理
│   │   ├── getters.js
│   │   └── index.js
│   └── utils   //工具函数
│       ├── cookie.js
│       ├── events.js
│       ├── http.js
│       ├── interceptor.js
│       ├── localDb.js
│       └── tool.js
├── vue.config.js  //vue-cli项目配置文件
└── yarn.lock

 ```
 ## 代码提交管理规范
相关npm安装包：cz-conventional-changelog
相关提交命令：npm run commit 

使用Commitizen提交时，系统会提示您在提交时填写所有必需的提交字段。没有更多的时间等到git commit hook运行并拒绝你的提交（尽管这仍然有用）。不再需要通过CONTRIBUTING.md来查找首选格式。获取有关提交邮件格式的即时反馈，并提示您输入必填字段。

当你在Commitizen友好存储库中工作时，系统将提示您填写任何必填字段，并且您的提交消息将根据项目维护人员定义的标准进行格式化。

具体可访问：https://www.npmjs.com/package/commitizen



