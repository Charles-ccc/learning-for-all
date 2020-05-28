import * as React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect, useReducer, useContext } from 'react'

const Context = React.createContext()

const fruitReducer = (state, action) => {
  switch (action.type) {
    case "init":
      return action.payload;
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
}

const FruitList = ({ fruitList, onSetFruit }) => {
  return (
    <ul>
      {
        fruitList.map(item => (
          <li key={item} onClick={() => onSetFruit(item)}>{item}</li>
        ))
      }
    </ul>
  )
}

const FruitAdd = (props) => {
  const { dispatch } = useContext(Context)
  const [fname, setFname] = useState('')

  const onAddFruit = e => {
    if (e.key === 'Enter') {
      // props.onAddFruit(fname)
      dispatch({type: 'add', payload: fname})
      setFname('')
    }
  }

  return (
    <input
      value={fname}
      onChange={e => setFname(e.target.value)}
      onKeyDown={onAddFruit}
    />
  )
}

const App = () => {
  const [fruit, setFruit] = useState('')
  // const [fruitList, setFruitList] = useState([])
  const [fruitList, dispatch] = useReducer(fruitReducer, [])

  useEffect(() => {
    dispatch({type: 'init', payload: ['西瓜', '荔枝', '芒果', '榴莲']})
    // setFruitList(['西瓜', '荔枝', '芒果', '榴莲'])
  }, [])

  return (
    <Context.Provider value={{ fruitList, dispatch }}>
      <div>
        {/* setFruitList 无法push，只能替换 */}
        <FruitAdd
          // onAddFruit={fname => dispatch({ type: 'add', payload: fname})}
          // setFruitList([...fruitList, fname])}
        />
        <p>{fruit === '' ? '请选择一种水果' : `选择了: ${fruit}`}</p>
        <FruitList fruitList={fruitList} onSetFruit={setFruit} />
      </div>
    </Context.Provider>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))