## DatePicker日期选择框

输入或选择日期的控件。


## 代码演示

### 基本

最简单的用法，在浮层中可以选择或者输入日期。


:::demo
```js
render() {
  const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <div>
      <DatePicker onChange={onChange} />
      <br />
      <MonthPicker onChange={onChange} placeholder="Select month" />
      <br />
      <RangePicker onChange={onChange} />
      <br />
    </div>
  )
}
```
:::


### 日期格式

使用 format 属性，可以自定义日期显示格式。

:::demo
```js
render() {
  const { MonthPicker, RangePicker } = DatePicker;

  const dateFormat = 'YYYY/MM/DD';
  const monthFormat = 'YYYY/MM';
  return (
    <div>
      <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
      <br />
      <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
      <br />
      <RangePicker
        defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
        format={dateFormat}
      />
    </div>
  )
}
```
:::

### 三种大小

三种大小的输入框，若不设置，则为 default

:::demo
```js
constructor() {
  super()
  this.state = {
    size: 'default',
  };
}


handleSizeChange(e) {
  this.setState({ size: e.target.value });
}

render() {
  
  const { MonthPicker, RangePicker } = DatePicker;
  const { size } = this.state;
  return (
    <div>
      <Radio.Group value={size} onChange={this.handleSizeChange.bind(this)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br /><br />
      <DatePicker size={size} />
      <br />
      <MonthPicker size={size} placeholder="Select Month" />
      <br />
      <RangePicker size={size} />
      <br />  
    </div>
  );
}
```
:::


### 日期时间选择

增加选择时间功能，当 showTime 为一个对象时，其属性会传递给内建的 TimePicker

:::demo
```js
render() {
  const { RangePicker } = DatePicker;

  function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }

  function onOk(value) {
    console.log('onOk: ', value);
  }
  return (
    <div>
      <DatePicker
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        placeholder="Select Time"
        onChange={onChange}
        onOk={onOk}
      />
      <br />
      <RangePicker
        showTime={{ format: 'HH:mm' }}
        format="YYYY-MM-DD HH:mm"
        placeholder={['Start Time', 'End Time']}
        onChange={onChange}
        onOk={onOk}
      />
    </div>
  )
}
```
:::



### 禁用

选择框的不可用状态。

:::demo
```js
render() {
  const { MonthPicker, RangePicker } = DatePicker
  const dateFormat = 'YYYY-MM-DD';
  return (
    <div>
      <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
      <br />
      <MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
      <br />
      <RangePicker
        defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
        disabled
      />
    </div>
  )
}
```
:::



### 不可选择日期和时间

可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用。

:::demo
```js
render() {
  const { MonthPicker, RangePicker } = DatePicker;

  function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }

  function disabledDateTime() {
    return {
      disabledHours: () => range(0, 24).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }

  function disabledRangeTime(_, type) {
    if (type === 'start') {
      return {
        disabledHours: () => range(0, 60).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    }
    return {
      disabledHours: () => range(0, 60).splice(20, 4),
      disabledMinutes: () => range(0, 31),
      disabledSeconds: () => [55, 56],
    };
  }
  return (
    <div>
      <DatePicker
        format="YYYY-MM-DD HH:mm:ss"
        disabledDate={disabledDate}
        disabledTime={disabledDateTime}
        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
      />
      <br />
      <MonthPicker disabledDate={disabledDate} placeholder="Select month" />
      <br />
      <RangePicker
        disabledDate={disabledDate}
        disabledTime={disabledRangeTime}
        showTime={{
          hideDisabledOptions: true,
          defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
        }}
        format="YYYY-MM-DD HH:mm:ss"
      />
    </div>
  )
}
```
:::


### 预设范围

可以预设常用的日期范围以提高用户体验。

:::demo
```js
render() {
  const RangePicker = DatePicker.RangePicker;
  function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }
  return(
    <div>
      <RangePicker
        ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
        onChange={onChange}
      />
      <br />
      <RangePicker
        ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
        showTime
        format="YYYY/MM/DD HH:mm:ss"
        onChange={onChange}
      />
    </div>
  )
}

```
:::


## api

日期类组件包括以下四种形式。

+ DatePicker

+ MonthPicker

+ RangePicker

+ WeekPicker


注意：DatePicker、MonthPicker、RangePicker、WeekPicker 部分 locale 是从 value 中读取，所以请先正确设置 moment 的 locale。

