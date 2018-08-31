## Checkbox 多选框

多选框。

### 基础用法

简单的 checkbox。

:::demo
```js
onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

render() {
  return (
    <Checkbox onChange={this.onChange.bind(this)}>Checkbox</Checkbox>
  )
}
```
:::

### 不可用

checkbox 不可用。

:::demo

```js
render() {
  return (
    <div>
      <Checkbox defaultChecked={false} disabled />
      <br />
      <Checkbox defaultChecked disabled />
    </div>
  )
}
```
:::
### 受控的 Checkbox

联动 checkbox。

:::demo

```js
constructor(props) {
  super(props);
  this.state = {
    checked: true,
    disabled: false,
  };
}
toggleChecked() {
  if(this.state.disabled) return
  this.setState({ checked: !this.state.checked });
}

toggleDisable() {
  this.setState({ disabled: !this.state.disabled });
}

onChange(e) {
  console.log('checked = ', e.target.checked);
  this.setState({
    checked: e.target.checked,
  });
}
render() {
  const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;
  return (
    <div>
      <p style={{ marginBottom: '20px' }}>
        <Checkbox
          checked={this.state.checked}
          disabled={this.state.disabled}
          onChange={this.onChange.bind(this)}
        >
          {label}
        </Checkbox>
      </p>
      <p>
        <Button
          type="primary"
          size="small"
          onClick={this.toggleChecked.bind(this)}
        >
          {!this.state.checked ? 'Check' : 'Uncheck'}
        </Button>
        <Button
          style={{ marginLeft: '10px' }}
          type="primary"
          size="small"
          onClick={this.toggleDisable.bind(this)}
        >
          {!this.state.disabled ? 'Disable' : 'Enable'}
        </Button>
      </p>
    </div>
  );
}
```
:::

### Checkbox 组

方便的从数组生成 Checkbox 组。

:::demo
```js
onChange(checkedValues) {
  console.log('checked = ', checkedValues);
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
      <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={this.onChange.bind(this)} />
      <br /><br />
      <Checkbox.Group options={options} defaultValue={['Pear']} onChange={this.onChange.bind(this)} />
      <br /><br />
      <Checkbox.Group options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={this.onChange.bind(this)} />
    </div>
  )
}
```
:::

### 全选
在实现全选效果时，你可能会用到 indeterminate 属性。

:::demo
```js
constructor(props) {
  super(props);
  this.plainOptions = ['Apple', 'Pear', 'Orange'];
  this.defaultCheckedList = ['Apple', 'Orange'];
  this.state = {
    checkedList: this.defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };
}
onChange(checkedList) {
  this.setState({
    checkedList,
    indeterminate: !!checkedList.length && (checkedList.length < this.plainOptions.length),
    checkAll: checkedList.length === this.plainOptions.length,
  });
}
onCheckAllChange(e) {
  this.setState({
    checkedList: e.target.checked ? this.plainOptions : [],
    indeterminate: false,
    checkAll: e.target.checked,
  });
}

render() {
  const plainOptions = this.plainOptions
  return (
    <div>
      <div style={{ borderBottom: '1px solid #E9E9E9' }}>
        <Checkbox
          indeterminate={this.state.indeterminate}
          onChange={this.onCheckAllChange.bind(this)}
          checked={this.state.checkAll}
        >
          Check all
        </Checkbox>
      </div>
      <br />
      <Checkbox.Group options={plainOptions} value={this.state.checkedList} onChange={this.onChange.bind(this)} />
    </div>
  )
}
```
:::

## api

### 属性

#### Checkbox

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |
| checked | 指定当前是否选中 | boolean | false |
| defaultChecked | 初始是否选中 | boolean | false |
| disabled | 失效状态 | boolean | false |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | false |
| onChange | 变化时回调函数 | Function(e:Event) | - |

#### Checkbox Group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的选项 | string\[] | \[] |
| disabled | 整组失效 | boolean | false |
| options | 指定可选项 | string\[] | \[] |
| value | 指定选中的选项 | string\[] | \[] |
| onChange | 变化时回调函数 | Function(checkedValue) | - |

### 方法

#### Checkbox

| 名称 | 描述 |
| --- | --- |
| blur() | 移除焦点 |
| focus() | 获取焦点 |