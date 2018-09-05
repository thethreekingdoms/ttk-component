## Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

### 基础表格

基础的表格展示用法。

:::demo 当`Table`元素中注入`data`和`columns` 对象数组后，在`column`中用`prop`属性来对应对象中的键名即可填入数据，用`label`属性来定义表格的列名。可以使用`width`属性来定义列宽。
```js
constructor(props) {
  super(props);

  this.state = {
    columns: [{
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    }, {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }],
    data: [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    },{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }]
  }
}

render() {
  return (
    <Table
      style={{width: '100%'}}
      columns={this.state.columns}
      maxHeight={200}
      dataSource={this.state.data}
    />
  )
}
```
:::

### 带斑马纹表格

使用带斑马纹的表格，可以更容易区分出不同行的数据。

:::demo `stripe`属性可以创建带斑马纹的表格。它接受一个`Boolean`，默认为`false`，设置为`true`即为启用。
```js
constructor(props) {
  super(props);

  this.state = {
    columns: [
      {
        label: "日期",
        prop: "date",
        width: 180
      },
      {
        label: "姓名",
        prop: "name",
        width: 180
      },
      {
        label: "地址",
        prop: "address"
      }
    ],
    data: [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }]
  }
}

render() {
  return (
    <Table
      style={{width: '100%'}}
      columns={this.state.columns}
      data={this.state.data}
      stripe={true}
    />
  )
}
```
:::

### 带边框表格

:::demo 默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用`border`属性，它接受一个`Boolean`，设置为`true`即可启用。
```js
constructor(props) {
  super(props);

  this.state = {
    columns: [
      {
        label: "日期",
        prop: "date",
        width: 180
      },
      {
        label: "姓名",
        prop: "name",
        width: 180
      },
      {
        label: "地址",
        prop: "address"
      }
    ],
    data: [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }]
  }
}

render() {
  return (
    <Table
      style={{width: '100%'}}
      columns={this.state.columns}
      data={this.state.data}
      border={true}
    />
  )
}

```
:::

### 带状态表格

可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。

:::demo 可以通过指定 Table 组件的 `rowClassName` 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。
```js
constructor(props) {
  super(props);

  this.state = {
    columns: [
      {
        label: "日期",
        prop: "date",
        width: 180
      },
      {
        label: "姓名",
        prop: "name",
        width: 180
      },
      {
        label: "地址",
        prop: "address"
      }
    ],
    data: [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }]
  }
}

render() {
  return (
    <Table
      style={{width: '100%'}}
      columns={this.state.columns}
      data={this.state.data}
      stripe={true}
    />
  )
}

rowClassName(row, index) {
  if (index === 1) {
    return 'info-row';
  } else if (index === 3) {
    return 'positive-row';
  }

  return '';
}

render() {
  return (
    <Table
      style={{width: '100%'}}
      rowClassName={this.rowClassName.bind(this)}
      columns={this.state.columns}
      data={this.state.data}
    />
  )
}
```
:::

### 固定表头

纵向内容过多时，可选择固定表头。

:::demo 只要在`Table`元素中定义了`height`属性，即可实现固定表头的表格，而不需要额外的代码。
```js
constructor(props) {
  super(props);

  this.state = {
    columns: [
      {
        label: "日期",
        prop: "date",
        width: 180
      },
      {
        label: "姓名",
        prop: "name",
        width: 180
      },
      {
        label: "地址",
        prop: "address"
      }
    ],
    data: [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    },{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }]
  }
}

render() {
  return (
    <Table
      style={{width: '100%'}}
      columns={this.state.columns}
      data={this.state.data}
      border={true}
      height={250}
    />
 )
}
```
:::

### 固定列

横向内容过多时，可选择固定列。

