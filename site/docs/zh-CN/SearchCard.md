
## SearchCard 高级搜索框




:::demo
```js
constructor(props){
    super(props)
    this.state = {}
}

transformDateToNum(date) {
    try{
        if( !date ){
            return 0
        }
        let time = date
        if (typeof date == 'string') {
            time = moment(date)
        }
        return parseInt(moment.format('YYYYMM'))
    }catch(err){
        console.log(err)
        return 0
    }

}

disabledDate(current, pointTime, type) {
    const enableddate = moment('2012-08-01')
    // const enableddateNum = this.transformDateToNum(enableddate)
    if (type == 'pre') {
        let currentMonth = this.transformDateToNum(current)
        let enableddateMonth = this.transformDateToNum(enableddate)
        return currentMonth<enableddateMonth
    } else {
        let currentMonth = this.transformDateToNum(current)
        let pointTimeMonth = this.transformDateToNum(pointTime)
        let enableddateMonth = this.transformDateToNum(enableddate)
        return currentMonth < pointTimeMonth || currentMonth<enableddateMonth
    }

}

render(){
    return (
        <div>
            <SearchCard
                searchClick={(...arg) =>console.log(arg)}
                refreshBtn={<span>刷新</span>}
                menuBtn={[
                    <Button key="11111">按钮一</Button>
                ]}
                normalSearchValue={{
                    date: [moment(), moment()], 
                    query: {
                        accountcode: '',
                        currencyId: '0',
                        nodatanodisplay: [ '1' ],
                        date_end: moment().endOf('month'),
                        date_start: moment().startOf('month'),
                    }
                }}
                normalSearchChange={(...arg)=>console.log(arg)}
                normalSearch={[{
                    key: '222',
                    name: 'date',
                    key: 1,
                    type: 'DateRangeMonthPicker',
                    format: "YYYY-MM",
                    startEnableDate: moment(),
                    // open: '{{data.showPicker}}',
                    // renderExtraFooter:'{{$renderDatePickerExtraFooter}}',
                    // disabledDate: '{{function(value){$disabledRangePicker(value)}}}',
                    mode: ['month', 'month'],
                    onPanelChange: (...arg)=>console.log(arg)
                }, {
                    key: '3333',
                    name: 'simpleCondition',
                    type: 'Input.Search',
                    className: 'mk-input',
                    onChange: '',
                    placeholder: "科目/摘要/凭证号/金额"
                }]}
                moreSearch={{
                    accountcode: '',
                    currencyId: '0',
                    nodatanodisplay: [ '1' ],
                    date_end: moment().endOf('month'),
                    date_start: moment().startOf('month'),
                }}
                moreSearchItem = {[{
                    name: 'date',
                    key: 'date',
                    range: true,
                    label: '会计期间',
                    centerContent: '到',
                    isTime: true,
                    pre: {
                        name: 'date_start',
                        key: 'date_start',
                        type: 'DatePicker.MonthPicker',
                        mode: ['month', 'month'],
                        format: "YYYY-MM",
                        noClear: true,
                        decoratorDate: (value, value2) => this.disabledDate(value, value2, "pre"),
                        rules: [{
                            type: 'object',
                            required: true,
                            message: '该项是必填项',
                        }],
                    },
                    next: {
                        name: 'date_end',
                        key: 'date_end',
                        type: 'DatePicker.MonthPicker',
                        mode: ['month', 'month'],
                        format: "YYYY-MM",
                        noClear: true,
                        decoratorDate: (value, value2)=>this.disabledDate(value, value2, "next"),
                        rules: [{
                            type: 'object',
                            required: true,
                            message: '该项是必填项',
                        }],
                    }
                }, {
                    name: 'code',
                    key: 'code',
                    range: true,
                    label: '凭证号',
                    centerContent: '~',
                    pre: {
                        name: 'startCode',
                        key: 'startCode',
                        type: 'Input',
                    },
                    next: {
                        name: 'endCode',
                        key: 'endCode',
                        type: 'Input',
                    }
                }, {
                    name: 'accountId',
                    key: 'accountId',
                    label: '科目',
                    type: 'Select',
                    showSearch: true,
                    childType: 'Option',
                    optionFilterProp:"children",
                    option: [{label: 1, value: 1},{label: 2, value: 2}],
                }, {
                    name: 'summary',
                    label: '摘要',
                    type: 'Input',
                    key: 'summary',
                },
                {
                    name: 'voucherState',
                    key: 'voucherState',
                    label: '状态',
                    type: 'Select',
                    childType: 'Option',
                    option: [{
                        label: '成功',
                        value: '1'
                    },{
                        label: '失败',
                        value: '2'
                    }],
                }]}
            />
        </div>
    )
}
```
:::



## api


| api | 说明 |  类型 | 默认值 | 
| ---- | ----- | ----- | -----|
|  searchClick | 点击高级查询框中查询按钮 | function(value) | | 
| cancelClick | 点击高级查询框中取消按钮 | function(value) | | 
| clearClick | 点击高级查询框中清除按钮 | function(value) | | 
|confirmBtn | 查询按钮| object { hidden: 是否隐藏, text: 文案 } |  | 
| cancelBtn | 取消按钮| object { hidden: 是否隐藏, text: 文案 } |  |
| clearBtn |清除按钮| object { hidden: 是否隐藏, text: 文案 } |  |
|refreshBtn |简单查询条件中的刷新按钮| reactNode |  |
|menuBtn | 高级查询右侧按钮集合 |  array 为reactnode组成的集合 |  |
|normalSearch | 简单查询集合如 | array | 尽量不适用改参数使用normalSearcChildren |
|normalSearchValue |  简单查询所有的值与normalSearch 配套使用| object | |
|normalSearchChange | 简单查询的值发生变化触发的参数normalSearch 配套使用 | function(value)| |
|normalSearcChildren| 简单查询集合与normalSearch集合的区别该集合为reactnode节点，且searchCard没有对改子节点的控制| array | |
|moreSearch| 高级查询每一个项的字段和值 | object | | 
|moreSearchItem| 高级查询 | array | |

#### moreSearchItem 

moreSearchItem是一个对象的集合该对象可以具有以下参数


| api       | 说明      | 类型     | 默认值 | 
| -----     | -----     | ----     | ----- |
| name      | 必填并且高级查询输出是会将name当做字段输出 | string | null |
| range | 是否是区间的选项和pre和next配套使用 | boolean | null |
| type | 标识antd中相应的表单类型组件 | string |  |
|label | 该表单想的label | string |  |
| centerContent | 和 range 为true配套使用表示两个组件中间的值 |  reactnode 或 string | null  |
| pre | 和 range 为true配套使用 表示前一个表单项| object 对象下面的字段与moreSearchItem相同range相关除外|  null |
| noClear | 为true时点击清除也不会被清除 | boolean |      |
| decoratorDate | 在range中且type为时间选择的组件使用 | function(current, value) 且返回值为Boolean，是否禁用该时间 | null |


+ 该组件并不是特别完善，如果涉及复杂的表单项交互，最好不要使用。