/**
 * 基础数据类型，引用的是值
 * 引用数据类型，引用的是址
 */

// 浅拷贝
const shallowCopy = function(obj) {
  if (typeof obj !== 'object') return
  const newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOweProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

// 深拷贝 递归会有爆栈的风险
const deepCopy = function(obj) {
  if (typeof obj !== 'object') return
  const newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOweProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}