:::demo 固定列需要使用`fixed`属性，它接受 `Boolean` 值或者`left` `right`，表示左边固定还是右边固定。
```js
constructor(props) {
  super(props);

  this.state = {
    columns: [
      {
        label: "日期",
        prop: "date",
        width: 150,
        fixed: 'left'
      },
      {
        label: "姓名",
        prop: "name",
        width: 160
      },
      {
        label: "省份",
        prop: "province",
        width: 160
      },
      {
        label: "地址",
        prop: "address",
        width: 400
      },
      {
        label: "邮编",
        prop: "zip",
        width: 120
      },
      {
        label: "操作",
        prop: "zip",
        fixed: 'right',
        width: 100,
        render: ()=>{
          return <span><Button type="text" size="small">查看</Button><Button type="text" size="small">编辑</Button></span>
        }
      }
    ],
    data: [{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    },{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }]
  }
}

render() {
  return (
    <Table
      style={{width: '100%'}}
      columns={this.state.columns}
      data={this.state.data}
      border={true}
    />
  )
}
```
:::

### 固定列和表头

横纵内容过多时，可选择固定列和表头。

:::demo 固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。
```js
constructor(props) {
  super(props);

  this.state = {
    columns: [
      {
        label: "日期",
        prop: "date",
        width: 150,
        fixed: 'left',
        align: 'center'
      },
      {
        label: "姓名",
        prop: "name",
        width: 160,
        align: 'right'
      },
      {
        label: "省份",
        prop: "province",
        width: 160
      },
      {
        label: "地址",
        prop: "address",
        width: 400
      },
      {
        label: "邮编",
        prop: "zip",
        width: 120
      }
    ],
    data: [{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }]
  }
}

render() {
  return (
    <Table
      style={{width: '100%'}}
      columns={this.state.columns}
      data={this.state.data}
      border={true}
      height={250}
    />
  )
}
```
:::

### 流体高度

当数据量动态变化时，可以为 Table 设置一个最大高度。

:::demo 当数据量动态变化时，可以为 `Table` 设置一个最大高度 `maxHeight`。
```js
constructor(props) {
  super(props);

  this.state = {
    columns: [
      {
        label: "日期",
        prop: "date",
        width: 150,
        fixed: 'left',
        align: 'center'
      },
      {
        label: "姓名",
        prop: "name",
        width: 160,
        align: 'right'
      },
      {
        label: "省份",
        prop: "province",
        width: 160
      },
      {
        label: "地址",
        prop: "address",
        width: 400
      },
      {
        label: "邮编",
        prop: "zip",
        width: 120
      },
      {
        label: "操作",
        width: 120,
        fixed: 'right',
        render: (row, column, index)=>{
          return <span><Button type="text" size="small" onClick={this.deleteRow.bind(this, index)}>移除</Button></span>
        }
      }
    ],
    data: [{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }]
  }
}

deleteRow(index) {
  const { data } = this.state;
  data.splice(index, 1);
  this.setState({
    data: [...data]
  })
}

render() {
  return (
    <Table
      style={{width: '100%'}}
      columns={this.state.columns}
      data={this.state.data}
      border={true}
      maxHeight={250}
    />
  )
}
```
:::

### 多级表头

数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。

:::demo 数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。
```js
constructor(props) {
  super(props);

  this.state = {
    columns: [
      {
        label: "日期",
        prop: "date",
        width: 150
      },
      {
        label: "配送信息",
        subColumns: [
          {
            label: "姓名",
            prop: "name",
            width: 160
          },
          {
            label: "地址",
            subColumns: [
              {
                label: "省份",
                prop: "province",
                width: 160
              },
              {
                label: "城市",
                prop: "address",
                width: 400
              },
              {
                label: "邮编",
                prop: "zip",
                width: 120
              }
            ]
          }
        ]
      }
    ],
    data: [{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }]
  }
}


render() {
  return (
    <Table
      style={{width: '100%'}}
      columns={this.state.columns}
      data={this.state.data}
      border={true}
    />
  )
}
```
:::

### 自定义列模板

自定义列的显示内容，可组合其他组件使用

