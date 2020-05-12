import * as React from 'react'
import { useImperativeHandle, useRef, forwardRef, MutableRefObject } from 'react'
import ReactDOM from 'react-dom'

const ChildInput = forwardRef((props, ref) => {
  const inputRef: MutableRefObject<any> = useRef(null)

  useImperativeHandle(ref, () => ({
    value: inputRef.current.value,
    type: inputRef.current.type,
    focus: () => inputRef.current.focus()
  }))
  return <input ref={inputRef} type='text' {...props} />
})

const App = () => {
  const inputEl: MutableRefObject<any> = useRef(null)

  const handleChild = () => {
    console.log('自组件input对象===>', inputEl.current)
    inputEl.current.focus()
  }
  return (
    <div>
      <ChildInput ref={inputEl} />
      <button onClick={handleChild}>console input</button>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))