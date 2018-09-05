## Progress 进度条

展示操作的当前进度。

##代码演示

### 进度条

标准的进度条。

:::demo
```js
render() {
  return(
    <div>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />
    </div>
  )
}
```
:::


### 进度圈

圈形的进度。

:::demo
```js
render() {
  return(
    <div>
      <Progress type="circle" percent={75} />
      <Progress type="circle" percent={70} status="exception" />
      <Progress type="circle" percent={100} />
    </div>
  )
}
```
:::


### 小型进度条
适合放在较狭窄的区域内。

:::demo
```js
render() {
  return(
    <div style={{ width: 170 }}>
      <Progress percent={30} size="small" />
      <Progress percent={50} size="small" status="active" />
      <Progress percent={70} size="small" status="exception" />
      <Progress percent={100} size="small" />
    </div>
  )
}
```
:::


### 小型进度圈
小一号的圈形进度。

:::demo
```js
render() {
  return(
    <div>
      <Progress type="circle" percent={30} width={80} />
      <Progress type="circle" percent={70} width={80} status="exception" />
      <Progress type="circle" percent={100} width={80} />
    </div>
  )
}
```
:::


### 进度圈动态展示

会动的进度条才是好进度条。

:::demo
```js
constructor() {
  super()
  this.state = {
    percent: 0,
  }
}

increase(){
  let percent = this.state.percent + 10;
  if (percent > 100) {
    percent = 100;
  }
  this.setState({ percent });
}

decline() {
  let percent = this.state.percent - 10;
  if (percent < 0) {
    percent = 0;
  }
  this.setState({ percent });
}

render() {
  const ButtonGroup = Button.Group
  return (
    <div>
      <Progress type="circle" percent={this.state.percent} />
      <ButtonGroup>
        <Button onClick={this.decline.bind(this)} icon="minus" />
        <Button onClick={this.increase.bind(this)} icon="plus" />
      </ButtonGroup>
    </div>
  );
}
```
:::


### 动态展示
会动的进度条才是好进度条。

:::demo
```js
constructor(){
  super()
  this.state = {
    percent: 0,
  }
}

increase(){
  let percent = this.state.percent + 10;
  if (percent > 100) {
    percent = 100;
  }
  this.setState({ percent });
}

decline(){
  let percent = this.state.percent - 10;
  if (percent < 0) {
    percent = 0;
  }
  this.setState({ percent });
}

render() {
  const ButtonGroup = Button.Group;
  return (
    <div>
      <Progress percent={this.state.percent} />
      <ButtonGroup>
        <Button onClick={this.decline.bind(this)} icon="minus" />
        <Button onClick={this.increase.bind(this)} icon="plus" />
      </ButtonGroup>
    </div>
  );
}
```
:::


### 仪表盘
通过设置 type=dashboard，可以很方便地实现仪表盘样式的进度条。

:::demo
```js
render() {
  return<Progress type="dashboard" percent={75} />
}
```
:::

### 自定义文字格式

format 属性指定格式。

:::demo
```js
render() {
  return(
    <div>
      <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
      <Progress type="circle" percent={100} format={() => 'Done'} />
    </div>
  )
}
```
:::


### 圆角/方角边缘
通过设定 strokeLinecap="square|round" 可以调整进度条边缘的形状。

:::demo
```js
render() {
  return(
    <div>
      <Progress strokeLinecap="square" percent={75} />
      <Progress strokeLinecap="square" type="circle" percent={75} />
      <Progress strokeLinecap="square" type="dashboard" percent={75} />
    </div>
  )
}
```
:::


### 分段进度条
标准的进度条。

:::demo
```js
render() {
  return(
      <Progress percent={60} successPercent={30} />
  )
}
```
:::