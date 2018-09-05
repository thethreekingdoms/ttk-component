## Popover 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。


## 代码演示

### 基本
最简单的用法，浮层的大小由内容区域决定。

:::demo
```js
render() {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return(
    <Popover content={content} title="Title">
      <Button type="primary">Hover me</Button>
    </Popover>
  )
}
```
:::

### 三种触发方式
鼠标移入、聚集、点击。

:::demo
```js
render() {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return(
    <div>
      <Popover content={content} title="Title" trigger="hover">
        <Button>Hover me</Button>
      </Popover>
      <Popover content={content} title="Title" trigger="focus">
        <Button>Focus me</Button>
      </Popover>
      <Popover content={content} title="Title" trigger="click">
        <Button>Click me</Button>
      </Popover>
    </div>
  )
}
```
:::


### 位置

位置有十二个方向。

:::demo
```js
render() {
  const text = <span>Title</span>;
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  const buttonWidth = 70
  return(
    <div className="demo">
      <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
        <Popover placement="topLeft" title={text} content={content} trigger="click">
          <Button>TL</Button>
        </Popover>
        <Popover placement="top" title={text} content={content} trigger="click">
          <Button>Top</Button>
        </Popover>
        <Popover placement="topRight" title={text} content={content} trigger="click">
          <Button>TR</Button>
        </Popover>
      </div>
      <div style={{ width: buttonWidth, float: 'left' }}>
        <Popover placement="leftTop" title={text} content={content} trigger="click">
          <Button>LT</Button>
        </Popover>
        <Popover placement="left" title={text} content={content} trigger="click">
          <Button>Left</Button>
        </Popover>
        <Popover placement="leftBottom" title={text} content={content} trigger="click">
          <Button>LB</Button>
        </Popover>
      </div>
      <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
        <Popover placement="rightTop" title={text} content={content} trigger="click">
          <Button>RT</Button>
        </Popover>
        <Popover placement="right" title={text} content={content} trigger="click">
          <Button>Right</Button>
        </Popover>
        <Popover placement="rightBottom" title={text} content={content} trigger="click">
          <Button>RB</Button>
        </Popover>
      </div>
      <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
        <Popover placement="bottomLeft" title={text} content={content} trigger="click">
          <Button>BL</Button>
        </Popover>
        <Popover placement="bottom" title={text} content={content} trigger="click">
          <Button>Bottom</Button>
        </Popover>
        <Popover placement="bottomRight" title={text} content={content} trigger="click">
          <Button>BR</Button>
        </Popover>
      </div>
    </div>
  )
}
```
:::


### 从浮层内关闭

使用 visible 属性控制浮层显示。


:::demo
```js
constructor() {
  super()
  this.state = {
    visible: false,
  }
}

hide(){
  this.setState({
    visible: false,
  });
}

handleVisibleChange(visible){
  this.setState({ visible });
}

render() {
  return (
    <Popover
      content={<a onClick={this.hide.bind(this)}>Close</a>}
      title="Title"
      trigger="click"
      visible={this.state.visible}
      onVisibleChange={this.handleVisibleChange.bind(this)}
    >
      <Button type="primary">Click me</Button>
    </Popover>
  );
}
```
:::



### 箭头指向

设置了 arrowPointAtCenter 后，箭头将指向目标元素的中心。

:::demo
```js
render() {
  const text = <span>Title</span>;
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )
  return(
    <div>
      <Popover placement="topLeft" title={text} content={content}>
        <Button>Align edge / 边缘对齐</Button>
      </Popover>
      <Popover placement="topLeft" title={text} content={content} arrowPointAtCenter>
        <Button>Arrow points to center / 箭头指向中心</Button>
      </Popover>
    </div>
  )
}
```
:::


## API


| 参数	|说明	|类型	|默认值 |
|-------|----|-----|-------|
|content	|卡片内容	|string、ReactNode|	无|
|title	|卡片标题	|string、ReactNode|	无|

更多属性请参考 Tooltip。

##注意
请确保 Popover 的子元素能接受 onMouseEnter、onMouseLeave、onFocus、onClick 事件。