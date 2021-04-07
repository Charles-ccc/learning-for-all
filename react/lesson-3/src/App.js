import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import LoginPage from './pages/LoginPage'
import PrivateRoute from './pages/PrivateRoute'

function App() {
  return (
    <div className='App'>
      <Router
        // 用于确认导航的函数
        getUserConfirmation={(message, callback) => {
          const allowTransition = window.confirm(message);
          callback(allowTransition);
        }}
      >
        <Link to='/'>首页</Link>
        <Link to='/user'>我的</Link>
        <Link to='/login'>登陆</Link>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          {/* <Route path='/user' component={UserPage}/> */}
          <PrivateRoute path='/user' component={UserPage}/>
          <Route path='/login' component={LoginPage}/>
          <Route render={() => <div>4040404啦</div>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
