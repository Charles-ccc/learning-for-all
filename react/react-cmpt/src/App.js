import React from 'react'
import WrappedNormalLoginForm from "./components/FromTest"
import KFromTest from './components/KFromTest'
import Dialog from './components/Dialog'
import Tree from './components/Tree'
import ReduxTest from './components/ReduxTest'
import MyReduxTest from './components/MyReduxTest'


function App() {
  return (
    <div className="App">
      <WrappedNormalLoginForm />
      <br />
      <KFromTest />
      <br />
      <Dialog>挂在至指定宿主节点</Dialog>
      <br />
      <Tree />
      <br />
      <ReduxTest />
      <br />
      <MyReduxTest />
    </div>
  )
}

export default App
