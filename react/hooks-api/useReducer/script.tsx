import * as React from 'react'
import { useEffect, useReducer } from 'react'
import ReactDOM from 'react-dom'

const initialState = {
  count: 0,
  step: 1
}

const reducer = (state, action) => {
  const { count, step } = state
  switch (action.type) {
    case 'tick':
      return {count: count + step, step}
    case 'step':
      return {count, step: action.step}
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({type: 'tick'})
    }, 1000)
    return () => clearInterval(timer)
  }, [dispatch])

  const {count, step} = state
  return (
    <div>
      <h1>{count}</h1>
      <input 
        value={step}
        onChange={e => {
          dispatch({
            type: 'step',
            step: Number(e.target.value)
          })
        }}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))