:::demo 通过设置列的`render`属性，可以自定义渲染内容
```js
constructor(props) {
  super(props);

  this.state = {
    columns: [
      {
        type: 'index'
      },
      {
        label: "日期",
        prop: "date",
        width: 150,
        render: function(data){
          return (
          <span>
            <Icon name="time"/>
            <span style={{marginLeft: '10px'}}>{data.date}</span>
          </span>)
        }
      },
      {
        label: "姓名",
        prop: "name",
        width: 160,
        render: function(data){
          return <Tag>{data.name}</Tag>
        }
      },
      {
        label: "操作",
        prop: "address",
        render: function(){
          return (
            <span>
             <Button plain={true} type="info" size="small">编辑</Button>
             <Button type="danger" size="small">删除</Button>
            </span>
          )
        }
      }
    ],
    data: [{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }]
  }
}

render() {
  return (
    <Table
      style={{width: '100%'}}
      columns={this.state.columns}
      data={this.state.data}
      border={true}
      height={250}
      highlightCurrentRow={true}
      onCurrentChange={item=>{console.log(item)}}
    />
  )
}
```
:::

### 展开行

当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。

:::demo 通过设置 type="expand" 和 `expandPannel` 可以开启展开行功能, `expandPannel` 的返回值会被渲染为展开行的内容
```js
constructor(props) {
  super(props);

  this.state = {
    columns: [
      {
        type: 'expand',
        expandPannel: function(data){
          return (
            <Form labelPosition="left" inline={true} className="demo-table-expand">
              <Form.Item label="商品名称"><span>好滋好味鸡蛋仔</span></Form.Item>
              <Form.Item label="所属店铺"><span>王小虎夫妻店</span></Form.Item>
              <Form.Item label="商品 ID"><span>12987122</span></Form.Item>
              <Form.Item label="店铺 ID"><span>10333</span></Form.Item>
              <Form.Item label="商品分类"><span>江浙小吃、小吃零食</span></Form.Item>
              <Form.Item label="店铺地址"><span>上海市普陀区真北路</span></Form.Item>
              <Form.Item label="商品描述"><span>荷兰优质淡奶，奶香浓而不腻</span></Form.Item>
            </Form>
          )
        }
      },
      {
        label: "商品 ID",
        prop: "id",
        width: 150
      },
      {
        label: "商品名称",
        prop: "name",
        width: 160
      },
      {
        label: "描述",
        prop: "desc"
      }
    ],
    data: [{
      id: '12987122',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }, {
      id: '12987123',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }, {
      id: '12987125',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }, {
      id: '12987126',
      name: '好滋好味鸡蛋仔',
      category: '江浙小吃、小吃零食',
      desc: '荷兰优质淡奶，奶香浓而不腻',
      address: '上海市普陀区真北路',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }]
  }
}

render() {
  return (
    <Table
      style={{width: '100%'}}
      columns={this.state.columns}
      data={this.state.data}
      border={false}
      onCurrentChange={item=>{console.log(item)}}
    />
  )
}
```
:::


### 单选

选择单行数据时使用色块表示

:::demo Table 组件提供了单选的支持，只需要配置`highlightCurrentRow`属性即可实现单选。之后由`currentChange`事件来管理选中时触发的事件，它会传入`currentRow`，`oldCurrentRow`。如果需要显示索引，可以增加一列`column`，设置`type`属性为`index`即可显示从 1 开始的索引号。
```js
constructor(props) {
  super(props);

  this.state = {
    columns: [
      {
        type: 'index'
      },
      {
        label: "日期",
        prop: "date",
        width: 150
      },
      {
        label: "姓名",
        prop: "name",
        width: 160
      },
      {
        label: "地址",
        prop: "address"
      }
    ],
    data: [{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }]
  }
}

render() {
  return (
    <Table
      style={{width: '100%'}}
      columns={this.state.columns}
      data={this.state.data}
      border={true}
      height={250}
      highlightCurrentRow={true}
      onCurrentChange={item=>{console.log(item)}}
    />
  )
}
```
:::

### 多选

选择多行数据时使用 Checkbox。

