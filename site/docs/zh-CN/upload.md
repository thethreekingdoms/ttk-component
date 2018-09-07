## Upload 上传

文件选择上传和拖拽上传控件。

## 代码演示

### 点击上传
经典款式，用户点击按钮弹出文件选择框。

:::demo
```js
render() {
  const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Upload {...props}>
      <Button>
        <Icon type="upload" /> Click to Upload
      </Button>
    </Upload>
  )
}
```
:::


### 用户头像
点击上传用户头像，并使用 beforeUpload 限制用户上传的图片格式和大小。

+ beforeUpload 的返回值可以是一个 Promise 以支持也支持异步检查：

:::demo
```js
constructor() {
  super()
  this.state = {
    loading: false,
  };
}

handleChange(info) {
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  if (info.file.status === 'uploading') {
    this.setState({ loading: true });
    return;
  }
  if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, imageUrl => this.setState({
      imageUrl,
      loading: false,
    }));
  }
}

render() {
  

  function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }
  const uploadButton = (
    <div>
      <Icon type={this.state.loading ? 'loading' : 'plus'} />
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  const imageUrl = this.state.imageUrl;
  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="//jsonplaceholder.typicode.com/posts/"
      beforeUpload={beforeUpload}
      onChange={this.handleChange.bind(this)}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
    </Upload>
  );
}
```
:::

### 已上传的文件列表
使用 defaultFileList 设置已上传的内容。

:::demo
```js
render() {
  const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
    defaultFileList: [{
      uid: '1',
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/xxx.png',
    }, {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png',
    }, {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500', // custom error message to show
      url: 'http://www.baidu.com/zzz.png',
    }],
  };
  return(
    <Upload {...props}>
      <Button>
        <Icon type="upload" /> Upload
      </Button>
    </Upload>
  )
}
```
:::


### 照片墙
用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失。

:::demo
```js
constructor() {
  super()
  this.state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
  };
}

handleCancel(){
  this.setState({ previewVisible: false })
} 

handlePreview(file){
  this.setState({
    previewImage: file.url || file.thumbUrl,
    previewVisible: !this.state.previewVisible,
  });
}

handleChange({ fileList }){
  this.setState({ fileList })
}

render() {
  const { previewVisible, previewImage, fileList } = this.state;
  const uploadButton = (
    <div>
      <Icon type="plus" />
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  console.log(Modal)
  return (
    <div className="clearfix">
      <Upload
        action="//jsonplaceholder.typicode.com/posts/"
        listType="picture-card"
        fileList={fileList}
        onPreview={this.handlePreview.bind(this)}
        onChange={this.handleChange.bind(this)}
      >
        {fileList.length >= 3 ? null : uploadButton}
      </Upload>
      <div style={{display: `${previewVisible ? 'block' : 'none'}`}}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </div>
    </div>
  );
}
```
:::



### 文件夹上传

支持上传一个文件夹里的所有文件。

:::demo
```js
render() {
  return (
    <Upload action="//jsonplaceholder.typicode.com/posts/" directory>
      <Button>
        <Icon type="upload" /> Upload Directory
      </Button>
    </Upload>
  )
}
```
:::



### 拖拽上传
把文件拖入指定区域，完成上传，同样支持点击上传。

设置 multiple 后，在 IE10+ 可以一次上传多个文件。

:::demo
```js
render() {
  const Dragger = Upload.Dragger;

  const props = {
    name: 'file',
    multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return(
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <Icon type="inbox" />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
    </Dragger>
  )
}
```
:::


### 图片列表样式

上传文件为图片，可展示本地缩略图。IE8/9 不支持浏览器本地缩略图展示（Ref），可以写 thumbUrl 属性来代替。


:::demo
```js
render() {
  const fileList = [{
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  }, {
    uid: '-2',
    name: 'yyy.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  }];

  const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    defaultFileList: [...fileList],
  };

  const props2 = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    defaultFileList: [...fileList],
    className: 'upload-list-inline',
  };
  return(
    <div>
      <Upload {...props}>
        <Button>
          <Icon type="upload" /> Upload
        </Button>
      </Upload>
      <br />
      <br />
      <Upload {...props2}>
        <Button>
          <Icon type="upload" /> Upload
        </Button>
      </Upload>
    </div>
  )
}
```
:::


### 手动上传
beforeUpload 返回 false 后，手动上传文件。

