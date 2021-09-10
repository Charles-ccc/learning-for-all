import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import nike from './assets/nike.png'
class Search extends React.Component {
  render () {
    return <div className='search-text'>
      Search text
      <img src={nike}/>
    </div>
  }
}

ReactDOM.render(<Search />, document.getElementById('root'))