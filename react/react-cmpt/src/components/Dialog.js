import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class Dialog extends Component {
  constructor ( props ) {
    super( props )
    
    this.node = document.createElement( 'div' )
    document.body.appendChild(this.node)
  }
  
  componentWillUnmount () {
    document.body.removeChild(this.node)
  }

  render () {
    // 将 createPortal 参数1 声明的jsx 挂在到node（宿主）上
    return createPortal((
      <div style={{position: 'absolute', right: 0}}>
        {this.props.children}
      </div>
    ), this.node)
  }
}