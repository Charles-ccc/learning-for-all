import React, { Component } from 'react'
import { createStore, applyMiddleware } from '../store/kredux'
import { Button } from 'antd'

const counterReducer = (state = 0, action) => {
  const num = action.payload || 1

  switch (action.type) {
    case 'add':
      return state + num
    case 'minus':
      return state - num
    default:
      return state
  }
}

// 自定义中间件
const logger = ({dispatch, getState}) =>{
  // 返回真正中间件任务执行函数
  return dispatch => action => {
    // 执行中间件任务
    console.log(action.type + '执行了！！！')
    // 执行下一个中间件
    return dispatch(action)
  }
}

const thunk = ({dispatch, getState}) => dispatch => action => {
  // 处理函数action
  if ( typeof action == 'function' ) {
    return action(dispatch, getState)
  }
  // 不是函数直接跳过
  return dispatch(action)
}

const store = createStore(counterReducer, applyMiddleware(logger, thunk))
export default class MyReduxTest extends Component {

  componentDidMount () {
    store.subsucribe(() => this.forceUpdate())
  }

  render () {
    return (
      <div>
        <h3>这里是自建redux - {store.getState()}</h3>
        <br />
        <Button onClick={ () => store.dispatch( { type: 'add'} ) }>+</Button>
        <Button onClick={ () => store.dispatch( () => {
          setTimeout( () => {
            store.dispatch({type: 'add'})
          }, 1000)
        }) }>+</Button>
      </div>
    )
  }
}