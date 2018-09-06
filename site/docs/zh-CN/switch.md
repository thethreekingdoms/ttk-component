## Switch 开关

开关选择器。

## 代码演示

### 基本
最简单的用法。

:::demo
```js
render () {
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }
  return <Switch defaultChecked onChange={onChange} />
}
```
:::


### 不可用
Switch 失效状态。

:::demo
```js
constructor() {
  super()
  this.state = {
    disabled: true,
  }
}

toggle() {
  this.setState({
    disabled: !this.state.disabled,
  });
}

render() {
  return (
    <div>
      <Switch disabled={this.state.disabled} defaultChecked />
      <br />
      <Button type="primary" onClick={this.toggle.bind(this)}>Toggle disabled</Button>
    </div>
  );
}
```
:::


### 文字和图标
带有文字和图标。

:::demo
```js
render () {
  return (
    <div>
      <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
      <br />
      <Switch checkedChildren="1" unCheckedChildren="0" />
      <br />
      <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} defaultChecked />
    </div>
  )
}
```
:::


### 两种大小
size="small" 表示小号开关。

:::demo
```js
render() {
  return (
    <div>
      <Switch defaultChecked />
      <br />
      <Switch size="small" defaultChecked />
    </div>
  )
}
```
:::


### 加载中
标识开关操作仍在执行中。

:::demo
```js
render() {
  return(
    <div>
      <Switch loading defaultChecked />
      <br />
      <Switch size="small" loading />
    </div>
  )
}
```
:::


## api


| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|autoFocus|	组件自动获取焦点|	boolean|	false|
|checked|	指定当前是否选中|	boolean	|false|
|checkedChildren|	选中时的内容|	string、ReactNode	| |
|defaultChecked	|初始是否选中|	boolean	|false|
|disabled|是否禁用|	boolean	|false|
|loading|	加载中的开关|	boolean|false|
|size	|开关大小，可选值：default small|	string|	default|
|unCheckedChildren|	非选中时的内容|	string、ReactNode	| |
|onChange	|变化时回调函数|	Function(checked:Boolean)	| |