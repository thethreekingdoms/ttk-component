## TimePicker时间选择框

当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

## 代码演示

### 基本
点击 TimePicker，然后可以在浮层中选择或者输入某一时间。

:::demo
```js
render() {
  function onChange(time, timeString) {
    console.log(time, timeString);
  }
  return(
    <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
  )
}
```
:::



### 受控组件

value 和 onChange 需要配合使用。


:::demo
```js
constructor() {
  super()
  this.state = {
    value: null,
  }
}

onChange(time) {
  console.log(time);
  this.setState({ value: time });
}

render() {
  return <TimePicker value={this.state.value} onChange={this.onChange.bind(this)} />;
}
```
:::


### 三种大小

三种大小的输入框，大的用在表单中，中的为默认。

:::demo
```js
render() {
  return (
    <div>
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
    </div>
  )
}
```
:::


### 禁用
禁用时间选择。

:::demo
```js
render() {
  return (
    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
  )
}
```
:::


### 选择时分

TimePicker 浮层中的列会随着 format 变化，当略去 format 中的某部分时，浮层中对应的列也会消失。

:::demo
```js
render() {
  const format = 'HH:mm';
  return (
    <TimePicker defaultValue={moment('12:08', format)} format={format} />
  )
}
```
:::


### 步长选项

可以使用 hourStep minuteStep secondStep 按步长展示可选的时分秒。


:::demo
```js
render() {
  return <TimePicker minuteStep={15} secondStep={10} />
}
```
:::


### 附加内容

在 TimePicker 选择框底部显示自定义的内容。

:::demo
```js
constructor() {
  super()
  this.state = { open: false };
}

handleOpenChange(open) {
  this.setState({ open });
}

handleClose(){
  this.setState({ open: false })
}

render() {
  return (
    <TimePicker
      open={this.state.open}
      onOpenChange={this.handleOpenChange.bind(this)}
      addon={() => (
        <Button size="small" type="primary" onClick={this.handleClose.bind(this)}>
          Ok
        </Button>
      )}
    />
  );
}
```
:::


### 12 小时制


12 小时制的时间选择器，默认的 format 为 h:mm:ss a。

:::demo
```js
render() {
  function onChange(time, timeString) {
    console.log(time, timeString);
  }
  return(
    <div>
      <TimePicker use12Hours onChange={onChange} />
      <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
      <TimePicker use12Hours format="h:mm a" onChange={onChange} />
    </div>
  )
}
```
:::


## API

```
import moment from 'moment';
<TimePicker defaultValue={moment('13:30:56', 'HH:mm:ss')} />
```


| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|addon	|选择框底部显示自定义的内容|	function|	无|
|allowEmpty	|是否展示清除按钮	|boolean|	true|
|autoFocus|	自动获取焦点|	boolean	|false|
|className|	选择器类名	|string	|''|
|clearText|	清除按钮的提示文案	|string|	clear|
|defaultOpenValue|	当 defaultValue/value 不存在时，可以设置面板打开时默认选中的值|	moment|	moment()|
|defaultValue	|默认时间|	moment|	无|
|disabled	|禁用全部操作|	boolean|	false|
|disabledHours	|禁止选择部分小时选项|function()|	无|
|disabledMinutes|	禁止选择部分分钟选项|	function(selectedHour)|	无|
|disabledSeconds|	禁止选择部分秒选项	|function(selectedHour, selectedMinute)|	无|
|format	|展示的时间格式	|string	|"HH:mm:ss"|
|getPopupContainer|	定义浮层的容器，默认为 body 上新建 div|	function(trigger)	|无|
|hideDisabledOptions|	隐藏禁止选择的选项|	boolean|	false|
|hourStep|	小时选项间隔|	number|	1|
|inputReadOnly	|设置输入框为只读（避免在移动设备上打开虚拟键盘）|	boolean|false|
|minuteStep	|分钟选项间隔	|number	|1|
|open	|面板是否打开	|boolean|	false|
|placeholder|	没有值的时候显示的内容|	string|	"请选择时间"|
|popupClassName	|弹出层类名	|string	|''|
|secondStep	|秒选项间隔|	number|	1|
|use12Hours|	使用 12 小时制，为 true 时 format 默认为 h:mm:ss a	|boolean|	false|
|value|	当前时间|	moment|	无|
|onChange	|时间发生变化的回调	|function(time: moment, timeString: string): void|	无|
|onOpenChange|面板打开/关闭时的回调|	(open: boolean): void|	无|


### 方法
| 名称	|描述 |
|-------|----|
|blur()|	移除焦点|
|focus()|	获取焦点|