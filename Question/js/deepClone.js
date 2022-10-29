/** 简易版 */
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  let copy = {}
  if (obj.constructor === Array) {
    copy = []
  }

  for (let key in obj) {
    // 如果key是对象的自有属性
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key])
    }
  }

  return copy
}

const a = {aa: 1, bb: 2}
const b = a
b.bb = 4
const c = deepClone(a)
c.aa = 4
console.log(a, b, c)

/** 完整版
 * 解决拷贝循环引用问题
 * 解决拷贝对应原型问题
 * 无法拷贝特殊对象，RegExp，Date，Set，Map等
 * 无法拷贝函数
 */

