## Button 按钮
常用的操作按钮。

### 按钮的类型

按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。

:::demo
```js
render() {
  return (
    <div>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
    </div>
  )
}
```
:::

### 图表按钮

当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。

如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。

:::demo
```js
render() {
  return (
    <div>
      <Button type="primary" shape="circle" icon="search" />
      <Button type="primary" icon="search">Search</Button>
      <Button shape="circle" icon="search" />
      <Button icon="search">Search</Button>
      <br />
      <Button shape="circle" icon="search" />
      <Button icon="search">Search</Button>
      <Button type="dashed" shape="circle" icon="search" />
      <Button type="dashed" icon="search">Search</Button>
    </div>
  )
}
```
:::


### 按钮尺寸

按钮有大、中、小三种尺寸。

通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。

:::demo
```js

constructor(props) {
  super(props )
  this.state = {
    size: 'large'
  }
}

handleSizeChange(e) {
  this.setState({ size: e.target.value });
}


render() {
  const size = this.state.size;
  return (
    <div>
      <Radio.Group value={size}  onChange={this.handleSizeChange.bind(this)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br /><br />
      <Button type="primary" size={size}>Primary</Button>
      <Button size={size}>Normal</Button>
      <Button type="dashed" size={size}>Dashed</Button>
      <Button type="danger" size={size}>Danger</Button>
      <br />
      <Button type="primary" shape="circle" icon="download" size={size} />
      <Button type="primary" icon="download" size={size}>Download</Button>
      <br />
      <Button.Group size={size}>
        <Button type="primary">
          <Icon type="left" />Backward
        </Button>
        <Button type="primary">
          Forward<Icon type="right" />
        </Button>
      </Button.Group>
    </div>
  )
}
```
:::



### 不可用状态
添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变

:::demo
```js
render() {
  return  (
    <div>
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>Primary(disabled)</Button>
      <br />
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
      <br />
      <Button type="dashed">Dashed</Button>
      <Button type="dashed" disabled>Dashed(disabled)</Button>
      <div style={{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }}>
        <Button ghost>Ghost</Button>
        <Button ghost disabled>Ghost(disabled)</Button>
      </div>
    </div>
  )
}
```
:::


### 按钮组合

可以将多个 Button 放入 Button.Group 的容器中。

通过设置 size 为 large small 分别把按钮组合设为大、小尺寸。若不设置 size，则尺寸为中。

:::demo
```js
render() {
  const ButtonGroup = Button.Group
  return (
    <div>
      <h4>Basic</h4>
      <ButtonGroup>
        <Button>Cancel</Button>
        <Button>OK</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button disabled>L</Button>
        <Button disabled>M</Button>
        <Button disabled>R</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>L</Button>
        <Button>M</Button>
        <Button>R</Button>
      </ButtonGroup>

      <h4>With Icon</h4>
      <ButtonGroup>
        <Button type="primary">
          <Icon type="left" />Go back
        </Button>
        <Button type="primary">
          Go forward<Icon type="right" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary" icon="cloud" />
        <Button type="primary" icon="cloud-download" />
      </ButtonGroup>
    </div>
  )
}
```
:::


### 多个按钮组合

按钮组合使用时，推荐使用1个主操作 + n 个次操作，3个以上操作时把更多操作放到 Dropdown.Button 中组合使用。

:::demo
```js
render() {
  function handleMenuClick (e) {
    console.log(e)
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Button type="primary">primary</Button>
      <Button>secondary</Button>
      <Dropdown overlay={menu}>
        <Button>
          Actions <Icon type="down" />
        </Button>
      </Dropdown>
    </div>
  )
}
```
:::

### 幽灵按钮

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

:::demo
```js
render() {
  return (
    <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
      <Button type="primary" ghost>Primary</Button>
      <Button ghost>Default</Button>
      <Button type="dashed" ghost>Dashed</Button>
      <Button type="danger" ghost>danger</Button>
    </div>
  )
}
```
:::


### block 按钮
block属性将使按钮适合其父宽度。

:::demo
```js
render() {
  return (
    <div>
      <Button type="primary" block>Primary</Button>
      <Button block>Default</Button>
      <Button type="dashed" block>Dashed</Button>
      <Button type="danger" block>danger</Button>
    </div>
  )
}
```
:::


### 加载中状态

添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

:::demo
```js
constructor() {
  super()
  this.state = {
    loading: false,
    iconLoading: false,
  }
}

enterLoading(){
  this.setState({ loading: true });
}

enterIconLoading(){
  this.setState({ iconLoading: true });
}

render() {
  return (
    <span>
      <Button type="primary" loading>
        Loading
      </Button>
      <Button type="primary" size="small" loading>
        Loading
      </Button>
      <br />
      <Button type="primary" loading={this.state.loading} onClick={this.enterLoading.bind(this)}>
        Click me!
      </Button>
      <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading.bind(this)}>
        Click me!
      </Button>
      <br />
      <Button shape="circle" loading />
      <Button type="primary" shape="circle" loading />
    </span>
  );
}
```
:::



## api


| 参数      | 说明    | 类型      | 默认值   |
|---------- |-------- |----------|-------- |
|disabled   |按钮失效状态| boolean  | false |
|ghost      |幽灵属性，使按钮背景透明| boolean |false |
|href       |点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | -|
|htmlType   | 设置 button 原生的 type 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string |  button |
|icon | 设置按钮的图标类型 | string | -|
|loading | 设置按钮载入状态 |boolean/{ delay: number } |  false |
|shape |设置按钮形状，可选值为 circle 或者不设 |string | -|
|size |设置按钮大小，可选值为 small large 或者不设 |string |default |
|target |相当于 a 链接的 target 属性，href 存在时生效 |string | -|
| type |设置按钮类型，可选值为 primary dashed danger(版本 2.7 中增加) 或者不设 |string | -|
| onClick | click 事件的 handler | function | - |
| block |  将按钮宽度调整为其父宽度的选项 | boolean | <font color="#dd0000"> false </font></font> | 

```
<Button>Hello world!</Button> 最终会被渲染为 <button><span>Hello world!</span></button>，
并且除了上表中的属性，其它属性都会直接传到 <button></button>。

<Button href="http://example.com">Hello world!</Button> 
则会渲染为 <a href="http://example.com"><span>Hello world!</span></a>。
```
