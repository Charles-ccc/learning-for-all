import React, { PureComponent } from 'react'
import { Button } from 'antd'
// import store from '../store'
import { connect } from 'react-redux'
import { add, minus, asyncAdd } from '../store/counter'

// 参数1 mapStateToProps = (state) => {return {num: state}}
// 参数2 mapDispatchToProps = dispatch => {return {add: () => dispatch({type: 'add'})}}
// 1.自动渲染 2. 映射到组件属性
@connect((state) => ({ num: state.counter }), {
  // add: (num) => ({ type: 'add', payload: num }),
  // minus: () => ( { type: 'minus' } ),
  // asyncAdd: () => dispatch => {
  //   setTimeout( () => {
  //     dispatch({type: 'add'})
  //   }, 1000)
  // }
  add,
  minus,
  asyncAdd,
})
// export default connect(mapStateToProps, mapDispatchToProps, ReduxTest)

class ReduxTest extends PureComponent {
  // componentDidMount() {
  //   // 订阅状态变更
  //   store.subscribe(() => {
  //     this.forceUpdate()
  //   })
  // }

  render() {
    return (
      <div>
        {/* {store.getState()} */}
        {this.props.num}
        <div>
          {/* <Button onClick={() => store.dispatch()}>+</Button>
          <Button onClick={() => store.dispatch()}>-</Button> */}
          <Button onClick={() => this.props.add(2)}>+</Button>
          <Button onClick={this.props.minus}>-</Button>
          <Button onClick={this.props.asyncAdd}>+</Button>
        </div>
      </div>
    )
  }
}
export default ReduxTest