:::demo 实现多选非常简单: 手动添加一个`column`，设`type`属性为`selection`即可。
```js
constructor(props) {
  super(props);

  this.state = {
    columns: [
      {
        type: 'selection'
      },
      {
        label: "日期",
        prop: "date",
        width: 150
      },
      {
        label: "姓名",
        prop: "name",
        width: 160
      },
      {
        label: "地址",
        prop: "address"
      }
    ],
    data: [{
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
     }]
  }
}

render() {
  return (
    <Table
      style={{width: '100%'}}
      columns={this.state.columns}
      data={this.state.data}
      border={true}
      height={250}
      onSelectChange={(selection) => { console.log(selection) }}
      onSelectAll={(selection) => { console.log(selection) }}
    />
  )
}
```
:::

### 排序

对表格进行排序，可快速查找或对比数据。

:::demo 在列中设置`sortable`属性即可实现以该列为基准的排序，接受一个`Boolean`，默认为`false`。
```js
constructor(props) {
  super(props);

  this.state = {
    columns: [
      {
        label: "日期",
        prop: "date",
        width: 180,
        sortable: true
      },
      {
        label: "姓名",
        prop: "name",
        width: 180,
        sortable: true
      },
      {
        label: "地址",
        prop: "address"
      }
    ],
    data: [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }]
  }
}

render() {
  return (
    <Table
      style={{width: '100%'}}
      columns={this.state.columns}
      data={this.state.data}
      border={true}
    />
  )
}
```
:::

### 筛选

对表格进行筛选，可快速查找到自己想看的数据。

:::demo 在列中设置`filters` `filterMethod`属性即可开启该列的筛选，filters 是一个数组，`filterMethod`是一个方法，它用于决定某些数据是否显示，会传入两个参数：`value`和`row`。
```js
constructor(props) {
  super(props);

  this.state = {
    columns: [
      {
        label: "日期",
        prop: "date",
        width: 180
      },
      {
        label: "姓名",
        prop: "name",
        width: 180
      },
      {
        label: "地址",
        prop: "address"
      },
      {
        label: '标签',
        prop: 'tag',
        width: 100,
        filters: [{text: '家', value: '家'}, {text: '公司', value: '公司'}],
        filterMethod(value, row) {
                  return row.tag === value;
                },
        render: (data, column)=>{
          if(data['tag'] == '家'){
            return <Tag type="primary">{data['tag']}</Tag>
          }else if(data['tag'] == '公司'){
            return <Tag type="success">{data['tag']}</Tag>
          }
        }
      }
    ],
    data: [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      tag: '家'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄',
      tag: '公司'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄',
      tag: '公司'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
      tag: '家'
    }]
  }
}

render() {
  return (
    <Table
      style={{width: '100%'}}
      columns={this.state.columns}
      data={this.state.data}
      border={true}
    />
  )
}
```
:::

### 表尾合计行

若表格展示的是各类数字，可以在表尾显示各列的合计。

:::demo 将`showSummary`设置为`true`就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过`sumText`配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用`summaryMethod`并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。

```js
constructor(props) {
  super(props);

  this.state = {
    columns: [
      {
        label: "ID",
        prop: "id",
        width: 180
      },
      {
        label: "姓名",
        prop: "name",
        width: 180
      },
      {
        label: "数值 1",
        prop: "amount1"
      },
      {
        label: "数值 2",
        prop: "amount2"
      },
      {
        label: "数值 3",
        prop: "amount3"
      }
    ],
    data: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
  }
}

render() {
  return (
    <div>
      <Table
        style={{width: '100%'}}
        showSummary={true}
        columns={this.state.columns}
        data={this.state.data}
        border={true}
      />
      <Table
        style={{width: '100%', marginTop: 20}}
        height={200}
        showSummary={true}
        columns={this.state.columns}
        data={this.state.data}
        sumText='总价'
        summaryMethod={(columns, data)=>{
          const dataList = [];
          for(var i=0; i < columns.length; i++){
            let total = 0;
            for(let j=0; j < data.length; j++){
              let value = data[j][columns[i]['property']];

              if(isNaN(value)){
                total = 'N/A'
                break;
              }else{
                total += parseFloat(value);
              }
            }
            dataList[i] = isNaN(total) ? total : total +'元';
          }
          return dataList;
        }}
        border={true}
      />
    </div>
  )
}
```
:::

## API

