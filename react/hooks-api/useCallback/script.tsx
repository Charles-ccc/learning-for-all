import * as React from 'react';
import { useCallback } from 'react';
import ReactDOM from 'react-dom';

let ticker = 0;
let updateMark = 0;

const randomNum = () => {
  const rand = Math.random()
  return () => rand
}

const App = ({ updateMark }) => {
  // now 会每秒改变一次，而updateMark由于向上取整之后就是2s一次
  const now = Date.now()
  const cb = useCallback(randomNum(), [updateMark])
  const result = cb()

  return (
    <div>
      <p>
        timer: 
        <br />
        {now}
      </p>
      <p>
        result of useCallback: 传递进来的 props 2秒变一次
        <br />
        {result}
      </p>
    </div>
  )
}

setInterval(() => {
  ticker += 1 / 2;
  updateMark = Math.round(ticker);
  ReactDOM.render(<App updateMark={updateMark} />, document.querySelector('#app'));
}, 1000);