import React from 'react'
import WrappedNormalLoginForm from "./components/FromTest"
import KFromTest from './components/KFromTest'
import Dialog from './components/Dialog'

function App() {
  return (
    <div className="App">
      <WrappedNormalLoginForm />
      <KFromTest />
      <Dialog>挂在至指定宿主节点</Dialog>
    </div>
  );
}

export default App
