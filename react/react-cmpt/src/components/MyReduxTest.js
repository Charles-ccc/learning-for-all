import React, { Component } from 'react'
import { createStore } from './../store/kredux'
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

const store = createStore(counterReducer)
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
      </div>
    )
  }
}