:::demo
```js

constructor() {
  super()
  this.state = {
    fileList: [],
    uploading: false,
  }
}

handleUpload(){
  const { fileList } = this.state;
  const formData = new FormData();
  fileList.forEach((file) => {
    formData.append('files[]', file);
  });

  this.setState({
    uploading: true,
  });

  // You can use any AJAX library you like
  reqwest({
    url: '//jsonplaceholder.typicode.com/posts/',
    method: 'post',
    processData: false,
    data: formData,
    success: () => {
      this.setState({
        fileList: [],
        uploading: false,
      });
      message.success('upload successfully.');
    },
    error: () => {
      this.setState({
        uploading: false,
      });
      message.error('upload failed.');
    },
  });
}

render() {
  const { uploading } = this.state;
  const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    onRemove: (file) => {
      this.setState(({ fileList }) => {
        const index = fileList.indexOf(file);
        const newFileList = fileList.slice();
        newFileList.splice(index, 1);
        return {
          fileList: newFileList,
        };
      });
    },
    beforeUpload: (file) => {
      this.setState(({ fileList }) => ({
        fileList: [...fileList, file],
      }));
      return false;
    },
    fileList: this.state.fileList,
  };

  return (
    <div>
      <Upload {...props}>
        <Button>
          <Icon type="upload" /> Select File
        </Button>
      </Upload>
      <Button
        className="upload-demo-start"
        type="primary"
        onClick={this.handleUpload.bind(this)}
        disabled={this.state.fileList.length === 0}
        loading={uploading}
      >
        {uploading ? 'Uploading' : 'Start Upload' }
      </Button>
    </div>
  );
}
```
:::


## API

服务端上传接口实现可以参考 [jQuery-File-Upload](https://github.com/blueimp/jQuery-File-Upload/wiki)。



| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|accept	|接受上传的文件类型, 详见 input accept Attribute	|string|	无|
|action	|必选参数, 上传的地址	|string\ (file) => Promise|	无|
|directory|	支持上传文件夹（caniuse）|	boolean|	false|
|beforeUpload|	上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传。注意：IE9 不支持该方法。|	(file, fileList) => boolean \ Promise	|无|
|customRequest	|通过覆盖默认的上传行为，可以自定义自己的上传实现|	Function|	无|
|data	|上传所需参数或返回上传参数的方法	|object\ (file) => object	|无|
|defaultFileList|	默认已经上传的文件列表|	object[]|	无|
|disabled|	是否禁用|	boolean|	false|
|fileList	|已经上传的文件列表（受控），使用此参数时，如果遇到 onChange 只调用一次的问题，|	object[]|	无|
|headers	|设置上传的请求头部，IE10 以上有效|	object|	无|
|listType	|上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card	| string|	'text'|
|multiple|	是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件。|	boolean	|false|
|name	|发到后台的文件参数名|	string|	'file'|
|showUploadList	|是否展示 uploadList, 可设为一个对象，用于单独设定 showPreviewIcon 和 showRemoveIcon|	Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean }	|true|
|supportServerRender|	服务端渲染时需要打开这个|	boolean	|false|
|withCredentials	| 上传请求时是否携带 cookie	|boolean|	false|
|onChange	|上传文件改变时的状态，详见 onChange	|Function	|无|
|onPreview|	点击文件链接或预览图标时的回调	|Function(file)	|无|
|onRemove  |	点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。              	|Function(file): boolean \ Promise|	无  |



## onChange

+ 上传中、完成、失败都会调用这个函数。

文件状态改变的回调，返回为：

```
{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}
```

1、file 当前操作的文件对象。
```
{
   uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
   name: 'xx.png'   // 文件名
   status: 'done', // 状态有：uploading done error removed
   response: '{"status": "success"}', // 服务端响应内容
   linkProps: '{"download": "image"}', // 下载链接额外的 HTML 属性
}
```
  + antd@1.9.0 之前，multiple 模式下，此参数为一个对象数组 [file, ...]，antd@1.9.0 开始无论是否多选，均为一个对象。
  
2、 fileList 当前的文件列表。
3、 event 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持。


### 显示下载链接

请使用 fileList 属性设置数组项的 url 属性进行展示控制。

### customRequest

+ [https://github.com/react-component/upload#customrequest](https://github.com/react-component/upload#customrequest)

### IE note

+ [https://github.com/react-component/upload#ie89-note](https://github.com/react-component/upload#ie89-note)
