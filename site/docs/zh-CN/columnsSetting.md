## ColumnsSetting 


## 代码演示



### 基本
基本

:::demo
```js
constructor(props){
    super(props)
    this.initOption =  [{
        key: 'detail',
        name: '明细',
        option: [{
            id: 1,
            name: '第一',
            visible: true
        }, {
            id: 2,
            name: '第二',
            visible: false
        }, {
            id: 3,
            name: '第三',
            visible: false
        }, {
            id: 4,
            name: '第四',
            visible: false
        }, {
            id: 5,
            name: '第五',
            visible: false
        }, {
            id: 6,
            name: '第六',
            visible: false
        }, {
            id: 7,
            name: '第七',
            visible: false
        }]
    }, {
        key: 'header',
        name: '镖头',
        option: [{
            id: 1,
            name: '第一',
            visible: true
        }, {
            id: 2,
            name: '第二',
            visible: false
        }, {
            id: 3,
            name: '第三',
            visible: false
        }, {
            id: 4,
            name: '第四',
            visible: false
        }, {
            id: 5,
            name: '第五',
            visible: false
        }, {
            id: 6,
            name: '第六',
            visible: false
        }, {
            id: 7,
            name: '第七',
            visible: false
        }]
    }]

    this.state = {
        visible: false,
        initVisible: false,
        data: this.initOption
    }
}
handleClick() {
    this.setState({
        visible: !this.state.visible,
        initVisible: true
    })
}

resetClick(){
    this.setState({
        data: this.initOption,
        visible: false
    })
}

confirmClick(data){
    this.setState({
        data: data,
        visible: false
    })
}

cancelClick(){
    this.setState({
        visible: false
    })
}


classNames(obj) {
    let str = ''
    for( const key in obj ) {
        console.log(key, obj[key])
        if( obj[key] ) {
            str = str + key + ' '
        }
    }
    console.log(str)
    return str
}

render(){
    const { visible, initVisible } = this.state
    let className = this.classNames({
        'animated': true,
        'slideInRight': visible,
        'slideOutRight': !visible
    })
    return (
        <div>
            <a onClick={this.handleClick.bind(this)}>设置</a>
            <div className={className} style={{
                width: '400px',
                height: '400px',
                position: 'fixed',
                top: '50px',
                border: '1px solid #e8e8e8',
                boxShadow: '0 0 5px #e8e8e8',
                zIndex: '1000',
                right: '0',
                opacity: !initVisible ? '0' : '1' 
            }}>
                <ColumnsSetting 
                    option={this.state.data} 
                    singleKey='id'
                    checkedKey='visible' 
                    labelKey="name"
                    sort={true}
                    editName={true}
                    resetClick={()=> this.resetClick()}
                    confirmClick={(arr) => this.confirmClick(arr)}
                    cancelClick={() => this.cancelClick()}
                    itemClassName="item_checkbox"
                />
            </div>
            
        </div>
    )
}
```
:::




### 通过modal来控制

:::demo
```js
constructor(props) {
    super(props)
    this.state = {}
}

async handleClick(){
    const initOption =  [{
        key: 'detail',
        name: '明细',
        option: [{
            id: 1,
            name: '第一',
            visible: true
        }, {
            id: 2,
            name: '第二',
            visible: false
        }, {
            id: 3,
            name: '第三',
            visible: false
        }, {
            id: 4,
            name: '第四',
            visible: false
        }, {
            id: 5,
            name: '第五',
            visible: false
        }, {
            id: 6,
            name: '第六',
            visible: false
        }, {
            id: 7,
            name: '第七',
            visible: false
        }]
    }, {
        key: 'header',
        name: '镖头',
        option: [{
            id: 1,
            name: '第一',
            visible: true
        }, {
            id: 2,
            name: '第二',
            visible: false
        }, {
            id: 3,
            name: '第三',
            visible: false
        }, {
            id: 4,
            name: '第四',
            visible: false
        }, {
            id: 5,
            name: '第五',
            visible: false
        }, {
            id: 6,
            name: '第六',
            visible: false
        }, {
            id: 7,
            name: '第七',
            visible: false
        }]
    }]
    const res =  await Modal.show({
        title: '选择格式',
        width: 500,
        iconType: null,
        footer: null,
        children: <ColumnsSetting 
            option={initOption} 
            singleKey='id'
            sort={true}
            editName={true}
            checkedKey='visible' 
            labelKey="name"
        />
    })
    console.log(res)
}

render(){
    return (
        <a onClick={this.handleClick}>设置</a>
    )
}
```
:::



## api

| api | 说明 | 类型 | 默认值 | 
| ----| ----| ------| -----|
| option | 栏目的类的集合 | array [{key: '栏目类的标识', name: '名称', option: []//"栏目的详细信息集合"}] |  |
| singleKey | 栏目对象中该字段作为每个栏目的标记不变且唯一。 | string/必填 | null|
| checkedKey | 栏目对象中每个元素的该字段判断checkbox是否被选中 | string/必填 | null|
|labelKey | 栏目对象中每个元素的该字段作为checkbox的label| string/必填| null|
|sort | 是否展示排序功能 | Boolean | false |
|editName | 是否展示编辑label功能| Boolean | false|
|resetClick | 点击重置默认设置| function |  |
|confirmClick | 点击确定按钮 | function(data)/data为操作后的数据|  |
| cancelClick | 点击取消按钮 | function() | |
|itemClassName | 每个栏目渲染时的className | string | |