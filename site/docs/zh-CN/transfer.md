## Transfer 穿梭框

双栏穿梭选择框。


## 代码演示


### 基本用法

最基本的用法，展示了 dataSource、targetKeys、每行的渲染函数 render 以及回调函数 onChange onSelectChange onScroll 的用法。

:::demo
```js

constructor() {
  super()
  const mockData = [];
  for (let i = 0; i < 20; i++) {
    mockData.push({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
      disabled: i % 3 < 1,
    });
  }

  const targetKeys = mockData
    .filter(item => +item.key % 3 > 1)
    .map(item => item.key);
  this.state = {
    targetKeys,
    selectedKeys: [],
  }
  this.mockData = mockData
}

handleChange(nextTargetKeys, direction, moveKeys) {
  this.setState({ targetKeys: nextTargetKeys });
}

handleSelectChange(sourceSelectedKeys, targetSelectedKeys) {
  this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

  console.log('sourceSelectedKeys: ', sourceSelectedKeys);
  console.log('targetSelectedKeys: ', targetSelectedKeys);
}

handleScroll(direction, e) {
  console.log('direction:', direction);
  console.log('target:', e.target);
}

render() {
  const state = this.state;
  return (
    <Transfer
      dataSource={this.mockData}
      titles={['Source', 'Target']}
      targetKeys={state.targetKeys}
      selectedKeys={state.selectedKeys}
      onChange={this.handleChange.bind(this)}
      onSelectChange={this.handleSelectChange.bind(this)}
      onScroll={this.handleScroll.bind(this)}
      render={item => item.title}
    />
  );
}
```
:::



### 带搜索框


带搜索框的穿梭框，可以自定义搜索函数。

:::demo
```js
constructor() {
  super()
  this.state = {
    mockData: [],
    targetKeys: [],
  }
}

componentDidMount() {
  this.getMock();
}

getMock() {
  const targetKeys = [];
  const mockData = [];
  for (let i = 0; i < 20; i++) {
    const data = {
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
      chosen: Math.random() * 2 > 1,
    };
    if (data.chosen) {
      targetKeys.push(data.key);
    }
    mockData.push(data);
  }
  this.setState({ mockData, targetKeys });
}

filterOption(inputValue, option) {
  return option.description.indexOf(inputValue) > -1;
}

handleChange(targetKeys) {
  this.setState({ targetKeys });
}

render() {
  return (
    <Transfer
      dataSource={this.state.mockData}
      showSearch
      filterOption={this.filterOption}
      targetKeys={this.state.targetKeys}
      onChange={this.handleChange.bind(this)}
      render={item => item.title}
    />
  );
}
```
:::


### 高级用法

穿梭框高级用法，可配置操作文案，可定制宽高，可对底部进行自定义渲染。

:::demo
```js
constructor() {
  super()
  this.state = {
    mockData: [],
    targetKeys: [],
  }
}

componentDidMount() {
  this.getMock();
}

getMock(){
  const targetKeys = [];
  const mockData = [];
  for (let i = 0; i < 20; i++) {
    const data = {
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
      chosen: Math.random() * 2 > 1,
    };
    if (data.chosen) {
      targetKeys.push(data.key);
    }
    mockData.push(data);
  }
  this.setState({ mockData, targetKeys });
}

handleChange(targetKeys) {
  this.setState({ targetKeys });
}

renderFooter(){
  return (
    <Button
      size="small"
      style={{ float: 'right', margin: 5 }}
      onClick={this.getMock.bind(this)}
    >
      reload
    </Button>
  );
}

render() {
  return (
    <Transfer
      dataSource={this.state.mockData}
      showSearch
      listStyle={{
        width: 250,
        height: 300,
      }}
      operations={['to right', 'to left']}
      targetKeys={this.state.targetKeys}
      onChange={this.handleChange.bind(this)}
      render={item => `${item.title}-${item.description}`}
      footer={this.renderFooter.bind(this)}
    />
  );
}
```
:::



### 自定义渲染行数据
自定义渲染每一个 Transfer Item，可用于渲染复杂数据。

:::demo
```js
constructor() {
  super()
  this.state = {
    mockData: [],
    targetKeys: [],
  }
}

componentDidMount() {
  this.getMock();
}

getMock() {
  const targetKeys = [];
  const mockData = [];
  for (let i = 0; i < 20; i++) {
    const data = {
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
      chosen: Math.random() * 2 > 1,
    };
    if (data.chosen) {
      targetKeys.push(data.key);
    }
    mockData.push(data);
  }
  this.setState({ mockData, targetKeys });
}

handleChange(targetKeys, direction, moveKeys) {
  console.log(targetKeys, direction, moveKeys);
  this.setState({ targetKeys });
}

renderItem(item){
  const customLabel = (
    <span className="custom-item">
      {item.title} - {item.description}
    </span>
  );

  return {
    label: customLabel, // for displayed item
    value: item.title, // for title and filter matching
  };
}

render() {
  return (
    <Transfer
      dataSource={this.state.mockData}
      listStyle={{
        width: 300,
        height: 300,
      }}
      targetKeys={this.state.targetKeys}
      onChange={this.handleChange.bind(this)}
      render={this.renderItem.bind(this)}
    />
  );
}
```
:::



## API


| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|className|	自定义类|	string	| |
|dataSource	|数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外。|	TransferItem[]|	[]|
|filterOption	|接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。	|(inputValue, option): boolean| |	
|footer	|底部渲染函数|	(props): ReactNode	| |
|lazy	|Transfer 使用了 react-lazy-load 优化性能，这里可以设置相关参数。设为 false 可以关闭懒加载。	|object\boolean	|{ height: 32, offset: 32 }|
|listStyle|	两个穿梭框的自定义样式|	object	| |
|locale	|各种语言	|object|	{ itemUnit: '项', itemsUnit: '项', notFoundContent: '列表为空', searchPlaceholder: '请输入搜索内容' }|
|operations	|操作文案集合，顺序从下至上|	string[]|	'>', '<'|
|render	|每行数据渲染函数，该函数的入参为 dataSource 中的项，返回值为 ReactElement。或者返回一个普通对象，其中 label 字段为 ReactElement，value 字段为 title	|Function(record)	| |
|selectedKeys	|设置哪些项应该被选中|	string[]|	[]|
|showSearch	|是否显示搜索框	|boolean|	false|
|targetKeys	|显示在右侧框数据的key集合	|string[]	|[]|
|titles	|标题集合，顺序从左至右	|string[]	|'', ''|
|onChange|选项在两栏之间转移时的回调函数|	(targetKeys, direction, moveKeys): void	| |
|onScroll	|选项列表滚动时的回调函数	|(direction, event): void	| |
|onSearchChange|	搜索框内容时改变时的回调函数	|(direction: 'left'|'right', event: Event): void|	-|
|onSelectChange|	选中项发生改变时的回调函数|	(sourceSelectedKeys, targetSelectedKeys): void	| |

## 注意
按照 React 的规范，所有的组件数组必须绑定 key。在 Transfer 中，dataSource里的数据值需要指定 key 值。对于 dataSource 默认将每列数据的 key 属性作为唯一的标识。

如果你的数据没有这个属性，务必使用 rowKey 来指定数据列的主键。

```
// 比如你的数据主键是 uid
return <Transfer rowKey={record => record.uid} />;
```