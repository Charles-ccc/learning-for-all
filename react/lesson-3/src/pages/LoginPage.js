import React, {Component} from 'react'
// import {Redirect} from 'react-router-dom'
import Redirect from './react-router-dom/Redirect'
import {connect} from  'react-redux'

export default connect(
  ({user}) => ({isLogin: user.isLogin}),
  {
    login: () => ({type: 'LOGIN_SUCCESS'})
  }
)(
  class LoginPage extends Component {
    render() {
      const { isLogin, location, login } = this.props
      console.log('props', this.props)
      // 边界处理防止通过url进入而没有state
      const {redirect = '/'} = location.state || {}
      if (isLogin) {
        return <Redirect to={redirect}/>
      } else {
        return (
          <div>
            <h3>LoginPage</h3>
            <button onClick={login}>login click</button>
          </div>
        )
      }
    }
  }
)
