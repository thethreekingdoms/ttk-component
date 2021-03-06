## 列表

通用列表。

## 代码演示


### 简单列表

列表拥有大、中、小三种尺寸。

通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。

可通过设置 header 和 footer，来自定义列表头部和尾部。

:::demo
```js
render() {
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ]
    return(
        <div>
            <h3 style={{ marginBottom: 16 }}>Default Size</h3>
            <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
            />
            <h3 style={{ margin: '16px 0' }}>Small Size</h3>
            <List
            size="small"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
            />
            <h3 style={{ margin: '16px 0' }}>Large Size</h3>
            <List
            size="large"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
            />
        </div>
    )
}
```
:::


### 基础列表

基础列表

:::demo
```js
render() {
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
            </List.Item>
            )}
        />
    )
}
```
:::


### 加载更多

可通过 <font color="#f00">loadMore</font> 属性实现加载更多功能。

:::demo
```js
constructor(){
    super()
    this.state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
    }
}

componentDidMount() {
    this.getData((res) => {
        this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
        });
    });
}

reqwest() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({
            "results": [{
                "gender": "female",
                "name": {
                    "title": "mademoiselle",
                    "first": "lana",
                    "last": "rousseau"
                },
                "email": "lana.rousseau@example.com",
                "nat": "CH"
            }, {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "younes",
                    "last": "luitjes"
                },
                "email": "younes.luitjes@example.com",
                "nat": "NL"
            }, {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "eneias",
                    "last": "barbosa"
                },
                "email": "eneias.barbosa@example.com",
                "nat": "BR"
            }]
        })
        }, 1000)
    })
}

async getData(callback) {
    const res = await this.reqwest();
    callback(res)
}

onLoadMore() {
    this.setState({
        loading: true,
        list: this.state.data.concat([...new Array(3)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData((res) => {
        const data = this.state.data.concat(res.results);
        this.setState({
        data,
        list: data,
        loading: false,
        }, () => {
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
        });
    });
}

render() {
    const { initLoading, loading, list } = this.state;
    const loadMore = !initLoading && !loading ? (
        <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
        <Button onClick={this.onLoadMore.bind(this)}>loading more</Button>
        </div>
    ) : null;
    return (
        <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
            <List.Item actions={[<a>edit</a>, <a>more</a>]}>
                <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div>content</div>
            </List.Item>
        )}
        />
    );
}
```
:::


### 竖排列表样式

通过设置 itemLayout 属性为 vertical 可实现竖排列表样式。

:::demo
```js
render() {
    const listData = [];
    for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
    }

    const IconText = ({ type, text }) => (
        <span>
            <Icon type={type} style={{ marginRight: 8 }} />
            {text}
        </span>
    );
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: (page) => {
                console.log(page);
            },
            pageSize: 3,
            }}
            dataSource={listData}
            footer={<div><b>ant design</b> footer part</div>}
            renderItem={item => (
            <List.Item
                key={item.title}
                actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
            >
                <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
                />
                {item.content}
            </List.Item>
            )}
        />
    )
}
```
:::


### 栅格列表

可以通过设置 List 的 grid 属性来实现栅格列表，column 可设置期望显示的列数。

:::demo
```js
render() {
    const data = [
        {
            title: 'Title 1',
        },
        {
            title: 'Title 2',
        },
        {
            title: 'Title 3',
        },
        {
            title: 'Title 4',
        },
    ];
    return (
        <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <Card title={item.title}>Card content</Card>
            </List.Item>
            )}
        />
    )
}
```
:::


### 响应式的栅格列表

响应式的栅格列表。尺寸与 Layout Grid 保持一致。


:::demo
```js
render() {
    const data = [
        {
            title: 'Title 1',
        },
        {
            title: 'Title 2',
        },
        {
            title: 'Title 3',
        },
        {
            title: 'Title 4',
        },
        {
            title: 'Title 5',
        },
        {
            title: 'Title 6',
        },
    ];
    return (
        <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <Card title={item.title}>Card content</Card>
            </List.Item>
            )}
        />
    )
}
```
:::


## api

### list


| 参数            | 说明          | 类型            | 默认值        |
|----------------|----------------|-----------------|--------------|
|bordered	|是否展示边框|	boolean	|false|
|footer	|列表底部	|string\ReactNode|	-|
|grid	|列表栅格配置	|object	|-|
|header	|列表头部	|string\ReactNode	|-|
|itemLayout|	设置 List.Item 布局, 设置成 vertical 则竖直样式显示, 默认横排|	string|	-|
|loading	|当卡片内容还在加载中时，可以用 loading 展示一个占位|	boolean\object (更多)	|false|
|loadMore|	加载更多|	string\ReactNode|	-|
|locale	|默认文案设置，目前包括空数据文案	|object|	emptyText: '暂无数据'|
|pagination|对应的 pagination 配置, 设置 false 不显示|	boolean\object|	false|
|size	|list 的尺寸	|default \ middle \ small	|default|
|split	|是否展示分割线|	boolean|	true|

### pagination

| 参数            | 说明          | 类型            | 默认值        |
|----------------|----------------|-----------------|--------------|
|position	|指定分页显示的位置	|'top' \ 'bottom' \ 'both'|	'bottom'|

更多配置项，请查看 Pagination

### List grid props


| 参数            | 说明          | 类型            | 默认值        |
|----------------|----------------|-----------------|--------------|
|column	|列数	|number|	-|
|gutter	|栅格间隔	|number	|0|
|xs	|<576px 展示的列数|	number|	-|
|sm	|≥576px 展示的列数|	number|	-|
|md	|≥768px 展示的列数|	number|	-|
|lg	|≥992px 展示的列数|	number|	-|
|xl	|≥1200px 展示的列数|	number|	-|
|xxl|	≥1600px 展示的列数|	number|	-|

### List.Item


| 参数            | 说明          | 类型            | 默认值        |
|----------------|----------------|-----------------|--------------|
|actions	|列表操作组，根据 itemLayout 的不同, 位置在卡片底部或者最右侧	|Array<ReactNode>|	-|
|extra	|额外内容, 通常用在 itemLayout 为 vertical 的情况下, 展示右侧内容; horizontal 展示在列表元素最右侧|	string\ReactNode|	-|


### List.Item.Meta


| 参数            | 说明          | 类型            | 默认值        |
|----------------|----------------|-----------------|--------------|
|avatar	|列表元素的图标	|ReactNode|	-|
|description|	列表元素的描述内容|	string、ReactNode|	-|
|title	|列表元素的标题|	string、ReactNode|	-|
