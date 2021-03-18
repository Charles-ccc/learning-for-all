export function createStore(reducer, preloadedState, enhancer) {
  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer(preloadedState)
    preloadedState = undefined
  }
  if (enhancer) {
    if (typeof enhancer !== 'function') {
      throw new Error('enhancer 需要是一个函数')
    }
    // enhancer的作用是扩展store，所以传入createStore来加强
    // enhancer(createStore)返回一个加强后的createStore
    // 再传入reducer 、preloadedState 生成改造后的store，类似递归调用
    return enhancer(createStore)(reducer, preloadedState)
  }
  let currentState = preloadedState
  let currentReducer = reducer
  let currentListeners = []

  function getState () {
    return currentState
  }

  function dispatch (action) {
    // 通过当前reducer计算出新的state
    currentState = currentReducer(currentState, action)
    // 监听函数是数组，循环执行
    for(let i = 0; i < currentListeners.length; i++) {
      const listener = currentListeners[i]
      listener()
    }
  }

  // 订阅，可多次订阅
  function subscribe (listener) {
    // 每次订阅把回调放入回调数组中
    currentListeners.push(listener)
  }
  // // 初始值
  dispatch({type: '@INIT'})

  return {
    getState,
    dispatch,
    subscribe
  }
}

// 传入reducers是一个对象集合
export function combineReducers(reducers) {
  // 获取所有reducer的key，组成数组
  const reducerKeys = Object.keys(reducers)
  // 有效的reducers
  const finalReducers = {}
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducers[i]
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key]
    }
  }
  const finalReducersKeys = Object.keys(finalReducers)

  /**
   * 终极reducer，传入createStore
   * 在dispatch中调用 currentReducer
   * 该函数核心是根据finalReducer中储存的所有reducer信息，循环获取到每个reducer对应的state
   * 并根据当前dispatch的action，一起传入当前循环的reducer，生成新的state
   * 最终将所有新生成的state作为值，各自的reducerName为键，生成最终的state
  */
  return function combination(state = {}, action) {
    let hasChangeed = false
    const nextState = {}
    for(let i = 0; i < finalReducersKeys.length; i++) {
      // 获取每个reducer的key
      const key = finalReducersKeys[i]
      const reducer = finalReducersKeys[key]
      // 获取初始的state
      const prevStateForKey = state[key]
      // 根据reducer的初始状态和当前的action，生成新的state
      const nextStateForKey = reducer(prevStateForKey, action)
      // 生成最终的state对象
      nextState[key] = nextStateForKey
      hasChangeed = hasChangeed || nextStateForKey !== prevStateForKey
    }
    return hasChangeed ? nextState : state
  }
}

export function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = () => {}
    const middleAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    }
    const chain = middlewares.map(middleware => middleware(middleAPI))
    dispatch = compose(...chain)(store.dispatch)
    return {
      ...store,
      dispatch
    }
  }
}

// 将所有的中间件函数串联起来，中间件1执行结束后，作为参数传入中间件2，以此类推，直至全部处理完
// 最开始接收store.dispatch作为参数，层层改造后被赋值到新的dispatch变量中
function compose (...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}