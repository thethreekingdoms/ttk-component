## Dropdown下拉菜单

向下弹出的列表。

## 何时使用
当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

## 代码演示

### 基本

最简单的下拉菜单。

:::demo
```js
render() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="javascript:;">1st menu item</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="javascript:;">2nd menu item</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="javascript:;">3rd menu item</a>
      </Menu.Item>
    </Menu>
  )
  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" href="#">
        Hover me <Icon type="down" />
      </a>
    </Dropdown>
  )
}
```
:::


### 弹出位置

支持 6 个弹出位置

:::demo
```js
render() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="javascript:;">1st menu item</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="javascript:;">2nd menu item</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="javascript:;">3rd menu item</a>
      </Menu.Item>
    </Menu>
  )
  return (
    <div>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button>bottomLeft</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button>bottomCenter</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="bottomRight">
        <Button>bottomRight</Button>
      </Dropdown>
      <br />
      <Dropdown overlay={menu} placement="topLeft">
        <Button>topLeft</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="topCenter">
        <Button>topCenter</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="topRight">
        <Button>topRight</Button>
      </Dropdown>
    </div>
  )
}
```
:::


### 其他元素
分割线和不可用菜单项。

:::demo
```js

render() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a target="_blank" rel="noopener noreferrer" href="javascript:;">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a target="_blank" rel="noopener noreferrer" href="javascript:;">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" disabled>3rd menu item（disabled）</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" href="javascript:;">
        Hover me <Icon type="down" />
      </a>
    </Dropdown>
  )
}
```
:::



### 触发方式

默认是移入触发菜单，可以点击触发。

:::demo
```js
render() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="javascript:;">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="javascript:;">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  )
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a className="ant-dropdown-link" href="javascript:;">
        Click me <Icon type="down" />
      </a>
    </Dropdown>
  )
}
```
:::



### 触发事件

点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。


:::demo
```js
render() {
  const onClick = function ({ key }) {
    message.info(`Click on item ${key}`);
  }
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd memu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" href="javascript:;">
        Hover me, Click menu item <Icon type="down" />
      </a>
    </Dropdown>
  )
}
```
:::


### 带下拉框的按钮

左边是按钮，右边是额外的相关功能菜单。

:::demo
```js
render() {
  function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }

  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
      <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
      <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button
        onClick={handleButtonClick}
        overlay={menu}
        disabled
        style={{ marginLeft: 8 }}
      >
        Dropdown
      </Dropdown.Button>
      <Dropdown overlay={menu}>
        <Button style={{ marginLeft: 8 }}>
          Button <Icon type="down" />
        </Button>
      </Dropdown>
    </div>
  )
}
```
:::


### 多级菜单
传入的菜单里有多个层级。

:::demo
```js
render() {
  const SubMenu = Menu.SubMenu;

  const menu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <SubMenu title="sub menu">
        <Menu.Item>3rd menu item</Menu.Item>
        <Menu.Item>4th menu item</Menu.Item>
      </SubMenu>
      <SubMenu title="disabled sub menu" disabled>
        <Menu.Item>5d menu item</Menu.Item>
        <Menu.Item>6th menu item</Menu.Item>
      </SubMenu>
    </Menu>
  );
  return(
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" href="#">
        Cascading menu <Icon type="down" />
      </a>
    </Dropdown>
  )
}
```
:::


### 菜单隐藏方式

默认是点击关闭菜单，可以关闭此功能。


:::demo
```js
constructor() {
  super()
  this.state = {
    visible: false,
  }
}
handleMenuClick(e) {
  if (e.key === '3') {
    this.setState({ visible: false });
  }
}

handleVisibleChange(flag){
  this.setState({ visible: flag });
}

render() {
  const menu = (
    <Menu onClick={this.handleMenuClick.bind(this)}>
      <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
      <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
      <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}
      onVisibleChange={this.handleVisibleChange.bind(this)}
      visible={this.state.visible}
    >
      <a className="ant-dropdown-link" href="javascript:;">
        Hover me <Icon type="down" />
      </a>
    </Dropdown>
  );
}
```
:::

### 右键菜单
默认是移入触发菜单，可以点击触发。

:::demo
```js
render() {
  const menu = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  )
  return (
    <Dropdown overlay={menu} trigger={['contextMenu']}>
      <span style={{ userSelect: 'none' }}>Right Click on Me</span>
    </Dropdown>
  )
}
```
:::


## api



| 参数	|说明	|类型	|默认值 |
|-------|----|-----|-------|
|disabled	|菜单是否禁用|	boolean	|-|
|getPopupContainer|	菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。示例|	Function(triggerNode)|	() => document.body|
|overlay|	菜单|	Menu|	-|
|placement|	菜单弹出位置：bottomLeft bottomCenter bottomRight topLeft topCenter topRight|	String|	bottomLeft|
|trigger	|触发下拉的行为	|Array<click、hover、contextMenu>	|['hover']|
|visible	|菜单是否显示|	boolean|	-|
|onVisibleChange|	菜单显示状态改变时调用，参数为 visible|	Function(visible)|	-|

overlay 菜单使用 Menu，还包括菜单项 Menu.Item，分割线 Menu.Divider

```
注意： Menu.Item 必须设置唯一的 key 属性。

Dropdown 下的 Menu 默认不可选中。如果需要菜单可选中，可以指定 <Menu selectable>
```


### Dropdown.Button

| 参数	|说明	|类型	|默认值 |
|-------|----|-----|-------|
|disabled	|菜单是否禁用|	boolean|	-|
|overlay	|菜单	|Menu|	-|
|placement|	菜单弹出位置：bottomLeft bottomCenter bottomRight topLeft topCenter topRight|	String|	bottomLeft|
|size|	按钮大小，和 Button 一致|	string	|'default'|
|trigger	|触发下拉的行为|	Array<click\hover\contextMenu>	|['hover']|
|type|	按钮类型，和 Button 一致|	string|	'default'|
|visible|	菜单是否显示|	boolean|	-|
|onClick|	点击左侧按钮的回调，和 Button 一致|	Function|	-|
|onVisibleChange|	菜单显示状态改变时调用，参数为 visible|	Function|	-|

