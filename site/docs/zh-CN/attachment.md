## attachment 上传


:::demo
```js
constructor(props) {
    super(props)
    this.state = {

    }
}

onDownload(e) {
    // console.log(e)
}

onDel(e) {
    // console.log(e)
}

attachmentChange({file}) {

}

beforeUpload(...arg) {
    // console.log(arg)
}

render() {
    return (
        <Attachment
            status={0}
            data={[]}
            onDownload={this.onDownload.bind(this)}
            loading={false}
            onDel={this.onDel}
            uploadProps={{
                disabled: false,
                action: 'https://jsonplaceholder.typicode.com/posts/', //上传地址,
                accept: '', //接受的上传类型
                data: { "fileClassification": "ATTACHMENT" },
                onChange: this.attachmentChange.bind(this),
                beforeUpload: this.beforeUpload.bind(this)
            }}
        />
    )
}
```
:::


## api


| 参数                | 说明                  | 类型                | 默认值              |
|---------------------|-----------------------|--------------------|---------------------|
|status           | 控件的状态，0表示编辑状态。1 表示不可编辑状态。 | number     |0           |
|data             | 已经上传附件的列表。{}  | array | [] |
| onDownload  | 点击某一个文件的下载按钮 | function | - |
| loading     | 显示loading状态 | Boolean | false | 
| onDel       | 删除的回调      | function | - |
|uploadProps   | 上传的参数/具体参数请参照upload组件     | object  | - |