## Tag 标签

用于标记和选择。


## 代码演示

### 基本

基本标签的用法，可以通过添加 closable 变为可关闭标签。可关闭标签具有 onClose afterClose 两个事件。

:::demo
```js
render() {
  function log(e) {
    console.log(e);
  }

  function preventDefault(e) {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  }
  return(
    <div>
      <Tag>Tag 1</Tag>
      <Tag><a href="javascript:;">Link</a></Tag>
      <Tag closable onClose={log}>Tag 2</Tag>
      <Tag closable onClose={preventDefault}>Prevent Default</Tag>
    </div>
  )
}
```
:::



### 多彩标签
我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。

:::demo
```js
render() {
  return (
    <div>
      <h4 style={{ marginBottom: 16 }}>Presets:</h4>
      <div>
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="volcano">volcano</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
        <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="geekblue">geekblue</Tag>
        <Tag color="purple">purple</Tag>
      </div>
      <h4 style={{ margin: '16px 0' }}>Custom:</h4>
      <div>
        <Tag color="#f50">#f50</Tag>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#87d068">#87d068</Tag>
        <Tag color="#108ee9">#108ee9</Tag>
      </div>
    </div>
  )
}
```
:::


### 动态添加和删除
用数组生成一组标签，可以动态添加和删除，通过监听删除动画结束的事件 afterClose 实现。

:::demo
```js
constructor() {
  super()
  this.state = {
    tags: ['Unremovable', 'Tag 2', 'Tag 3'],
    inputVisible: false,
    inputValue: '',
  };
}

handleClose(removedTag){
  const tags = this.state.tags.filter(tag => tag !== removedTag);
  console.log(tags);
  this.setState({ tags });
}

showInput(){
  this.setState({ inputVisible: true });
}

handleInputChange(e){
  this.setState({ inputValue: e.target.value });
}

handleInputConfirm() {
  const state = this.state;
  const inputValue = state.inputValue;
  let tags = state.tags;
  if (inputValue && tags.indexOf(inputValue) === -1) {
    tags = [...tags, inputValue];
  }
  console.log(tags);
  this.setState({
    tags,
    inputVisible: false,
    inputValue: '',
  });
}

saveInputRef(input){
  if( input ) {
    return this.input = input
  }
  
}

render() {
  const { tags, inputVisible, inputValue } = this.state;
  return (
    <div>
      {tags.map((tag, index) => {
        const isLongTag = tag.length > 20;
        const tagElem = (
          <Tag key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
          </Tag>
        );
        return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
      })}
      {inputVisible && (
        <Input
          ref={this.saveInputRef.bind(this)}
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={this.handleInputChange.bind(this)}
          onBlur={this.handleInputConfirm.bind(this)}
          onPressEnter={this.handleInputConfirm.bind(this)}
        />
      )}
      {!inputVisible && (
        <Tag
          onClick={this.showInput.bind(this)}
          style={{ background: '#fff', borderStyle: 'dashed' }}
        >
          <Icon type="plus" /> New Tag
        </Tag>
      )}
    </div>
  );
}
```
:::



### 可选择

可通过 CheckableTag 实现类似 Checkbox 的效果，点击切换选中效果。

该组件为完全受控组件，不支持非受控用法。

:::demo
```js
constructor(){
  super()
  this.state = { 
    checked: true 
  }
}

handleChange(checked){
  this.setState({ checked });
}

render() {
  const CheckableTag = Tag.CheckableTag;
  return (
    <CheckableTag checked={this.state.checked} onChange={this.handleChange.bind(this)} >demo1</CheckableTag>
  )
}

```
:::



### 热门标签


选择你感兴趣的话题。


:::demo
```js
constructor() {
  super()
  this.state = {
    selectedTags: [],
  };
}

handleChange(tag, checked) {
  const { selectedTags } = this.state;
  const nextSelectedTags = checked
    ? [...selectedTags, tag]
    : selectedTags.filter(t => t !== tag);
  console.log('You are interested in: ', nextSelectedTags);
  this.setState({ selectedTags: nextSelectedTags });
}

render() {
  const CheckableTag = Tag.CheckableTag;
  const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];  
  const { selectedTags } = this.state;
  return (
    <div>
      <h6 style={{ marginRight: 8, display: 'inline' }}>Categories:</h6>
      {tagsFromServer.map(tag => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={checked => this.handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </div>
  );
}
```
:::




### 控制关闭状态

通过 visible 属性控制关闭状态。


:::demo
```js
constructor() {
  super()
  this.state = {
    visible: true,
  }
}

render() {
  return (
    <div>
      <Tag
        closable
        visible={this.state.visible}
        onClose={() => this.setState({ visible: false })}
      >
        Movies
      </Tag>
      <br />
      <Button
        size="small"
        onClick={() => this.setState({ visible: !this.state.visible })}
      >
        Toggle
      </Button>
    </div>
  );
}
```
:::


## API


### Tag

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|afterClose	|关闭动画完成后的回调|	() => void|	-|
|closable	|标签是否可以关闭|	boolean	|false|
|color|标签色|	string|	-|
|onClose	|关闭时的回调|	(e) => void	|-|
|visible|	是否显示标签|	boolean|	true|


### Tag.CheckableTag


| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|checked	|设置标签的选中状态|	boolean	|false|
|onChange	|点击标签时触发的回调|	(checked) => void|	-|