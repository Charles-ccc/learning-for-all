import * as React from 'react'
import { useMemo } from 'react'
import ReactDOM from 'react-dom'

let ticker = 0
let updataRemark = 0

const getRandom = () => Math.random()

const App = ({updataRemark}) => {
  const now = Date.now()
  let result = useMemo(getRandom, [updataRemark])

  return (
    <div>
      <p>
        timer:
        <br />
        {now}
      </p>
      <p>
        result of useMemo: ('updataRemark' props changes by 2 secs)
        <br />
        {result}
      </p>
    </div>
  )
}

setInterval(() => {
  ticker += 1 / 2
  updataRemark = Math.round(ticker)
  ReactDOM.render(<App updataRemark={updataRemark} />, document.querySelector('#app'))
}, 1000)