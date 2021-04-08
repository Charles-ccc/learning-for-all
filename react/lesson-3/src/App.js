import React from 'react'
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
// import {useParams, useLocation, useHistory} from './k-react-router-dom/hooks'
import BrowserRouter from './react-router-dom/BrowserRouter'
import Route from './react-router-dom/Route'
import Link from './react-router-dom/Link'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import LoginPage from './pages/LoginPage'
import PrivateRoute from './pages/PrivateRoute'

function App() {
  return (
    <div className='App'>
      <BrowserRouter
        // 用于确认导航的函数
        getUserConfirmation={(message, callback) => {
          const allowTransition = window.confirm(message)
          callback(allowTransition)
        }}
      >
        <Link to='/'>首页</Link>
        <Link to='/user'>我的</Link>
        <Link to="/children">children</Link>
        <Link to="/render">render</Link>
        {/* <Link to='/login'>登陆</Link> */}
        {/* <Switch> */}
          <Route exact path='/' component={HomePage}/>
          <Route path='/user' component={UserPage}/>
          <Route path="/children" children={() => <div>children</div>} />
          <Route path="/render" render={() => <div>render</div>} />
          {/* <PrivateRoute path='/user' component={UserPage}/>
          <Route path='/login' component={LoginPage}/> */}
          <Route render={() => <div>4040404啦</div>}/>
        {/* </Switch> */}
      </BrowserRouter>
    </div>
  )
}

export default App
