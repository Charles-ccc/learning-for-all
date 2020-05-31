
export function createStore (reducer) {
  let currentState = undefined
  const currentListeners = [] // 订阅的所有回调函数数组

  function getState () {
    return currentState
  }

  // 更新状态
  function dispatch ( action ) {
    // 修改
    currentState = reducer(currentState, action)
    // 变更通知，执行所有回调函数
    currentListeners.forEach(v => v())
    return action
  }

  function subsucribe (cb) {
    currentListeners.push(cb)
  }

  // 初始化状态，type独特性不和用户重合
  dispatch({type: '@I-AM-LC'})
  return {
    getState,
    dispatch,
    subsucribe
  }
}