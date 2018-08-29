## activeLabelSelect 多类型选择  

用于不同类型的选择控件。

::: demo Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。
```js
render() {
  return (
    <div>
      <Activelabelselect title="成功提示的文案" type="success" />
      <Activelabelselect title="消息提示的文案" type="info" />
      <Activelabelselect title="警告提示的文案" type="warning" />
      <Activelabelselect title="错误提示的文案" type="error" />
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