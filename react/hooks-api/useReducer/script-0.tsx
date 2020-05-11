import * as React from 'react'
import { useReducer } from 'react'
import ReactDOM from 'react-dom'

const reducer = (state, action) => {
  const { value } = state
  switch(action.type) {
    case 'plus':
      return {value: value + action.payload}
    case 'minus':
      return {value: value - action.payload}
  }
}

const App = () => {
  const initalvalue = { value: 0 }
  const [state, dispatch] = useReducer(reducer, initalvalue)
  return (
    <div>
      Count by useReducer: {state.value}
      <br />
      <button onClick={() => dispatch({type: 'plus', payload: 5})}>plus 5</button>
      <button onClick={() => dispatch({type: 'minus', payload: 2})}>minus 2</button>
    </div>
  )
}
ReactDOM.render(<App />, document.querySelector('#app'))