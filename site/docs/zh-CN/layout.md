## Layout 布局

+ layout 布局采用了flex布局，所以针对ie10以下的浏览器请慎重选择。

## 代码演示

### 基本用法
基本用法

:::demo
```js
render() {
  return (
    <div style={{width: '100%', height:'300px', display: 'flex', flexDirection: 'column'}}>
      <div style={{height: '40px', background: '#7dbcea'}}>header</div>
      <div style={{background: 'rgba(16, 142, 233, 1)', flex: '1'}}>content</div>
      <div style={{height: '60px',  background: '#7dbcea'}}>footer</div>
    </div>
  )
}
```
:::





### 横向布局
横向布局

:::demo
```js
render() {
  return (
    <div style={{width: '100%', height:'300px', display: 'flex'}}>
      <div style={{width: '40px', background: '#7dbcea'}}>Sider</div>
      <div style={{background: 'rgba(16, 142, 233, 1)', flex: '1'}}>content</div>
    </div>
  )
}
```
:::