### Table

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| bordered | 是否展示外边框和列边框 | boolean | false |
| childrenColumnName | 指定树形结构的列名 | string\[] | children |
| columns | 表格列的配置描述，具体项见下表 | [ColumnProps](https://git.io/vMMXC)\[] | - |
| components | 覆盖默认的 table 元素 | object | - |
| dataSource | 数据数组 | any\[] |  |
| defaultExpandAllRows | 初始时，是否展开所有行 | boolean | false |
| defaultExpandedRowKeys | 默认展开的行 | string\[] | - |
| expandedRowKeys | 展开的行，控制属性 | string\[] | - |
| expandedRowRender | 额外的展开行 | Function(record, index, indent, expanded):ReactNode | - |
| expandRowByClick | 通过点击行来展开子行 | boolean | `false` |
| footer | 表格尾部 | Function(currentPageData) |  |
| indentSize | 展示树形数据时，每层缩进的宽度，以 px 为单位 | number | 15 |
| loading | 页面是否加载中 | boolean\[object](https://ant.design/components/spin-cn/#API) ([更多](https://github.com/ant-design/ant-design/issues/4544#issuecomment-271533135)) | false |
| locale | 默认文案设置，目前包括排序、过滤、空数据文案 | object | filterConfirm: '确定' <br> filterReset: '重置' <br> emptyText: '暂无数据' <br> [默认值](https://github.com/ant-design/ant-design/issues/575#issuecomment-159169511) |
| pagination | 分页器，参考[配置项](#pagination)或 [pagination](/components/pagination/)，设为 false 时不展示和进行分页 | object |  |
| rowClassName | 表格行的类名 | Function(record, index):string | - |
| rowKey | 表格行 key 的取值，可以是字符串或一个函数 | string\Function(record):string | 'key' |
| rowSelection | 列表项是否可选择，[配置项](#rowSelection) | object | null |
| scroll | 设置横向或纵向滚动，也可用于指定滚动区域的宽和高，建议为 `x` 设置一个数字，如果要设置为 `true`，需要配合样式 `.ant-table td { white-space: nowrap; }` | { x: number \ true, y: number } | - |
| showHeader | 是否显示表头 | boolean | true |
| size | 正常或迷你类型，`default` or `small` | string | default |
| title | 表格标题 | Function(currentPageData) |  |
| onChange | 分页、排序、筛选变化时触发 | Function(pagination, filters, sorter) |  |
| onExpand | 点击展开图标时触发 | Function(expanded, record) |  |
| onExpandedRowsChange | 展开的行变化时触发 | Function(expandedRows) |  |
| onHeaderRow | 设置头部行属性 | Function(column, index) | - |
| onRow | 设置行属性 | Function(record, index) | - |

#### onRow 用法

适用于 `onRow` `onHeaderRow` `onCell` `onHeaderCell`。

```jsx
<Table
  onRow={(record) => {
    return {
      onClick: () => {},       // 点击行
      onMouseEnter: () => {},  // 鼠标移入行
      onXxxx...
    };
  }}
  onHeaderRow={(column) => {
    return {
      onClick: () => {},        // 点击表头行
    };
  }}
/>
```

### Column

列描述数据对象，是 columns 中的一项，Column 使用相同的 API。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| align | 设置列内容的对齐方式 | 'left' \ 'right' \ 'center' | 'left' |
| className | 列的 className | string | - |
| colSpan | 表头列合并,设置为 0 时，不渲染 | number |  |
| dataIndex | 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法 | string | - |
| filterDropdown | 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互 | ReactNode | - |
| filterDropdownVisible | 用于控制自定义筛选菜单是否可见 | boolean | - |
| filtered | 标识数据是否经过过滤，筛选图标会高亮 | boolean | false |
| filteredValue | 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组 | string\[] | - |
| filterIcon | 自定义 filter 图标。 | ReactNode\(filtered: boolean) => ReactNode | false |
| filterMultiple | 是否多选 | boolean | true |
| filters | 表头的筛选菜单项 | object\[] | - |
| fixed | 列是否固定，可选 `true`(等效于 left) `'left'` `'right'` | boolean\string | false |
| key | React 需要的 key，如果已经设置了唯一的 `dataIndex`，可以忽略这个属性 | string | - |
| render | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return里面可以设置表格[行/列合并](#components-table-demo-colspan-rowspan) | Function(text, record, index) {} | - |
| sorter | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)，需要服务端排序可设为 true | Function\boolean | - |
| sortOrder | 排序的受控属性，外界可用此控制列的排序，可设置为 `'ascend'` `'descend'` `false` | boolean\string | - |
| title | 列头显示文字 | string\ReactNode | - |
| width | 列宽度 | string\number | - |
| onCell | 设置单元格属性 | Function(record) | - |
| onFilter | 本地模式下，确定筛选的运行函数 | Function | - |
| onFilterDropdownVisibleChange | 自定义筛选菜单可见变化时调用 | function(visible) {} | - |
| onHeaderCell | 设置头部单元格属性 | Function(column) | - |

### ColumnGroup

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 列头显示文字 | string\ReactNode | - |

### pagination

分页的配置项。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| position | 指定分页显示的位置 | 'top' \ 'bottom' \ 'both' | 'bottom' |

更多配置项，请查看 [`Pagination`](/components/pagination/)。

### rowSelection

选择功能的配置。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columnWidth | 自定义列表选择框宽度 | string\number | - |
| columnTitle | 自定义列表选择框标题 | string\React.ReactNode | - |
| fixed | 把选择框列固定在左边 | boolean | - |
| getCheckboxProps | 选择框的默认属性配置 | Function(record) | - |
| hideDefaultSelections | 去掉『全选』『反选』两个默认选项 | boolean | false |
| selectedRowKeys | 指定选中项的 key 数组，需要和 onChange 进行配合 | string\[] | \[] |
| selections | 自定义选择项 [配置项](#selection), 设为 `true` 时使用默认选择项 object\[]\|boolean | true |
| type | 多选/单选，`checkbox` or `radio` | string | `checkbox` |
| onChange | 选中项发生变化时的回调 | Function(selectedRowKeys, selectedRows) | - |
| onSelect | 用户手动选择/取消选择某列的回调 | Function(record, selected, selectedRows, nativeEvent) | - |
| onSelectAll | 用户手动选择/取消选择所有列的回调 | Function(selected, selectedRows, changeRows) | - |
| onSelectInvert | 用户手动选择反选的回调 | Function(selectedRows) | - |

### selection

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | React 需要的 key，建议设置 | string | - |
| text | 选择项显示的文字 | string\React.ReactNode | - |
| onSelect | 选择项点击回调 | Function(changeableRowKeys) | - |

## 在 TypeScript 中使用

```jsx
import { Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';

interface IUser {
  key: number;
  name: string;
}

const columns: ColumnProps<IUser>[] = [{
  key: 'name',
  title: 'Name',
  dataIndex: 'name',
}];

const data: IUser[] = [{
  key: 0,
  name: 'Jack',
}];

class UserTable extends Table<IUser> {}
<UserTable columns={columns} dataSource={data} />

// 使用 JSX 风格的 API
class NameColumn extends Table.Column<IUser> {}

<UserTable dataSource={data}>
  <NameColumn key="name" title="Name" dataIndex="name" />
</UserTable>
```

## 注意

按照 [React 的规范](https://facebook.github.io/react/docs/lists-and-keys.html#keys)，所有的组件数组必须绑定 key。在 Table 中，`dataSource` 和 `columns` 里的数据值都需要指定 `key` 值。对于 `dataSource` 默认将每列数据的 `key` 属性作为唯一的标识。

如果你的数据没有这个属性，务必使用 `rowKey` 来指定数据列的主键。若没有指定，控制台会出现以下的提示，表格组件也会出现各类奇怪的错误。
<img src="https://os.alipayobjects.com/rmsportal/luLdLvhPOiRpyss.png" width="100%" />
```jsx
// 比如你的数据主键是 uid
return <Table rowKey="uid" />;
// 或
return <Table rowKey={record => record.uid} />;
```