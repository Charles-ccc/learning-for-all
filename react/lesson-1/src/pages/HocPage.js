import React, { Component } from 'react'

/** HOC 高阶组件：本身是一个函数，接收一个组件，返回一个新的组件 */
// function Child(props) {
//   return <div>Child</div>
// }


// Cmp 是 function 或者 class 组件
const foo = Cmp => props => {
  return (<div className='border'>
    <Cmp {...props} />
  </div>)
}

// 从下往上
@foo
@foo
class Child extends Component {
  render() {
    return (
      <div>Child</div>
    )
  }
}

// const Foo = foo(Child)

export default class HocPage extends Component {
  render() {
    return (
      <div className='HocPage'>
        <h3>HocPage</h3>
        {/* <Foo /> */}
        <Child />
      </div>
    )
  }
}
