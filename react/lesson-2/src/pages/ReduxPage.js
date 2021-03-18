import React, { Component } from 'react'
import store from '../store'

export default class ReduxPage extends Component {
  componentDidMount() {
    // 订阅
    store.subscribe(() => {
      this.forceUpdate()
    })
  }
  handleAdd = () => {
    // 派发
    store.dispatch({type: 'ADD'})
  }
  handleAsyncAdd = () => {
    store.dispatch(dispatch => {
      setTimeout(() => {
        dispatch({type: 'ADD'})
      }, 1000)
    })
  }
  handleMinus = () => {
    store.dispatch({type: 'MINUS'})
  }
  render() {
    console.log('store', store)
    return (
      <div>
        {/* 获取 */}
        当前数
        <p>{store.getState()}</p>
        
        <button onClick={this.handleAdd}>ADD</button>
        <button onClick={this.handleAsyncAdd}>ASYNCADD</button>
        <button onClick={this.handleMinus}>Minus</button>
      </div>
    )
  }
}
