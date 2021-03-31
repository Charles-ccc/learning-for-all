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
  let nextListeners = currentListeners
  let isDispatching = false // 提供锁存功能

  function ensureCanMutateNextListeners () {
    //为每次订阅提供快照备份nextListeners，主要防止在遍历执行currentListeners回调
    //过程中触发了订阅/取消订阅功能，若直接更新currentListeners将造成当前循环体逻辑混乱
    //因此所有订阅/取消订阅的listeners都是在nextListeners中存储的，并不会影响当前的dispatch(action)
    if (nextListeners === currentListeners) {
        nextListeners = currentListeners.slice()
    }
}

  function getState () {
    return currentState
  }

  function dispatch (action) {
    // 调用对应reducer->通知所有listener更新状态

    // 判断在执行dispatch的过程中是否已存在dispatch的执行流
    // 保证dispatch中对应的reducer不允许有其他dispatch操作
    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.')
    }try {
        //根据提供的action，执行根reducer从而更新整颗状态树
        isDispatching = true
        // 通过当前reducer计算出新的state
        currentState = currentReducer(currentState, action)
    } finally {
        isDispatching = false
    }
    //通知所有之前通过subscribe订阅state更新的回调listener
    const listeners = currentListeners = nextListeners
    for(let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
    return action
  }

  // 订阅，可多次订阅
  function subscribe (listener) {
    //保证只有第一次执行unsubscribe()才是有效的，只取消注册当前listener
    let isSubscribed =true
    // 每次订阅把回调放入回调数组中
    currentListeners.push(listener)
    ensureCanMutateNextListeners()
    //返回一个取消订阅的函数
    return function unsubscribe() {
      //保证当前listener只被取消注册一次
      if (!isSubscribed) { return }
      isSubscribed =false
      ensureCanMutateNextListeners()
      const index = nextListeners.indexOf(listener)
      nextListeners.splice(index,1)
    }
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
    // chain是一个用来缓存中间件扩展功能的队列，通过对middlewares的遍历，队列中的每个元素是middleware(middlewareAPI)的结果
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
// fn1(fn2(fn3))
function compose (...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}