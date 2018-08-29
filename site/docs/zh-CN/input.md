## Input 输入框

通过鼠标或键盘输入字符

### 基础用法

::: demo
```js
onChange(e) {
  console.log(e.target.value)
}

render() {
  return (
    <div>
      <Input onChange={this.onChange.bind(this)} placeholder="请输入内容" />
      <span className="mk-padding"></span>
      <Input disabled placeholder="请输入内容" />
    </div>
  )
}
```
:::

### 三种大小
我们为 Input 输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px
::: demo
```js
render () {
  return (
    <div className="example-input">
      <Input size="large" placeholder="large size" />
      <span className="mk-padding"></span>
      <Input placeholder="default size" />
      <span className="mk-padding"></span>
      <Input size="small" placeholder="small size" />
    </div>
  )
}
```
:::


### 前置/后置标签
用于配置一些固定组合。

::: demo
```js
render() {
  const selectBefore = (
    <Select defaultValue="Http://" style={{ width: 90 }}>
      <Option value="Http://">Http://</Option>
      <Option value="Https://">Https://</Option>
    </Select>
  )
  const selectAfter = (
    <Select defaultValue=".com" style={{ width: 80 }}>
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  )
  return (
    <div>
      <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
      <p style={{padding: '10px'}}></p>
      <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
    </div>
  )
}

```
:::


### 输入框组合

输入框的组合展现。

注意：使用 compact 模式时，不需要通过 Col 来控制宽度。

:::demo
```js
render() {
  const InputGroup  = Input.Group
  return(
    <div>
      <InputGroup size="large">
        <Col span={5}>
          <Input defaultValue="0571" />
        </Col>
        <Col span={8}>
          <Input defaultValue="26888888" />
        </Col>
      </InputGroup>
      <p></p>
      <InputGroup compact>
        <Input style={{ width: '20%' }} defaultValue="0571" />
        <Input style={{ width: '30%' }} defaultValue="26888888" />
      </InputGroup>
      <p></p>
      <InputGroup compact>
        <Select defaultValue="Zhejiang">
          <Option value="Zhejiang">Zhejiang</Option>
          <Option value="Jiangsu">Jiangsu</Option>
        </Select>
        <Input style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
      </InputGroup>
      <p></p>
      <InputGroup compact>
        <Input style={{ width: '50%' }} defaultValue="input content" />
        <DatePicker />
      </InputGroup>
    </div>
  )
}
```
:::


### 搜索框
带有搜索按钮的输入框，2.5.0 时新增。

:::demo
```js
render() {
  const Search = Input.Search
  return (
    <div>
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
      <br /><br />
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        enterButton
      />
      <br /><br />
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={value => console.log(value)}
      />
    </div>
  )
}
```
:::

### 文本域
用于多行输入。

:::demo
```js
render() {
  const { TextArea } = Input
  return (
    <TextArea rows={4} />
  )
}
```
:::


### 适应文本高度的文本域
autosize 属性适用于 textarea 节点，并且只有高度会自动变化。另外 autosize 可以设定为一个对象，指定最小行数和最大行数。

:::demo
```js
render() {
  const { TextArea } = Input
  return (
    <div>
      <TextArea placeholder="Autosize height based on content lines" autosize />
      <div style={{ margin: '24px 0' }} />
      <TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
    </div>
  )
}
```
:::


### 前缀和后缀
在输入框上添加前缀或后缀图标。

:::demo
```js
constructor(props) {
  super(props);
  this.state = {
    userName: '',
  };
}

emitEmpty() {
  this.setState({ userName: '' });
}

onChangeUserName(e) {
  this.setState({ userName: e.target.value });
}


refFunc(node) {
  this.userNameInput = node
}


render() {
  const { userName } = this.state;
  const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty.bind(this)} /> : null;
  return (
    <Input
      className="input_emitEmpty"
      placeholder="Enter your username"
      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
      suffix={suffix}
      value={userName}
      onChange={this.onChangeUserName.bind(this)}
      ref={this.refFunc.bind(this) }
    />
  );
}
```
:::



## api


### input
| 参数          | 说明            | 类型            | 默认值   |
|-------------  |---------------- |----------------|-------- |
| addonAfter    | 带标签的 input，设置后置标签 | string/ReactNode   | — |
| addonBefore   | 带标签的 input，设置前置标签 | string/ReactNode  | — |
| defaultValue     | 输入框默认内容      | string          |  — |
| disabled     | 是否禁用状态，默认为 false      | boolean          | false |
| id   | 输入框的 id    | string          | — |
| prefix | 带有前缀图标的 input | string/ReactNode | - |
| size | 控件大小。注：标准表单内的输入框大小限制为 large。可选 large default small| string | default |
| suffix | 带有后缀图标的 input | string|ReactNode | - |
| type | 声明 input 类型，同原生 input 标签的 type 属性，见：MDN(请直接使用 Input.TextArea 代替 type="textarea") | string | text |
| value | 输入框内容 | string | - |
|onPressEnter | 按下回车的回调 | function(e) | - |


如果 Input 在 Form.Item 内，并且 Form.Item 设置了 id 和 options 属性，则 value defaultValue 和 id 属性会被自动设置。

Input 的其他属性和 React 自带的 input 一致。

### Input.TextArea 

| 参数            | 说明          | 类型            | 默认值        |
|----------------|----------------|-----------------|--------------|
| autosize        | 自适应内容高度，可设置为 true|false 或对象：{ minRows: 2, maxRows: 6 }| boolean|object | false |
| defaultValue    | 输入框默认内容| string | - |
| value	          | 输入框内容    | string | - |
| onPressEnter    | 按下回车的回调 | function(e) | - |


Input.TextArea 的其他属性和浏览器自带的 textarea 一致。


### Input.Search

| 参数            | 说明          | 类型            | 默认值        |
|----------------|----------------|-----------------|--------------|
| enterButton   | 是否有确认按钮，可设为按钮文字| boolean|ReactNode | false |
|onSearch       | 点击搜索或按下回车键时的回调 | function(value, event) |

其余属性和 Input 一致。


### Input.Group

| 参数            | 说明          | 类型            | 默认值        |
|----------------|----------------|-----------------|--------------|
| compact         | 是否用紧凑模式   | boolean        |false        |
| size            |Input.Group 中所有的 Input 的大小，可选 large default small| string |default |

```
<Input.Group>
  <Input />
  <Input />
</Input.Group
```
