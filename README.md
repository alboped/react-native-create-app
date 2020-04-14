# react-native-create-app
> react-native项目模版；

<img width="760" src="./walle.jpg" alt="icon">

- [x] [样式工具方法；](./app/utils/styleUtils/index.md)
- [x] 集成[dva](https://dvajs.com)、[redux-persist](https://github.com/rt2zz/redux-persist)；
- [ ] react-navigation封装；
  - [x] 公共方法高阶组件；
  - [ ] 页面跳转拦截；
  - [ ] 路由深度链接；
- [ ] 基础UI组件库；
- [ ] webview封装；
- [ ] 热更细封装；
- [ ] [工具方法；](./app/utils/globalUtils/index.md)
  - [ ] 字符串处理；
  - [x] 数组处理；
  - [x] 数字、金额处理；
  - [x] JSON处理；
  - [ ] 对象处理；
- [ ] 埋点；
- [ ] bundlejs 拆分；

## 项目目录

```json
.
├── App.js                                //根组件
├── README.md
├── __tests__
│   └── App-test.js
├── _config.yml
├── app                                   // js代码目录
│   ├── App.js
│   ├── config                            // 配置文件
│   │   └── persist.conf.js
│   ├── models                            // dva model目录
│   │   ├── app.js
│   │   └── index.js
│   ├── navigator                         // 导航
│   │   ├── StackRouter.js
│   │   ├── createStackNavigator.js
│   │   ├── index.js
│   │   ├── interceptors
│   │   ├── routeHoc.js
│   │   └── useRouter.js
│   ├── pages                             // 页面
│   │   ├── auth                          // 权限相关
│   │   │   ├── login                     // 登录
│   │   │   │   └── Login.js
│   │   │   └── register                  // 注册
│   │   │       └── Register.js
│   │   ├── componsnts-example            // 示例页面
│   │   │   ├── HocDemo.js
│   │   │   ├── HookDemo.js
│   │   │   ├── button
│   │   │   │   ├── ButtonExample.js
│   │   │   │   └── ButtonExample.style.js
│   │   │   ├── button-group
│   │   │   │   ├── ButtonGroupExample.js
│   │   │   │   └── ButtonGroupExample.style.js
│   │   │   ├── card
│   │   │   │   └── CardExample.js
│   │   │   ├── checkbox
│   │   │   ├── icon
│   │   │   ├── index.js
│   │   │   ├── navigation.js
│   │   │   └── text
│   │   │       └── TextExample.js
│   │   └── launch-screen                 // 启动页
│   │       ├── LaunchScreen.js
│   │       └── LaunchScreen.style.js
│   └── utils                             // 工具目录
│       ├── dva.js
│       ├── globalUtils                   // 全局扩展方法
│       │   ├── arrayUril.js
│       │   ├── index.js
│       │   ├── index.md
│       │   ├── jsonUtil.js
│       │   ├── numberUtil.js
│       │   ├── objectUtil.js
│       │   └── stringUtil.js
│       ├── index.js
│       ├── persist.js
│       ├── styleUtils                    // 样式工具
│       │   ├── createStyle.js
│       │   ├── index.js
│       │   ├── index.md
│       │   ├── screenUtil.js
│       │   └── styleTranslateMethods.js
│       └── webviewUtils                  // webview 工具
│           ├── index.md
│           └── urlUtil.js
├── app.json
├── babel.config.js
├── index.js
├── metro.config.js
├── package.json
├── react-native.config.js
├── transformers                         // 代码转换
│   ├── index.md
│   └── style.js
├── walle.build.config.js
├── walle.jpg
├── yarn-error.log
└── yarn.lock
```
