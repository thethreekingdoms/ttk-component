## Message全局提示

全局展示操作反馈信息。

## 代码演示

### 普通提示

信息提醒反馈。


:::demo
```js
render() {
  const info = () => {
    message.info('This is a normal message');
  }
  return(
    <Button type="primary" onClick={info}>Display normal message</Button>
  )
}
```
:::


### 其他提示类型

包括成功、失败、警告。

:::demo
```js
render() {
  const success = () => {
    message.success('This is a message of success');
  };

  const error = () => {
    message.error('This is a message of error');
  };

  const warning = () => {
    message.warning('This is message of warning');
  }
  return (
    <div>
      <Button onClick={success}>Success</Button>
      <Button onClick={error}>Error</Button>
      <Button onClick={warning}>Warning</Button>
    </div>
  )
}
```
:::


### 修改延时

自定义时长 10s，默认时长为 3s。

:::demo
```js
render() {
  const success = () => {
    message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
  }
  return(
    <Button onClick={success}>Customized display duration</Button>
  )
}
```
:::


### 加载中
进行全局 loading，异步自行移除。

:::demo
```js
render() {
  const success = () => {
    const hide = message.loading('Action in progress..', 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
  }
  return(
    <Button onClick={success}>Display a loading indicator</Button>
  )
}
```
:::


## api

组件提供了一些静态方法，使用方式和参数如下：

+ message.success(content, [duration], onClose)
+ message.error(content, [duration], onClose)
+ message.info(content, [duration], onClose)
+ message.warning(content, [duration], onClose)
+ message.warn(content, [duration], onClose)
+ message.loading(content, [duration], onClose)
  

| 参数	|说明	|类型	|默认值 |
|-------|----|-----|-------|
|content	|提示内容|	string、ReactNode	|-|
|duration	|自动关闭的延时，单位秒。设为 0 时不自动关闭。|	number|	3|
|onClose|	关闭时触发的回调函数|	Function|	-|

### 组件同时提供 promise 接口。

+ message[level](content, [duration]).then(afterClose)
+ message[level](content, [duration], onClose).then(afterClose)

其中message[level] 是组件已经提供的静态方法。then 接口返回值是 Promise

+ message.open(config)


| 参数	|说明	|类型	|默认值 |
|-------|----|-----|-------|
|content	|提示内容|ReactNode	|-|
|duration	|自动关闭的延时，单位秒。设为 0 时不自动关闭。|	number	|3|
|onClose	|关闭时触发的回调函数|	Function|	-|
|icon	|自定义图标|	ReactNode|	-|

### 全局方法
还提供了全局配置和全局销毁方法：

+ message.config(options)
+ message.destroy()

#### message.config

```
message.config({
  top: 100,
  duration: 2,
  maxCount: 3,
});
```

| 参数	|说明	|类型	|默认值 |
|-------|----|-----|-------|
|duration	|默认自动关闭延时，单位秒|	number|	3|
|getContainer	|配置渲染节点的输出位置	|() => HTMLElement|	() => document.body|
|maxCount	|最大显示数, 超过限制时，最早的消息会被自动关闭|	number|	-|
|top	|消息距离顶部的位置	|number	|24|
  
