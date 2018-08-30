## BackTop回到顶部

返回页面顶部的操作按钮。

## 何时使用

+ 当页面内容区域比较长时；

+ 当用户需要频繁返回顶部查看相关内容时

## 代码演示


### 基本
最简单的用法。

:::demo
```js
render() {
    return(
        <div>
            <BackTop />
            Scroll down to see the bottom-right
            <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
            button.
        </div>
    )
}
```
:::


### 自定义样式
可以自定义回到顶部按钮的样式，限制宽高：40px * 40px

:::demo
```js
render () {
    return (
        <div>
            <BackTop>
            <div className="ant-back-top-inner">UP</div>
            </BackTop>
            Scroll down to see the bottom-right
            <strong style={{ color: '#1088e9' }}> blue </strong>
            button.
        </div>
    )
}
```
:::


#API


有默认样式，距离底部 50px，可覆盖。

自定义样式宽高不大于 40px * 40px。


| 参数              | 说明                  | 类型                  | 默认值                |
|-------------------|----------------------|-----------------------|-----------------------|
|target	|设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数|	Function|	() => window|
|visibilityHeight|	滚动高度达到此参数值才出现 BackTop|	number|	400|
|onClick	|点击按钮的回调函数	|Function|	-|
