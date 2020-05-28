import React, { Component } from 'react'
import { Input, Button } from 'antd'

const KFromCreate = ( Comp ) => { 
  return class extends Component {
    constructor ( props ) {
      super( props )
      this.state = {} // 表单的值
      this.options = {} // 配置项
    }

    // 变更处理
    handleChange = (e) => {
      const { name, value } = e.target
      this.setState( {
        [name]: value
      }, () => {
          this.validateField(name)
      })
    }

    // 全局校验
    validateFields = (cb) => {
      console.log( 'validateFields~~', this.state )
      const rets = Object.keys( this.options ).map( field => {
        return this.validateField(field)
      })
      const ret = rets.every( v => v )
      cb(ret, this.state)
    }

    // 单词校验
    validateField = ( field ) => {
      // console.log(this.state)
      // 校验规则
      const { rules } = this.options[field]
      // 获取校验项的值, ret=false 则校验失败
      const ret = !rules.some( rule => {
        if ( rule.required ) {
          if ( !this.state[ field ] ) {
            // 设置错误信息
            this.setState({
              [ field + 'Message']: rule.message
            })
            return true  // 存在一个不符合项
          }
        }
        return false
      } )
      
      // 若校验成功，清理错误信息
      if ( ret ) {
        this.setState({
          [ field + 'Message']: ''
        })
      }

      return ret
    }

    getFieldDec = ( field, option ) => {
      this.options[field] = option
      // 返回一个装饰器（高阶组件）
      return InputComp => {
        return <div>
          {
            React.cloneElement( InputComp, {
              name: field,
              value: this.state[ field ] || '',
              onChange: this.handleChange // 输入值变化监听回调
            })
          }
          {/* 校验错误信息 */}
          {this.state[field + "Message"] && (
            <p style={{ color: "red" }}>{this.state[field + "Message"]}</p>
          )}
        </div>
      }
    }

    render () {
      return (
        <Comp
          { ...this.props }
          getFieldDec={ this.getFieldDec }
          validateFields={ this.validateFields }
        />
      )
    }
  }
}

@KFromCreate
class KFromTest extends Component {

  onLogin = () => {
    // 校验
    this.props.validateFields( ( isValid, data ) => {
      if ( isValid ) {
        console.log('登陆！！')
      } else {
        console.log('失败！！')
      }
    })
  }

  render () {
    const {getFieldDec} = this.props
    return (
      <div>
        {  /** 接收两个参数返回一个装饰器 */
          getFieldDec( 'username', {
            rules: [{required: true, message: '请输入用户名'}]
          })(<Input />)
        }
        {  /** 接收两个参数返回一个装饰器 */
          getFieldDec( 'password', {
            rules: [{required: true, message: '请输入密码'}]
          })(<Input type='password' />)
        }
        <Button onClick={this.onLogin}>提交</Button>
      </div>
    )
  }
}

export default KFromTest