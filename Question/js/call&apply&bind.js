/**
 * call: 改变函数指向，第一个参数是改变指向的对象，之后的参数形式是 arg1, arg2...
 * apply: 基本与 call 一致，区别在于第二个参数是一个数组 [arg1, arg2...]
 * bind: 改变 this 作用域会返回一个新的函数，并且该函数不会立即执行
 */

 /**
  * Call
  * @param context myCall()的传入参数，上下文的this对象
  * @param args 动态参数
  */
  Function.prototype.myCall = function (context, ...args) {
    // 定义context的指向
    context = (typeof context ==='object' ? context : window)
    const key = Symbol()
    // 这里this是调用myCall，需要执行的方法
    context[key] = this
    
    const result = context[key](...args)
    delete context[key]
    return result
  }

/**
 * Apply
 * @param context 上下文的this对象
 * @param args 动态参数
 */
  Function.prototype.myApply = function (context, args) {
    context = (typeof context === 'object' ? context : window)
    const key = Symbol()
    context[key] = this
    const result = context[key](args)
    delete context[key]
    return result
  }

/**
 * Bind
 * @param context myBind()的传入参数，上下文的this对象
 * @return {Function}
 */
  Function.prototype.myBind = function (context) {
    context = (typeof context === 'object' ? context : window)
    return (...args) => {
      this.call(context, ...args)
    }
  }


// function Product(name, price) {
//   this.name = name
//   this.price = price
// }

// function Car (name, price) {
//   Product.myCall(this, name, price)
//   this.category = 'home'
// }

// const car = new Car('civic', 12)

// console.log('car', car);


