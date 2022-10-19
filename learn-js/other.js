// for(var i=0;i<3;i++) {
//   setTimeout(() => {
//     console.log(i)  // 3 3 3
//   }, 1)
// }

// for(let i=0;i<3;i++) {
//   setTimeout(() => {
//     console.log(i)  // 0 1 2
//   }, 1)
// }

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2
//   },
//   perimeter: () => 2 * Math.PI * this.radius
// }
// console.log(shape.diameter())  // 20
// console.log(shape.perimeter())  // NaN

// console.log(+true)  // 1
// console.log(!"heihei")  // false

// let a = 3
// let b = new Number(3)
// let c = 3
// console.log(b)

// class Chameleon {
//   colorChange(newColor) {
//     this.newColor = newColor
//     return this.newColor
//   }

//   constructor({ newColor = 'green' } = {}) {
//     this.newColor = newColor
//   }
// }
// const freddie = new Chameleon()
// console.log(freddie.colorChange('orange'))

// function Person(firstName, lastName) {
//   this.firstName = firstName
//   this.lastName = lastName
//   console.log(this)
// }

// const lydia = new Person('Lydia', 'Hallie')
// const sarah = Person('Sarah', 'Smith')
// console.log(lydia)
// console.log(sarah)


// function getPersonInfo(one, two, three) {
//   console.log(one)
//   console.log(two)
//   console.log(three)
// }

// const person = 'Lydia'
// const age = 21
// getPersonInfo`${person} is ${age} years old`

// function getAge(...args) {
//   console.log(typeof args)
// }
// getAge(21)

// const a = {}
// const b = {key: 'b'}
// const c = {key: 'c'}
// console.log(a[b], a[c])
// a[b] = 123
// a[c] = 456
// console.log(a[b])

// const person = { name: 'Lydia' }
// function sayHi(age) {
//   console.log(`${this.name} is ${age}`)
// }
// console.log(
//   sayHi.call(person, 21),
//   sayHi.bind(person, 21)
// )

// (() => {
//   let x, y
//   try {
//     throw new Error()
//   } catch (x) {
//     (x = 1), (y = 2)
//     console.log('a', x)
//   }
//   console.log('b', x)
//   console.log('c', y)
// })()

// [[0, 1], [2, 3]].reduce(
//   (acc, cur) => {
//     return acc.concat(cur)
//   },
//   [1, 2]
// )

// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, "one");
// });
// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 1000, "two");
// });
// Promise.race([firstPromise, secondPromise]).then(res => console.log(res))

// let person = {name: 'aaa'}
// const members = [person]
// person = null
// console.log(members)

// console.log([1,2,3].map(n => {
//   if (typeof n === "number") returns
//   return n * 2
// }))

// var result = "12345678 123456789".replace(/\B(?=(\d{3})+\b)/g, ',')
// console.log(result);

// var regex = /(?=.*[0,9])(?=.*[a-z])|(?=.*[0,9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])^[0-9a-zA-Z]{6,12}&/

/**
 * 深拷贝
 * @param {Object} obj 
 */
function deepClone (obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
   for (let key in obj) {
     // 保证 key 不是原型的属性
     if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
     }
   }
  return result
}

/** 除了判断 == null 之外，其余都有 === */
/** == null 相当于 === null || === undefined */

/** truly变量   !!a === true 的变量 */
/** falsely变量   !!a === false 的变量 */


// class People {
//   constructor(name) {
//     this.name = name
//   }
//   eat () {
//     console.log(`${this.name} eat shit`)
//   }
// }

// class HK {
//   constructor(name, number) {
//     super(name)
//     this.number = number
//   }
//   zoom () {
//     console.log(`${this.name} has zoom ${this.number}`)
//   }
// }

// const dog = new HK('HKS', 100)
// dog.eat()
// dog.zoom()

/**
 * 每个 class 都有显示原型 proprtype
 * 每个实例都有隐示原型 __proto__ 
 * 实例的 __proto__ 指向对应的 class 的prototype
 * 先在自身属性和方法寻找，找不到则自动去 __proto__ 中查找
 */

/** 手写bind */
Function.prototype.bindc = function () {
  // 将参数拆解成数组
  const args = Array.prototype.slice.call(arguments)

  // 获取this
  const t = args.shift()
  
  const self = this
  
  return function () {
    return self.apply(t, args)
  }
}

/** 通用事件函数 */
function bindEvent (elem, type, selector, fn) {
  if (fn == null) {
    fn = selector
    selector = null
  }
  elem.addEventListener(type, e => {
    let target
    if (selector) {
      target = selector
      if (target.matches(selector)) {
        fn.call(target, e)
      }
    } else {
      fn(e)
    }
  })
}

/** 防抖 */
function debounce (fn, delay = 500) {
  let timer = null

  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

/** 节流 */
function throttle (fn, delay = 100) {
  let timer = null
  
  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}
/** 数组去重 */
function distinct(arr) {
  return arr.filter((item, index) => {
    // return arr.indexOf(item) === index
    return arr.includes(item)
  })
}

/** reduce
 * total 初始值，或计算结束后的返回值
 * currentValue 当前元素
 * currentIndex 当前元素索引
 * arr 当前元素所属的数组对象
 * initialValue 传递给函数的初始值，相当于total的初始值
 */
array.reduce(function(total, currentValue, currentIndex, arr), initalValue)

// 数组转对象
const streams = [{name: '技术', id: 1}, {name: '设计', id: 2}];
const obj = streams.reduce((a, c) => {
  a[c.id] = c
  return a
} , {});

// 数组去重
const newArr = arr.reduce((prev, cur) => {
  prev.indexOf(cur) === -1 && prev.push(cur)
}, [])

// 对象数组去重
const responseList = [
  { id: 1, a: 1 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 },
];
const resultArr = responseList.reduce((acc, cur) => {
  const ids = acc.map(item => item.id)
  return ids.includes(cur.id) ? acc : [...acc, cur]
}, [])

// 字符串中字母出现的次数
const str = 'sfhjasfjgfasjuwqrqadqeiqsajsdaiwqdaklldflas-cmxzmnha'

const res = str.split('').reduce((prev, cur) => {
  prev[cur] ? prev[cur]++ : prev[cur] = 1
  return prev
}, {})


// 数字转千分位
function format_with_array(number) {
  const arr = (number + '').split(.)
  // 整数
  const int = arr[0].split('')
  // 小数
  const fraction = arr[1] || ''
  const r = ''
  const len = int.length
  int.reverse().forEach((v, i) => (
    // 非第一位，且位值是3的倍数
    if (i !== 0 && i % 3 === 0) {
      r = v + ',' + r
    } else {
      r = v + r
    }
  ))
  // 整数和小数部分拼接
  return r + (!!fraction ? '.' + fraction : '')
}