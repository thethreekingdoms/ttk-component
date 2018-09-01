## Breadcrumb 面包屑
显示当前页面的路径，快速返回之前的任意页面。

### 基本

最简单的用法。

:::demo 

```js
render() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item><a href="javascript:;">Application Center</a></Breadcrumb.Item>
      <Breadcrumb.Item><a href="javascript:;">Application List</a></Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  )
}
```
:::



### 带有图标的
图标放在文字前面。

:::demo
```js
render(){
  return(
    <Breadcrumb>
      <Breadcrumb.Item href="">
        <Icon type="home" />
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">
        <Icon type="user" />
        <span>Application List</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Application
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}
```
:::





### Breadcrumb Attributes
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- -------- |
| itemRender | 自定义链接函数，和 react-router 配置使用 | str(route, params, routes, paths) => ReactNodeing | - |
|params|路由的参数	|object		|- |
|routes	|router 的路由栈信息|	object[]|		-|
|separator	|分隔符自定义|	string/ReactNode|		'/'|
