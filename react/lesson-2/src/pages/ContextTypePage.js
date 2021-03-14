import React, { Component } from 'react'
import { ThemeContext } from '../ThemeContext'

export default class ContextTypePage extends Component {
  // 静态方法直接添加到当前的类上，只能订阅一个context，并且是类组件
  static contextType = ThemeContext

  render() {
    console.log('this', this)
    // this.context在任何声明周期都可以访问
    const {themColor} = this.context
    return (
      <div className='border'>
        <h3 className={themColor}>ContextTypePage</h3>
      </div>
    )
  }
}
