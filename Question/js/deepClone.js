/** 简易版 */
// function deepClone(obj) {
//   if (typeof obj !== 'object' || obj === null) {
//     return obj
//   }

//   let copy = {}
//   if (obj.constructor === Array) {
//     copy = []
//   }

//   for (let key in obj) {
//     // 如果key是对象的自有属性
//     if (obj.hasOwnProperty(key)) {
//       copy[key] = deepClone(obj[key])
//     }
//   }

//   return copy
// }

// const a = {aa: 1, bb: 2}
// const b = a
// b.bb = 4
// const c = deepClone(a)
// c.aa = 4
// console.log(a, b, c)

/** 完整版
 * 解决拷贝循环引用问题
 * 解决拷贝对应原型问题
 * 无法拷贝特殊对象，RegExp，Date，Set，Map等
 * 无法拷贝函数
 */

const getType = obj => Object.prototype.toString.call(obj)
const isObject = target => (typeof target === 'object' || typeof target === 'function') && target !== null
// 可以遍历的类型
const canTraverse = {
  '[object Map]': true,
  '[object Set]': true,
  '[object Array]': true,
  '[object Object]': true,
  '[object Arguments]': true,
}
// 不可遍历的类型
const mapTag = '[object Map]';
const setTag = '[object Set]';
const boolTag = '[object Boolean]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

const handleRegExp = (target) => {
  const { source, flags } = target
  return new target.constructor(source, flags)
}

const handleFunc = (func) => {
  // 箭头函数直接返回自身
  if(!func.prototype) return func;
  const bodyReg = /(?<={)(.|\n)+(?=})/m;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const funcString = func.toString();
  // 分别匹配 函数参数 和 函数体
  const param = paramReg.exec(funcString);
  const body = bodyReg.exec(funcString);
  if(!body) return null;
  if (param) {
    const paramArr = param[0].split(',');
    return new Function(...paramArr, body[0]);
  } else {
    return new Function(body[0]);
  }
}

const handleNotTraverse = (target, tag) => {
  const Ctor = target.constructor;
  switch(tag) {
    case boolTag:
      return new Object(Boolean.prototype.valueOf.call(target));
    case numberTag:
      return new Object(Number.prototype.valueOf.call(target));
    case stringTag:
      return new Object(String.prototype.valueOf.call(target));
    case symbolTag:
      return new Object(Symbol.prototype.valueOf.call(target));
    case errorTag: 
    case dateTag:
      return new Ctor(target);
    case regexpTag:
      return handleRegExp(target);
    case funcTag:
      return handleFunc(target);
    default:
      return new Ctor(target);
  }
}

const deepClone = (target, map = new WeakMap()) => {
  if (!isObject(target)) return target
  let type = getType(target)
  let cloneTarget
  if (!canTraverse[type]) {
    cloneTarget = handleNotTraverse(target, type)
  } else {
    // 保持类型一致性，初始化对象
    let ctor = target.constructor
    cloneTarget = new ctor()
  }
  // 防止循环引用
  if (map.get(target)) return map.get(target)
  map.set(target, true)

  if (type === mapTag) {
    target.forEach((item, key) => {
      cloneTarget.set(deepClone(key, map), deepClone(item, map))
    })
  }
  if (type === setTag) {
    target.forEach(item => {
      cloneTarget.add(deepClone(item, map))
    })
  }
  // 处理数组和对象
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = deepClone(target[prop], map)
    }
  }
  return cloneTarget
}

const a = {aa: 1, bb: 2}
const b = a
b.bb = 4
const c = deepClone(a)
c.aa = 4
console.log(a, b, c)
