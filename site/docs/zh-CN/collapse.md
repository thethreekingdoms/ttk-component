## Collapse折叠面板
可以折叠/展开的内容区域。

## 代码演示


### 折叠面板
可以同时展开多个面板，这个例子默认展开了第一个。
:::demo
```js
render() {
  const Panel = Collapse.Panel;

  function callback(key) {
    console.log(key);
  }
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `
  return (
    <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3" disabled>
        <p>{text}</p>
      </Panel>
    </Collapse>
  )
}
```
:::

### 手风琴
手风琴，每次只打开一个tab。默认打开第一个。

:::demo
```js
render() {
  const Panel = Collapse.Panel;

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  return (
    <Collapse accordion>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  )
}
```
:::



### 面板嵌套
嵌套折叠面板。

:::demo
```js
render() {
  const Panel = Collapse.Panel;

  function callback(key) {
    console.log(key);
  }

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `
  return (
    <Collapse onChange={callback}>
      <Panel header="This is panel header 1" key="1">
        <Collapse defaultActiveKey="1">
          <Panel header="This is panel nest panel" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  )
}
```
:::


### 简洁风格
一套没有边框的简洁样式。

:::demo
```js
render() {
  const Panel = Collapse.Panel;

  const text = (
    <p style={{ paddingLeft: 24 }}>
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    </p>
  );
  return(
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header="This is panel header 1" key="1">
        {text}
      </Panel>
      <Panel header="This is panel header 2" key="2">
        {text}
      </Panel>
      <Panel header="This is panel header 3" key="3">
        {text}
      </Panel>
    </Collapse>
  )
}
```
:::



### 自定义面板
自定义各个面板的背景色、圆角和边距。

:::demo
```js
render() {
  const Panel = Collapse.Panel;

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

  const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
  };
  return (
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
        <p>{text}</p>
      </Panel>
    </Collapse>
  )
}
```
:::


### 隐藏箭头

你可以通过 showArrow={false} 隐藏 CollapsePanel 组件的箭头图标。

:::demo
```js
render() {
  const Panel = Collapse.Panel;

  function callback(key) {
    console.log(key);
  }

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  return (
    <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Panel header="This is panel header with arrow icon" key="1">
        <p>{text}</p>
      </Panel>
      <Panel showArrow={false} header="This is panel header with no arrow icon" key="2">
        <p>{text}</p>
      </Panel>
    </Collapse>
  )
}
```
:::


## api


### Collapse
|参数       | 说明          | 类型          | 默认值      |
|-----------|---------------|--------------|------------|
|activeKey	|当前激活 tab 面板的 key|	string[]、string|默认无，accordion模式下默认第一个元素|
|defaultActiveKey	|初始化选中面板的 key|	string	|无|
|onChange	|切换面板的回调	|Function|无|


### Collapse.Panel
|参数       | 说明          | 类型          | 默认值      |
|-----------|---------------|--------------|------------|
|disabled	|禁用后的面板展开与否将无法通过用户交互改变|	boolean	|false|
|forceRender	|被隐藏时是否渲染 DOM 结构|	boolean	|false|
|header	|面板头内容	|string、ReactNode|	无|
|key	|对应 activeKey	|string|	无|