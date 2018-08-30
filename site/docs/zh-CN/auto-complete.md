## AutoComplete自动完成

输入框自动完成功能。


## 何时使用#
需要自动完成时。

## 代码演示

### 基本使用

基本使用。通过 dataSource 设置自动完成的数据源

:::demo
```js
constructor() {
    super()
    this.state = {
        dataSource: [],
    }
}

handleSearch (value) {
    this.setState({
        dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
        ],
    });
}

render() {
    function onSelect(value) {
        console.log('onSelect', value);
    }
    const { dataSource } = this.state;
    return (
        <AutoComplete
        dataSource={dataSource}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={this.handleSearch.bind(this)}
        placeholder="input here"
        />
    );
}
```
:::


### 自定义选项

也可以直接传 AutoComplete.Option 作为 AutoComplete 的 children，而非使用 dataSource。

:::demo
```js

constructor(){
    super()
    this.state = {
        result: [],
    }
}

handleSearch(value){
    let result;
    if (!value || value.indexOf('@') >= 0) {
    result = [];
    } else {
    result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({ result });
}

render() {
    const Option = AutoComplete.Option
    const { result } = this.state;
    const children = result.map((email) => {
        return <Option key={email}>{email}</Option>;
    });
    return (
    <AutoComplete
        style={{ width: 200 }}
        onSearch={this.handleSearch.bind(this)}
        placeholder="input here"
    >
        {children}
    </AutoComplete>
    );
}
```
:::


### 自定义输入组件
自定义输入组件。

:::demo
```js
constructor() {
    super()
    this.state = {
        dataSource: [],
    }
}

handleSearch(value) {
    this.setState({
    dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
    ],
    });
}

handleKeyPress(ev) {
    console.log('handleKeyPress', ev);
}

render() {
    function onSelect(value) {
        console.log('onSelect', value);
    }
    const { TextArea } = Input
    const { dataSource } = this.state;
    return (
    <AutoComplete
        dataSource={dataSource}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={this.handleSearch.bind(this)}
    >
        <TextArea
        placeholder="input here"
        className="custom"
        style={{ height: 50 }}
        onKeyPress={this.handleKeyPress.bind(this)}
        />
    </AutoComplete>
    );
}
```
:::


### 不区分大小写
不区分大小写的 AutoComplete

:::demo
```js
render() {
    const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
    return (
        <AutoComplete
            style={{ width: 200 }}
            dataSource={dataSource}
            placeholder="try to type `b`"
            filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
        />
    )
}
```
:::


### 查询模式 - 确定类目


:::demo
```js
render() {
    const Option = AutoComplete.Option;
    const OptGroup = AutoComplete.OptGroup;

    const dataSource = [{
        title: '话题',
        children: [{
            title: 'AntDesign',
            count: 10000,
        }, {
            title: 'AntDesign UI',
            count: 10600,
        }],
        }, {
        title: '问题',
        children: [{
            title: 'AntDesign UI 有多好',
            count: 60100,
        }, {
            title: 'AntDesign 是啥',
            count: 30010,
        }],
        }, {
        title: '文章',
        children: [{
            title: 'AntDesign 是一个设计语言',
            count: 100000,
        }],
    }];
    function renderTitle(title) {
        return (
            <span>
            {title}
            <a
                style={{ float: 'right' }}
                href="https://www.google.com/search?q=antd"
                target="_blank"
                rel="noopener noreferrer"
            >更多
            </a>
            </span>
        );
    }
    const options = dataSource.map(group => (
    <OptGroup
        key={group.title}
        label={renderTitle(group.title)}
    >
        {group.children.map(opt => (
        <Option key={opt.title} value={opt.title}>
            {opt.title}
            <span className="certain-search-item-count">{opt.count} 人 关注</span>
        </Option>
        ))}
    </OptGroup>
    )).concat([
    <Option disabled key="all" className="show-all">
        <a
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
        >
        查看所有结果
        </a>
    </Option>,
    ]);
    return (
        <div className="certain-category-search-wrapper" style={{ width: 250 }}>
            <AutoComplete
                className="certain-category-search"
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={false}
                dropdownStyle={{ width: 300 }}
                size="large"
                style={{ width: '100%' }}
                dataSource={options}
                placeholder="input here"
                optionLabelProp="value"
            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        </div>
    )
}
```
:::



### 查询模式 - 不确定类目

:::demo
```js

constructor() {
    super()
    this.state = {
        dataSource: [],
    }
}

handleSearch(value) {
    function getRandomInt(max, min = 0) {
        return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
    }
    function searchResult(query) {
        return (new Array(getRandomInt(5))).join('.').split('.')
            .map((item, idx) => ({
            query,
            category: `${query}${idx}`,
            count: getRandomInt(200, 100),
            }));
    }
    this.setState({
        dataSource: value ? searchResult(value) : [],
    });
}

render() {
    const Option = AutoComplete.Option;

    function onSelect(value) {
        console.log('onSelect', value);
    }
    function renderOption(item) {
        return (
            <Option key={item.category} text={item.category}>
            {item.query} 在
            <a
                href={`https://s.taobao.com/search?q=${item.query}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {item.category}
            </a>
            区块中
            <span className="global-search-item-count">约 {item.count} 个结果</span>
            </Option>
        );
    }
    const { dataSource } = this.state;
    return (
      <div className="global-search-wrapper" style={{ width: 300 }}>
        <AutoComplete
          className="global-search"
          size="large"
          style={{ width: '100%' }}
          dataSource={dataSource.map(renderOption)}
          onSelect={onSelect}
          onSearch={this.handleSearch.bind(this)}
          placeholder="input here"
          optionLabelProp="text"
        >
          <Input
            suffix={(
              <Button className="search-btn" size="large" type="primary">
                <Icon type="search" />
              </Button>
            )}
          />
        </AutoComplete>
      </div>
    );
}
```
:::


## api

| 参数                  | 说明                  | 类型                  | 默认值                |
|-----------------------|----------------------|-----------------------|-----------------------|
|allowClear	|支持清除, 单选模式有效	|boolean	|false|
|autoFocus	|自动获取焦点	|boolean	|false|
|backfill	|使用键盘选择选项的时候把选中项回填到输入框中	|boolean	|false|
|children (自动完成的数据源)| 自动完成的数据源 | React.ReactElement / Array<React.ReactElement> |   - |
|children (自定义输入框)	|自定义输入框      | HTMLInputElement / HTMLTextAreaElement / React.ReactElement | <Input /\> |
|dataSource	|自动完成的数据源	|DataSourceItemType[]| - |
|defaultActiveFirstOption	|是否默认高亮第一个选项。|	boolean|	true|
|defaultValue	|指定默认选中的条目| string/string[]/{ key: string, label: string/ReactNode }/Array<{ key: string, label: string/ReactNode}> | 无 |
|onBlur	|失去焦点时的回调|	function()|	-|
|onChange|	选中 option，或 input 的 value 变化时，调用此函数|	function(value)	|无|
|onFocus|	获得焦点时的回调|	function()|	-|
|onSearch|	搜索补全项的时候调用|	function(value)	|无|
|onSelect|	被选中时调用，参数为选中项的 value 值|	function(value, option)|	无|


## 方法
|名称               | 描述                  |
|-------------------|----------------------|
|blur()	|移除焦点|
|focus()|	获取焦点|