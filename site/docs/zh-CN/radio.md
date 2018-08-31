## Radio 单选框

单选框。

### 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

### 基础用法

最简单的用法。

:::demo
```js
onChange(e) {
  console.log(e.target.value)
}

render() {
  return (
    <div>
      <Radio value="1" onChange={this.onChange.bind(this)}>备选项1</Radio>
    </div>
  )
}
```
:::

### 不可用

Radio 不可用。

:::demo 
```js
constructor(props) {
  super(props);
  this.state = {
    disabled: true,
  };
}

toggleDisabled() {
  this.setState({
    disabled: !this.state.disabled,
  });
}
render() {
  return (
    <div>
      <Radio defaultChecked disabled={this.state.disabled}>
        {this.state.disabled ? '不可用' : '可用'}
      </Radio>
      <div style={{ marginTop: 20 }}>
        <Button type="primary" onClick={this.toggleDisabled.bind(this)}>
          Toggle disabled
        </Button>
      </div>
    </div>
  );
}
```
:::

### 单选组合

一组互斥的 Radio 配合使用。

:::demo
```js
constructor(props) {
  super(props);

  this.state = {
    value: 3
  }
}

onChange(e) {
  this.setState({ value: e.target.value});
}

render() {
  return (
    <Radio.Group value={this.state.value} onChange={this.onChange.bind(this)}>
      <Radio value="3">备选项1</Radio>
      <Radio value="6">备选项2</Radio>
      <Radio value="9">备选项3</Radio>
    </Radio.Group>
  )
}
```
:::

### RadioGroup 垂直

垂直的 RadioGroup，配合更多输入框选项。

:::demo
```js
constructor(props) {
  super(props);
  this.state = {
    value: 1
  }
}

onChange(e) {
  this.setState({
    value: e.target.value,
  });
}

render() {
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };
  return (
    <Radio.Group onChange={this.onChange.bind(this)} value={this.state.value}>
      <Radio style={radioStyle} value={1}>备选项 1</Radio>
      <Radio style={radioStyle} value={2}>备选项 2</Radio>
      <Radio style={radioStyle} value={3}>备选项 3</Radio>
      <Radio style={radioStyle} value={4}>
        More...
        {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
      </Radio>
    </Radio.Group>
  );
}
```
:::

### RadioGroup 组合 - 配置方式
通过配置 options 参数来渲染单选框。

:::demo
```js
constructor(props) {
  super(props);
  this.state = {
    value1: 'Apple',
    value2: 'Apple',
    value3: 'Apple',
  }
}
onChange1(e) {
  console.log('radio1 checked', e.target.value);
  this.setState({
    value1: e.target.value,
  });
}

onChange2(e) {
  console.log('radio2 checked', e.target.value);
  this.setState({
    value2: e.target.value,
  });
}

onChange3(e) {
  console.log('radio3 checked', e.target.value);
  this.setState({
    value3: e.target.value,
  });
}
render() {
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
  const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
  ];
  return (
    <div>
      <Radio.Group options={plainOptions} onChange={this.onChange1.bind(this)} value={this.state.value1} />
      <Radio.Group options={options} onChange={this.onChange2.bind(this)} value={this.state.value2} />
      <Radio.Group options={optionsWithDisabled} onChange={this.onChange3.bind(this)} value={this.state.value3} />
    </div>
  );
}
```
:::

### 按钮样式
按钮样式的单选组合。

:::demo
```js
onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}
render() {
  return (
    <div>
      <div>
        <Radio.Group onChange={this.onChange.bind(this)} defaultValue="a">
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b">Shanghai</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
      </div>
      <div style={{ marginTop: 16 }}>
        <Radio.Group onChange={this.onChange.bind(this)} defaultValue="a">
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b" disabled>Shanghai</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
      </div>
      <div style={{ marginTop: 16 }}>
        <Radio.Group disabled onChange={this.onChange.bind(this)} defaultValue="a">
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b">Shanghai</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
      </div>
    </div>
  )
}
```
:::

### 单选组合 - 配合 name 使用
可以为 RadioGroup 配置 `name` 参数，为组合内的 input 元素赋予相同的 `name` 属性，使浏览器把 RadioGroup 下的 Radio 真正看作是一组（例如可以通过方向键始终**在同一组内**更改选项）。

:::demo
```js
render() {
  return(
    <Radio.Group name="radiogroup" defaultValue={1}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  )
}
```
:::

### 大小
大中小三种组合，可以和表单输入框进行对应配合。

:::demo
```js
render() {
  return(
    <div>
      <div>
        <Radio.Group defaultValue="a" size="large">
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b">Shanghai</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
      </div>
      <div style={{ marginTop: 16 }}>
        <Radio.Group defaultValue="a">
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b">Shanghai</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
      </div>
      <div style={{ marginTop: 16 }}>
        <Radio.Group defaultValue="a" size="small">
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b">Shanghai</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
      </div>
    </div>
  )
}
```
:::

### 填底的按钮样式
实色填底的单选按钮样式。

:::demo
```js
render() {
  return(
    <div>
      <div>
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b">Shanghai</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
      </div>
      <div style={{ marginTop: 16 }}>
        <Radio.Group defaultValue="c" buttonStyle="solid">
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b" disabled>Shanghai</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
      </div>
    </div>
  )
}
```
:::

## api
### radio

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |
| checked | 指定当前是否选中 | boolean | false |
| defaultChecked | 初始是否选中 | boolean | false |
| value | 根据 value 进行比较，判断是否选中 | any | - |

### RadioGroup

单选框组合，用于包裹一组 `Radio`。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的值 | any | - |
| disabled | 禁选所有子单选器 | boolean | false |
| name | RadioGroup 下所有 `input[type="radio"]` 的 `name` 属性 | string | - |
| options | 以配置形式设置子元素 | string\[] \| Array&lt;{ label: string value: string disabled?: boolean }> | - |
| size | 大小，只对按钮样式生效 | `large` \| `default` \| `small` | `default` |
| value | 用于设置当前选中的值 | any | - |
| onChange | 选项变化时的回调函数 | Function(e:Event) | - |
| buttonStyle | RadioButton 的风格样式，目前有描边和填色两种风格 | `outline` \| `solid` | `outline` |

## 方法

### Radio

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |