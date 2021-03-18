import { applyMiddleware, createStore } from 'redux'
// import { createStore, applyMiddleware } from '../kRedux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// 定义修改规则 count
function countReducer (state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}

const store = createStore(countReducer)
// const store = createStore(countReducer, applyMiddleware(logger, thunk))

function _logger ({getState, dispatch}) {
  return dispatch => action => {
    console.log('action', action)
    console.log(action.type + '执行了')
    return dispatch(action)
  }
}

function _thunk ({getState, dispatch}) {
  // 这里的dispatch是外部传进来的，可能是原始的，也可能是其他中间件处理过的
  return dispatch => action => { // 第二个箭头函数是改造过后的dispatch函数
    // action 可以是对象，还可以是函数
    if (typeof action === 'function') {
      return action(dispatch, getState)
    } else {
      return dispatch(action)
    }
  }
}

export default store