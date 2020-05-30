import React from 'react'
import WrappedNormalLoginForm from "./components/FromTest"
import KFromTest from './components/KFromTest'
import Dialog from './components/Dialog'
import Tree from './components/Tree'
import ReduxTest from './components/ReduxTest'

function App() {
  return (
    <div className="App">
      <WrappedNormalLoginForm />
      <KFromTest />
      <Dialog>挂在至指定宿主节点</Dialog>
      <Tree />
      <ReduxTest />
    </div>
  );
}

export default App
