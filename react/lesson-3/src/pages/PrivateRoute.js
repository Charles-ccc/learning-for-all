import React, {Component} from 'react'
import { Redirect, Route } from 'react-router-dom'
import {connect} from  'react-redux'


export default connect(
  ({user}) => ({isLogin: user.isLogin})
)(
  class PrivateRoute extends Component {
  render() {
    const { isLogin, path, component } = this.props
    if (isLogin) {
      return <Route path={path} component={component}/>
    } else {
      // 保存跳转前的path
      return <Redirect to={{pathname: '/login', state: {redirect: path}}} />
    }
  }
})