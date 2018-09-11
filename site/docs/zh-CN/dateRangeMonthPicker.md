## DateRangeMonthPicker


该组件是针对DatePicker组件的封装，主要适用于选择区间的组件。同样DatePicker也有选择区间的组件。如果该组件不符合你的要求。请查看DatePicker


## 代码演示


:::demo
```js
render() {
    return (
        <div>
            <DateRangeMonthPicker
                format="YYYY-MM"
                allowClear={false}
                mode= {['month', 'month']}
                startEnableDate="2018-02"
                onChange={(value)=> console.log(value)}
                value={[moment('2018-07-01'), moment('2018-11-01')]}
            />
        </div>
    )
}
```
:::


## api

| 参数	|说明	|类型	|默认值 |
|-------|----|-----|-------|
|startEnableDate	|启用时间，不设置变没有	|string|	null|
|onChange	|选择的时间发生变化时触发|	function| |	
|value	|组件的值	|array	| |


+ 其他的设置项请参考antd的MonthPicker组件

