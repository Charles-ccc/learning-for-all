import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'

export default class FormPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
  }
  submit = () => {
    console.log('submit', this.state)
  }
  render() {
    const {name, password} = this.state
    return (
      <div>
        <Form>
          <Form.Item>
            <Input placeholder='请输入姓名' value={name} onChange={
              e => this.setState({
                name: e.target.value
              })
            }/>
          </Form.Item>
          <Form.Item>
            <Input type='password' placeholder='请输入密码' value={password} onChange={
              e => this.setState({
                password: e.target.value
              })
            }/>
          </Form.Item>
          <Button type='primary' onClick={this.submit} >提交</Button>
        </Form>
      </div>
    )
  }
}
