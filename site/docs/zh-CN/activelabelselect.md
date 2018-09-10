## ActiveLabelSelect 多类型选择  


::: demo Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。
```js
constructor() {
    super()
    this.state = {
        selectLabel: 'fruit',
        value: null
    }
}

onChange(key, value) {
    this.setState({
        selectLabel: key, 
        value: value
    })
}

render() {
    console.log(this.state)
    const options = [{
        name: "水果",
        key: 'fruit',
        value: 'apple', // value表示选中的值
        children: [{
            label: '苹果',
            value: 'apple'
        },{
            label: '草莓',
            value: '草莓'
        },{
            label: '香蕉',
            value: 'xiangjiao'
        },{
            label: '西瓜',
            value: 'xigua'
        }]
        
    }, {
        name: "城市",
        key: 'city',
        value: '1', // value表示选中的值
        children: [{
            label: '北京',
            value: '1'
        },{
            label: '上海',
            value: '2'
        },{
            label: '浙江',
            value: '3'
        },{
            label: '深圳',
            value: '4'
        }]
        
    }, {
        name: "交通工具",
        key: 'road',
        value: '1', // value表示选中的值
        children: [{
            label: '汽车',
            value: '1'
        },{
            label: '火车',
            value: '2'
        },{
            label: '轮船',
            value: '3'
        },{
            label: '飞机',
            value: '4'
        }]
        
    }]
    const { selectLabel, value } = this.state
    return (
        <div>
            <Activelabelselect onChange={this.onChange.bind(this)} selectLabel={selectLabel} value={value}  option={options}  />
        </div>
    )
}
```
:::


| api | 说明 | 类型 | 默认值 |
|-----| -----|------| -----|
|option|下拉选项| array | [] |
|selectLabel| 已经选中的label值| string | 如果不穿改参数的话将默认第一个|
|onChange | 下拉选项发生变化时触发的函数| function |  |

option 的数据格式为
```
{
name: '水果',
key: 'fruit',
value: 'apple', // value表示选中的值
children: [{
        label: '苹果',
        value: 'apple'
    },{
        label: '草莓',
        value: '草莓'
    },{
        label: '香蕉',
        value: 'xiangjiao'
    },{
        label: '西瓜',
        value: 'xigua'
    }]
}
```