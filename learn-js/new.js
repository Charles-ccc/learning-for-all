function myNew(func, ...args) {
  if (typeof func !== 'function') {
    throw '第一个参数必须是方法体'
  }

  const obj = Object.create(func.prototype)

  let result = func.apply(obj, args)
  
  const isObject = typeof result === 'object' && result !== null
  const isFunction = typeof result === 'function' && result !== null

  return isObject || isFunction ? result : obj
}