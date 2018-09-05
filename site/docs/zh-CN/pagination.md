## Pagination 分页

采用分页的形式分隔长列表，每次只加载一个页面。

## 代码演示

### 基本
基础分页。

:::demo
```js
render() {
  return (
    <Pagination defaultCurrent={1} total={50} />
  )
}
```
:::

### 更多
更多分页。

:::demo
```js
render() {
  return(
    <Pagination defaultCurrent={6} total={500} />
  )
}
```
:::

### 改变
改变每页显示条目数。

:::demo
```js
render() {
  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }
  return(
    <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
  )
}
```
:::


### 跳转

快速跳转到某一页。

:::demo
```js
render() {
  function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }
  return(
    <Pagination showQuickJumper defaultCurrent={2} pageSize={10} total={500} onChange={onChange} />
  )
}
```
:::


### 迷你

迷你版本。

:::demo
```js
render() {
  function showTotal(total) {
    return `Total ${total} items`;
  }
  return(
    <div>
      <Pagination size="small" total={50} />
      <Pagination size="small" total={50} showSizeChanger showQuickJumper />
      <Pagination size="small" total={50} showTotal={showTotal} />
    </div>
  )
}
```
:::


### 简洁

简单的翻页。

:::demo
```js
render() {
  return(
    <Pagination simple defaultCurrent={2} total={50} />
  )
}
```
:::


### 受控

受控制的页码。

:::demo
```js
constructor() {
  super()
  this.state = {
    current: 3,
  }
}

onChange(page){
  console.log(page);
  this.setState({
    current: page,
  });
}

render() {
  return <Pagination current={this.state.current} onChange={this.onChange.bind(this)} total={50} />;
}
```
:::



### 总数

通过设置 showTotal 展示总共有多少数据。

:::demo
```js
render() {
  return(
    <div>
      <Pagination
        total={85}
        showTotal={total => `Total ${total} items`}
        pageSize={20}
        defaultCurrent={1}
      />
      <br />
      <Pagination
        total={85}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        pageSize={20}
        defaultCurrent={1}
      />
    </div>
  )
}
```
:::


### 上一步和下一步

修改上一步和下一步为文字链接。

:::demo
```js
render() {
  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>Previous</a>;
    } if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  }
  return <Pagination total={500} itemRender={itemRender} />
}
```
:::



## api


| 参数	|说明	|类型	|默认值 |
|-------|----|-----|-------|
|current	|当前页数|	number|	-|
|defaultCurrent|	默认的当前页数|	number	|1|
|defaultPageSize|	默认的每页条数|	number|	10|
|hideOnSinglePage|	只有一页时是否隐藏分页器|	boolean	|false|
|itemRender	|用于自定义页码的结构，可用于优化 SEO	|(page, type: 'page' \ 'prev' \ 'next', originalElement) => React.ReactNode|	-|
|pageSize|	每页条数|	number|	-|
|pageSizeOptions|	指定每页可以显示多少条|	string[]|	'10', '20', '30', '40'|
|showQuickJumper|	是否可以快速跳转至某页|	boolean|	false|
|showSizeChanger|	是否可以改变 pageSize|	boolean|	false|
|showTotal|	用于显示数据总量和当前数据顺序|	Function(total, range)|	-|
|simple	|当添加该属性时，显示为简单分页	|boolean|	-|
|size	|当为「small」时，是小尺寸分页|	string|	""|
|total	|数据总数|	number|	0|
|onChange	|页码改变的回调，参数是改变后的页码及每页条数|	Function(page, pageSize)|	noop|
|onShowSizeChange|	pageSize 变化的回调	|Function(current, size)|	noop|