## Rate 评分

评分组件

## 代码演示


### 基本

最简单的用法。

:::demo
```js
render() {
  return<Rate />
}
```
:::

### 半星

支持选中半星。

:::demo
```js
render() {
  return <Rate allowHalf defaultValue={2.5} />
}
```
:::


### 文案展现

给评分组件加上文案展示。

:::demo
```js
constructor() {
  super()
  this.state = {
    value: 3,
  }
}

handleChange(value) {
  this.setState({ value });
}

render() {
  const { value } = this.state;
  return (
    <span>
      <Rate onChange={this.handleChange.bind(this)} value={value} />
      {value && <span className="ant-rate-text">{value} stars</span>}
    </span>
  );
}
```
:::


### 只读

只读，无法进行鼠标交互。

:::demo
```js
render() {
  return(
    <Rate disabled defaultValue={2} />
  )
}
```
:::

### 清除
支持允许或者禁用清除。

:::demo
```js
render() {
  return (
    <div>
      <Rate defaultValue={3} /> allowClear: true
      <br />
      <Rate allowClear={false} defaultValue={3} /> allowClear: false
    </div>
  )
}
```
:::

### 其他字符

可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。

:::demo
```js
render() {
  return (
    <div>
      <Rate character={<Icon type="heart" />} allowHalf />
      <br />
      <Rate character="A" allowHalf style={{ fontSize: 36 }} />
      <br />
      <Rate character="好" allowHalf />
    </div>
  )
}
```
:::


## api


| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|allowClear	|是否允许再次点击后清除	|boolean	|true|
|allowHalf|	是否允许半选|	boolean	|false|
|autoFocus|	自动获取焦点|	boolean	|false|
|character	|自定义字符|	ReactNode	|<Icon type="star" />|
|className|	自定义样式类名|	string|	-|
|count|	star 总数|	number|	5|
|defaultValue	|默认值|	number|	0|
|disabled	|只读，无法进行交互|	boolean	|false|
|style|	自定义样式对象|	object|	-|
|value|	当前数，受控值|	number|	-|
|onBlur	|失去焦点时的回调	|Function()|	-|
|onChange	|选择时的回调	|Function(value: number)|	-|
|onFocus|	获取焦点时的回调|	Function()|	-|
|onHoverChange|	鼠标经过时数值变化的回调|	Function(value: number)	|-|
|onKeyDown|	按键回调|	Function(event)|	-|

## 方法

| 参数 | 说明 | 
| --- | --- |
|blur()	|移除焦点|
|focus()|	获取焦点|

