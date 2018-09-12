## Form 表单

  
## 代码演示

### 基本

:::demo
```js
render() {
    const FormItem = Form.Item;
    return (
        <Form>
            <FormItem
                validateStatus={'error'}
                help={'请输入'}
            >
                <Input  placeholder="Username" />
            </FormItem>
            <FormItem
                validateStatus={''}
                help={''}
            >
                <Input type="password" placeholder="Password" />
            </FormItem>
            <FormItem>
            <Button
                type="primary"
                htmlType="submit"
            >
                Log in
            </Button>
            </FormItem>
        </Form>
    )
}
```
:::



### 登录

:::demo
```js
render() {
    const FormItem = Form.Item;
    return (
        <Form className="login-form-test">
            <FormItem colon={false} labelCol={{span: 5}} label="账号">
                <Input placeholder="Username" />
            </FormItem>
            <FormItem labelCol={{span: 5}} label="密码">
                <Input type="password" placeholder="Password" />
            </FormItem>
            <FormItem>
                <Checkbox>Remember me</Checkbox>
                <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
            </Button>
            Or <a href="">register now!</a>
            </FormItem>
        </Form>
    )
}
```
:::

```less
.login-form-test{
    max-width: 300px;
    .login-form-forgot {
        float: right;
    }
        .login-form-button {
        width: 100%;
    }
    .ant-form-item-control-wrapper{
        width: 100%;
    }
}
```


## api

### Form.Item
| 参数	|说明	|类型	|默认值 |
|-------|----|-----|-------|
|colon	|配合 label 属性使用，表示是否显示 label 后面的冒号	|boolean	|true|	
|help	|提示信息，如不设置，则会根据校验规则自动生成	|string\ReactNode	| |
|label	|label 标签的文本	|string\ReactNode	| |
|labelCol	|label 标签布局，同 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}	|object	| |
|validateStatus	|校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'	|string	| |