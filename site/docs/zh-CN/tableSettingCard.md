## TableSettingCard

表格设置栏


### 演示代码
:::demo
```js
constructor(props){
    super(props)
    this.state = {
        visible: false,
        data: [
            {
                "id": 50000100001,
                "fieldName": "voucherDate",
                "caption": "日期",
                "isHeader": true,
                "isVisible": false,
            }, {
                "id": 50000100002,
                "fieldName": "docTypeAndCode",
                "caption": "凭证字号",
                "isHeader": true,
                "isVisible": true,
            }, {
                "id": 50000100003,
                "fieldName": "amountSum",
                "caption": "总金额",
                "isHeader": true,
                "isVisible": false,
            }, {
                "id": 50000100004,
                "fieldName": "summary",
                "caption": "摘要",
                "isHeader": true,
                "isVisible": true,
            }, {
                "id": 50000100005,
                "fieldName": "accountCodeName",
                "caption": "会计科目",
                "isVisible": false,
            }, {
                "id": 50000100006,
                "fieldName": "currencyAndExchangeRate",
                "caption": "币种/汇率",
                "isVisible": false,
            }, {
                "id": 50000100007,
                "fieldName": "unitName",
                "caption": "计量单位",
                "isVisible": false,
            }, {
                "id": 50000100008,
                "fieldName": "quantity",
                "caption": "数量",
                "isVisible": false
            }, {
                "id": 50000100009,
                "fieldName": "price",
                "caption": "单价",
                "isVisible": false
            }, {
                "id": 50000100010,
                "fieldName": "origAmount",
                "caption": "外币金额",
                "isVisible": false,
            }
        ]
    }
}

render(){
    const data = this.state.data
    console.log(data)
    return (
        <div>
            <a onClick={this.handleClick.bind(this)}>设置</a>
            <TableSettingCard
                data={data}
                showTitle={true}
                positionClass={'content-container'}
                visible={this.state.visible}
                confirmClick={(data)=> this.winClick(data)}
                cancelClick={(data)=> this.winClick(data)}
            />
        </div>
    )
}

handleClick(){
    this.setState({
        visible: true
    })
}

winClick(data){
    console.log(data)
    this.setState({
        data: data ? data : this.state.data,
        visible: false
    })
}
```
:::