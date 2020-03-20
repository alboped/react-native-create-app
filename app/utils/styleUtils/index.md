# Style 样式转换工具

- [x] 尺寸单位转换；
- [x] 支持`margin` `padding`等样式的简写；
- [x] 其他便捷功能；


## .setBaseWidth(width: Number)：设置屏幕适配基准宽度
设置屏幕适配基准宽度，即设计稿的屏幕宽度，默认为**750**；  
类似于web端rem的用法。如需修改，请在项目初始化时设置；  
> **以下示例均以750为基准宽度；**

示例：
```js
Style.setBaseWidth(750);  
```

## .create(options: Object)：创建样式
创建样式，可替代RN自带的`StyleSheet.create()`方法；

```js
Style.create({
  ...
});
```

### 尺寸单位：rpx

尺寸大小用字符串的形式 `width: '100rpx'`；
单位用`rpx`的尺寸会自动转换为适配屏幕大小的尺寸；

输入：
```js
{
  width: '100rpx'
}
```

输出：
```js
{
  width: 50
}
```

### 样式简写

RN自带的样式写法不支持像css那样的简写，使用createStyle可以用css简写的方式写样式；

目前支持简写的样式：

- margin
- padding
- border
- boxShadow
- textShadow
- borderRadius

**其中除`boxShadow`、`textShadow`外，其他样式与css的简写方式相同；**  
**`boxShadow`中，第三个属性输出的属性为`shadowRadius`，第四个参数输出的属性为`shadowOpacity`或`shadowColor`；**
**`textShadow`同理；**

输入：
```js
{
  margin: '20rpx 40rpx',
  padding: '20rpx 40rpx 50rpx 100rpx',
  border: '1rpx solid #333',
  boxShadow: '10rpx 10rpx 10rpx #333',
  borderRadius: '10rpx 10rpx 20rpx 0.5 20rpx',
}
```

输出：
```js
{
  // margin
  marginVertical: 10,
  marginHorizontal: 20,

  // padding
  paddingTop: 10,
  paddingRight: 20,
  paddingBottom: 25,
  paddingLeft: 50,

  // border
  borderWidth: 0.5,
  borderStyle: 'solid',
  borderColor: '#333',

  // boxShadow
  shadowOffset: {
    width: 5,
    height: 5,
  },
  shadowRadius: 5,
  shadowOpacity: 0.5,
  shadowColor: '#333',

  // borderRadius
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  borderBottomRightRadius: 10,
  borderBottomLeftRadius: 10,
}
```

### 其他便捷方式

#### absoluteFill
`StyleSheet.absoluteFillObject` 的便捷写法，绝对定位并占满父元素；

输入：
```js
{
  absoluteFill: true,
}
```
输出：
```js
{
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}
```

## .rpx(value: Number)：转换尺寸
将设计稿尺寸转换为实际尺寸；
如果在`create`之外定义样式，需要手动转换尺寸，可以使用`Style.rpx()`方法；

示例：
```js
Style.rpx(100);   // 输出值为 50
```

---
### 后期还会有一大堆强大又好用的功能，敬请期待...