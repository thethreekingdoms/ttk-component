## Spin加载中

用于页面和区块的加载中状态。


## 代码演示

### 基本用法

一个简单的 loading 状态。

:::demo
```js
render() {
    return <Spin />
}
```
:::


### 各种大小

小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。

:::demo'
```js
render() {
    return(
        <div>
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
        </div>
    )
}
```
:::


### 容器
放入一个容器中。

:::demo
```js
render() {
    return(
        <div style={{padding: '50px', background: "#eee"}}>
            <Spin />
        </div>
    )
}
```
:::


### 卡片加载中

可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。

:::demo
```js
constructor() {
    super()
    this.state = { loading: false }
}

toggle(value) {
    this.setState({ loading: value });
}

render() {
    return (
        <div>
            <Spin spinning={this.state.loading}>
                <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
                />
            </Spin>
            <div style={{ marginTop: 16 }}>
                Loading state：<Switch checked={this.state.loading} onChange={this.toggle.bind(this)} />
            </div>
        </div>
    );
}
```
:::



### 自定义描述文案

自定义描述文案。

:::demo
```js
render() {
    return (
        <Spin tip="Loading...">
            <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
            />
        </Spin>
    )
}
```
:::


### 延迟

延迟显示 loading 效果。当 spinning 状态在 delay 时间内结束，则不显示 loading 状态。

:::demo
```js
constructor() {
    super()
    this.state = { loading: false }
}

toggle(value) {
    this.setState({ loading: value });
}

render() {
    const container = (
        <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
        />
    );
    return (
        <div>
        <Spin spinning={this.state.loading} delay={500}>{container}</Spin>
        <div style={{ marginTop: 16 }}>
            Loading state：<Switch checked={this.state.loading} onChange={this.toggle.bind(this)} />
        </div>
        </div>
    );
}
```
:::


### 自定义指示符

使用自定义指示符。

:::demo
```js
render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />
    return <Spin indicator={antIcon} />
}
```
:::


## api

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|delay	|延迟显示加载效果的时间（防止闪烁）|	number (毫秒)|	-|
|indicator|	加载指示符	|ReactElement|	-|
|size	|组件大小，可选值为 small default large	|string|	'default'|
|spinning	|是否为加载中状态|	boolean|	true|
|tip	|当作为包裹元素时，可以自定义描述文案|	string|	-|
|wrapperClassName|	包装器的类属性|	string|	-|


### 静态方法

+ Spin.setDefaultIndicator(indicator: ReactElement)

同上 indicator，你可以自定义全局默认元素