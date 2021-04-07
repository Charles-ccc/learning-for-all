import React, {useEffect} from 'react'
import {Form, Button, Input} from 'antd'

const FormItem = Form.Item
export default function AntdFormPage() {
  const [form] = Form.useForm()
  const nameRules = {required: true, message: '请输入姓名！'}
  const passworRules = {required: true, message: '请输入密码！'}

  useEffect(() => {
    form.setFieldsValue({username: 'KeZai'})
    console.log('form', form)
  }, [form])
  const onFinish = (val) => {
    console.log('onFinish', val)
  }
  const onFinishFailed = (val) => {
    console.log('onFinishFailed', val)
  }

  return (
    <div>
      <h3>AntdFormPage</h3>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <FormItem name='username' label='姓名' rules={[nameRules]}>
          <Input placeholder='Please enter username'/>
        </FormItem>
        <FormItem name='password' label='密码' rules={[passworRules]}>
          <Input placeholder='Please enter password' type='password'/>
        </FormItem>
        <FormItem>
          <Button type='primary' size='large' htmlType='submit'>Submit</Button>
        </FormItem>
      </Form>
    </div>
  )
}
