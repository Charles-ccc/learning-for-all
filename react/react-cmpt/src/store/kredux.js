export function createStore (reducer, enhancer) {
  // enhancer 为高阶函数，强化createStore的能力
  // 返回函数执行reducer
  if (enhancer) {
    return enhancer(createStore)(reducer)
  }

  let currentState = undefined
  const currentListeners = [] // 订阅的所有回调函数数组

  function getState () {
    return currentState
  }

  // 更新状态
  function dispatch (action) {
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

// 接收若干中间件
export function applyMiddleware ( ...middlewares ) {
  // 从enhancer中接收的createStore
  return createStore => (...args) => {
    // 完成之前 createStore 的工作，args包含reducer
    const store = createStore(...args)
    let dispatch = store.dispatch
    // 强化 dispatch
    // 传递给中间件函数的参数
    const midApi = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    }
    // 将若干middlewares转为数组
    const chain = middlewares.map(mw => mw(midApi))
    // 将函数的数组聚合成一个多层级嵌套函数
    // 把强化后的dispatch再赋值给它自己
    // 按顺序执行中间件函数
    dispatch = compose(...chain)(store.dispatch)
    // 返回全新store，仅更新强化过的dispatch函数
    return {
      ...store,
      dispatch
    }
  }
}

export function compose (...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  // 聚合函数数组为一个函数 [fn1, fn2] => fn2(fn1())
  // ...args = store.dispatch
  return funcs.reduce((left, right) => (...args) => right(left(...args)))
}