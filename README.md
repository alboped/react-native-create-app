# react-native-create-app
react-native 项目模版

基于
* [dva](https://dvajs.com/) 一个基于[redux](https://github.com/reduxjs/redux)和[redux-saga](https://github.com/redux-saga/redux-saga)的数据里方案，简化了redux的用法。
* [redux-persist](https://github.com/rt2zz/redux-persist) redux数据持久化

## 运行项目

### 安装依赖
```bash
$ yarn
```
或
```bash
$ npm install
```

### 运行项目
运行ios

```bash
$ yarn ios
```

运行android

```bash
$ yarn android
```

## 项目结构
```
.
├── android             // 安卓项目目录
├── ios                 // ios项目目录
├── app                 // js文件目录
│   ├── assets          // 静态资源目录
│   ├── components      // 通用组件目录
│   ├── mock            // mock数据目录
│   ├── config          // 配置文件目录
│   ├── models          // dva model 目录
│   ├── navigator       // 导航配置目录
│   ├── page            // 所有页面组件目录
│   ├── utils           // 工具方法目录
│   └── App.js          // 根组件
└── index.js            // 入口文件
```

## 工具API

### redux
#### connect：包装connect装饰器
```js
import { connect } from '……/utils/decorator';

@connect(['app', 'home'])
class ComponsntA extends Component {}

/*

等同于
@connect(state => ({
    app: state.app,
    home: state.home,
}))
class ComponsntA extends Component {}

*/
```

#### dispatchAction：包装dispatch
```js
@connect()
class ComponentA extends Component {
    handle = () => {
        this.props.dispatchAction('app/login', {
            mobile: '123456',
            // ……
        });
        /*

        等同于
        this.props.dispatch({
            type: 'app/login',
            payload: {
                mobile: '123456',
                // ……
            }
        });

        */
    }
}
```

### Navigation 导航
#### push
```js
import Navigation from '……/utils/navigation';

// 跳转到Login页面；
Navigation.push('Login');
```
