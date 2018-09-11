### Modal对话框

模态对话框。

### 基本

第一个对话框。

:::demo
```js
async showModal(){
    Modal.show({
        title: "Basic Modal",
        children: (<div><p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p></div>)
    })
}

async showModal1(){
    //ok:true, cancel:false
    let ret = await Modal.show({
        title: "Basic Modal",
        children: (<div><p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p></div>)
    })

    console.log(ret)
}

render() {
    return (
        <div>
            <Button onClick={this.showModal}>Modal</Button>
            <br />
            <br />
            <Button onClick={this.showModal1}>需要知道是否点击的OK</Button >
        </div >
    )
}
```
:::


### 多种样式
多种样式
:::demo
```js
showInfo(){
    Modal.info({ title: 'info', content: 'info' })
}

showError(){
    Modal.error({ title: 'error', content: 'Error' })
}

async showSuccess(){
    let ret = await Modal.success({ title: 'success', content: 'Success' })
    console.log(ret)
}

async showWarning(){
    let ret = await Modal.warning({ title: 'warning', content: 'Warning' })
    console.log(ret)
}

async showConfirm() {
    let ret = await Modal.confirm({ title: 'confirm', content: 'confirm' })
    console.log(ret)
}

render() {
    return (
        <div>
            <Button onClick={this.showInfo}>Info</Button>
            <br />
            <br />
            <Button onClick={this.showError}>Error</Button>
            <br />
            <br />
            <Button onClick={this.showSuccess}>Success</Button>
            <br />
            <br />
            <Button onClick={this.showWarning}>Warning</Button>
            <br />
            <br />
            <Button onClick={this.showConfirm}>Confirm</Button>
        </div>
    )
}

```
:::

### 关闭拿到数据
关闭拿到数据

:::demo
```js
async showModal(){
    const res = await Modal.show({
        title: "Basic Modal",
        children: this.getChildren()
    })
    console.log(res)
}

getChildren() {
    class Child extends React.Component{
        constructor(props) {
            super(props)
            this.state = {}
            if( props.setOkListener ) {
                props.setOkListener(this.onOk)
            }
            if( props.setCancelLister ) {
                props.setCancelLister(this.onCancel)
            }
        }
        render() {
            return <span>小吴</span>
        }
        async onOk() {
            return {
                a: 1,
                b: 2
            }
        }

        async onCancel() {
            return {
                c: 3,
                d: 4
            }
        }
    }
    return <Child />
}

render() {
    return (
        <div>
            <Button onClick={this.showModal.bind(this)}>Modal</Button>
        </div >
    )
}
```
:::



### 自定义关闭按钮

通过封装组件内的某些事件触发关闭。

:::demo
```js
async showModal(){
    const res = await Modal.show({
        title: "Basic Modal",
        footer: null,
        children: this.getChildren()
    })
    console.log(res)
}

getChildren() {
    class Child extends React.Component{
        constructor(props) {
            super(props)
            this.state = {}
            if( props.setOkListener ) {
                props.setOkListener(this.onOk)
            }
            if( props.setCancelLister ) {
                props.setCancelLister(this.onCancel)
            }
        }

        click(type) {
            this.props.closeModal({
                type,
                result: Math.random()
            })
        }

        render() {
            return (
                <div>
                    <Button onClick={() => this.click('close')}>关闭</Button>
                    <Button onClick={() => this.click('reset')}>重置</Button>
                    <Button onClick={() => this.click('cancel')}>取消</Button>
                </div>
            )
        }
        async onOk() {
            return {
                a: 1,
                b: 2
            }
        }

        async onCancel() {
            return {
                c: 3,
                d: 4
            }
        }
    }
    return <Child />
}

render() {
    return (
        <div>
            <Button onClick={this.showModal.bind(this)}>Modal</Button>
        </div >
    )
}
```
:::



### children为ReactNode节点，且在父组件内直接关闭



:::demo
```js

closeBack( closeModal ) {
    console.log(closeModal)
    this.closeModal = closeModal
}

click(type) {
    this.closeModal({
        type,
        result: Math.random()
    })
}

async showModal(){
    const res = await Modal.show({
        title: "Basic Modal",
        footer: null,
        closeBack: this.closeBack.bind(this),
        children: (
            <div>
                <p>demo</p>
                <Button onClick={this.click.bind(this)}>取消</Button>
                <Button onClick={this.click.bind(this)}>确定</Button>
            </div>
        )
    })
    console.log(res)
}

render() {
    return (
        <div>
            <Button onClick={this.showModal.bind(this)}>Modal</Button>
            <br />
        </div >
    )
}
```
:::



+ 该组件是基于antd Modal组件的封装，但是去掉了组件方式的调用，仅保留了函数是调用

### api


| 参数	|说明	|类型	|默认值 |
|-------|----|-----|-------|
|afterClose|	Modal 完全关闭后的回调|	function	|无|
|bodyStyle|	Modal body 样式	|object|	{}|
|cancelText	|取消按钮文字|	string|	取消|
|centered	|垂直居中展示 Modal|	Boolean	|false|
|closable	|是否显示右上角的关闭按钮|	boolean|	true|
|confirmLoading	|确定按钮 loading|	boolean	|无|
|destroyOnClose	|关闭时销毁 Modal 里的子元素|	boolean	|false|
|footer	|底部内容，当不需要默认底部按钮时，可以设为 footer={null}	|string、ReactNode|	确定取消按钮|
|getContainer	|指定 Modal 挂载的 HTML 节点	|(instance): HTMLElement|	() => document.body|
|keyboard	|是否支持键盘esc关闭|	boolean|	true|
|mask	|是否展示遮罩|	Boolean|	true|
|maskClosable	|点击蒙层是否允许关闭|	boolean|true|
|maskStyle	|遮罩样式	|object	|{}|
|okText	|确认按钮文字	|string	|确定|
|okType	|确认按钮类型	|string|primary|
|okButtonProps	|ok 按钮 props|	ButtonProps|	-|
|cancelButtonProps	|cancel 按钮 props|	ButtonProps	|-|
|style	|可用于设置浮层的样式，调整浮层位置等|	object|	-|
|title	|标题	|string、ReactNode|	无|
|visible	|对话框是否可见|	boolean|	无|
|width	|宽度	|string、number	|520|
|wrapClassName	|对话框外层容器的类名|	string|	-|
|zIndex	|设置 Modal 的 z-index|	Number|	1000|
|onCancel	|点击遮罩层或右上角叉或取消按钮的回调|	function(e)	|无|
|onOk	|点击确定回调|	function(e)	|无|


### Modal.method()

+ Modal.info

+ Modal.success

+ Modal.error

+ Modal.warning

+ Modal.confirm

以上均为一个函数，参数为 object，具体属性如下：


| 参数	|说明	|类型	|默认值 |
|-------|----|-----|-------|
|cancelText	|取消按钮文字|	string	|取消|
|centered	|垂直居中展示 Modal|	Boolean	|false|
|className	|容器类名|	string|	-|
|content	|内容	|string、ReactNode|	无|
|iconType	|图标 Icon 类型	|string	|question-circle|
|maskClosable	|点击蒙层是否允许关闭	|Boolean	|false|
|okText	|确认按钮文字|	string|	确定|
|okType	|确认按钮类型	|string	|primary|
|title	|标题	|string、ReactNode|	无|
|width	|宽度	|string、number|	416|
|zIndex	|设置 Modal 的 z-index|	Number|	1000|
|onCancel	|取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭	|function|	无|
|onOk	|点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭	|function|	无|