import * as React from 'react'
import { useRef } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const inputRef = useRef()
  const handleInputVal = () => {
    console.log('input value is ===> ', inputRef.current.value)
  }
  return (
    <div>
      <input ref={inputRef} />
      <br/>
      <button onClick={handleInputVal}>consolg input value</button>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))