```
import moment from 'moment';
import 'moment/locale/zh-cn';

<DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />
```

### 共同的 API#

以下 API 为 DatePicker、MonthPicker、RangePicker, WeekPicker 共享的 API。

| 参数	|说明	|类型	|默认值 |
|-------|----|-----|-------|
|allowClear	|是否显示清除按钮	|boolean|	true|
|autoFocus	|自动获取焦点	|boolean	|false|
|className	|选择器 |className	|string	''|
|dateRender	|自定义日期单元格的内容	|function(currentDate: moment, today: moment) => React.ReactNode|	-|
|disabled	|禁用	|boolean|	false|
|disabledDate	|不可选择的日期|	(currentDate: moment) => boolean|	无|
|dropdownClassName|	额外的弹出日历 className	|string|	-|
|getCalendarContainer	|定义浮层的容器，默认为 body 上新建 div	|function(trigger)|	无|
|locale|	国际化配置|	object|	默认配置|
|open|	控制弹层是否展开|	boolean|-|
|placeholder|	输入框提示文字|	string、RangePicker[]|	-|
|popupStyle	|额外的弹出日历样式	|object|	{}|
|size	|输入框大小，large 高度为 40px，small 为 24px，默认是 32px|	string|	无|
|style|	自定义输入框样式	|object|	{}|
|onOpenChange	|弹出日历和关闭日历的回调|	function(status)|	无|


### 共同的方法
| 名称 | 描述 |
|------|------|
|blur()|	移除焦点|
|focus()|	获取焦点|


### DatePicker

| 参数	|说明	|类型	|默认值 |
|-------|----|-----|-------|
|defaultValue	|默认日期|	moment|	无|
|disabledTime	|不可选择的时间	|function(date)	|无|
|format|	展示的日期格式，配置参考 moment.js|	string|	"YYYY-MM-DD"|
|mode	|日期面板的状态	|time、date、month、year	|'date'|
|renderExtraFooter|	在面板中添加额外的页脚|	() => React.ReactNode|	-|
|showTime|	增加时间选择功能|	Object、boolean	|TimePicker Options|
|showTime.defaultValue|	设置用户选择日期时默认的时分秒，例子|	moment|	moment()|
|showToday	|是否展示“今天”按钮|	boolean|	true|
|value	|日期|	moment|	无|
|onChange	|时间发生变化的回调|	function(date: moment, dateString: string)|	无|
|onOk	|点击确定按钮的回调	|function()|	-|
|onPanelChange|	日期面板变化时的回调|	function(value, mode)|	-|


### MonthPicker

| 参数	|说明	|类型	|默认值 |
|-------|----|-----|-------|
|defaultValue	|默认日期	|moment	|无|
|format	|展示的日期格式，配置参考 moment.js|	string|	"YYYY-MM"|
|monthCellContentRender	|自定义的月份内容渲染方法|	function(date, locale): ReactNode|	-|
|renderExtraFooter	|在面板中添加额外的页脚|	() => React.ReactNode	|-|
|value	|日期	|moment|	无|
|onChange	|时间发生变化的回调，发生在用户选择时间时	|function(date: moment, dateString: string)|	-|


### RangePicker

| 参数	|说明	|类型	|默认值 |
|-------|----|-----|-------|
|defaultValue	|默认日期|	moment[]|	无|
|disabledTime	|不可选择的时间	|function(dates: moment, moment, partial: 'start'/'end')|	无|
|format|	展示的日期格式|	string|	"YYYY-MM-DD HH:mm:ss"|
|ranges    |  	预设时间范围快捷选择|	{ [range: string]: moment[] } 、 () => { [range: string]: moment[] }|	无|
|renderExtraFooter|	在面板中添加额外的页脚|	() => React.ReactNode	|-|
|showTime	|增加时间选择功能|	Object、boolean	|TimePicker Options|
|showTime.defaultValue|	设置用户选择日期时默认的时分秒，例子|	moment[]	|moment(), moment()|
|value|	日期|	moment[]|	无|
|onCalendarChange	|待选日期发生变化的回调|	function(dates: moment, moment, dateStrings: string, string)	|无|
|onChange	|日期范围发生变化的回调	|function(dates: moment, moment, dateStrings: string, string)	|无|
|onOk	|点击确定按钮的回调|	function()|	-|



