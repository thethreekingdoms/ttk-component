## Carousel 走马灯

旋转木马，一组轮播的区域。

### 基本
最简单的用法。

::: demo
```js
onChange(index) {
  console.log(index);
}
render() {
  return (
    <div className='basicCarousel'>
      <Carousel afterChange={this.onChange.bind(this)}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    </div>
    
  )
}
```
:::

### 垂直
垂直显示。

::: demo
```js 
render() {
  return (
    <div className='basicCarousel'>
      <Carousel vertical>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    </div>
    
  )
}
```
:::

### 渐显
切换效果为渐显。

::: demo
```js 
render() {
  return (
    <div className='basicCarousel'>
      <Carousel effect="fade">
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    </div>
    
  )
}
```
:::

### 自动切换
定时切换下一张。

::: demo
```js
render() {
  return (
    <div className='basicCarousel'>
      <Carousel autoplay>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    </div>
  )
}
```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| afterChange | 切换面板的回调 | function(current) | 无 |
| autoplay | 是否自动切换 | boolean | false |
| beforeChange | 切换面板的回调 | function(from, to) | 无 |
| dots | 是否显示面板指示点 | boolean | true |
| easing | 动画效果 | string | linear |
| effect | 动画效果函数，可取 scrollx, fade | string | scrollx |
| vertical | 垂直显示 | boolean | false |

## 方法

| 名称 | 描述 |
| --- | --- |
| goTo(slideNumber) | 切换到指定面板 |
| next() | 切换到下一面板 |
| prev() | 切换到上一面板 |

更多参数可参考：<https://github.com/akiran/react-slick>

