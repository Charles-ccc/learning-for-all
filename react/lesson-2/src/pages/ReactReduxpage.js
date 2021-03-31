import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { connect } from '../kReactRedux'
import { bindActionCreators } from 'redux'

// ownProps当前组件本身的 props，谨慎使用
// ownProps变化回导致 mapStateToProps重新执行，state也会被重新计算，影响性能
const mapStateToProps = (state, ownProps) => ({
  count: state
})
// 如果不声明mapDispatchToProps，那么dispatch会被注入默认的props中
const mapDispatchToProps = (dispatch) => {
  let res = {
    add: () => ({type: 'ADD'}),
    minus: () => ({type: 'MINUS'})
  }
  res = bindActionCreators(res, dispatch)
  return {
    dispatch,
    ...res
  }
}
class ReactReduxpage extends Component {
  
  render() {
    console.log(this.props)
    const {count, add, minus, dispatch} = this.props
    return (
      <div>
        <p>{count}</p>
        <button onClick={() => {dispatch({type: 'ADD'})}}>ADD</button>
        <button onClick={add}>add???</button>
        <button onClick={minus}>Minus</button>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxpage)