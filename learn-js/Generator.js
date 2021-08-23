/**
 * 1. 在function关键字与函数名之间多了 * 号
 * 2. 函数内部使用了 yield 表达式，用于定义Generator函数中的每个状态
 * 3. Generator函数封装了多个内部状态（通过yield表达式定义内部状态）。执行时反悔一个遍历器对象（Iterator）。
 *    也就是说，Generator时遍历器对象生成函数，函数内部封装了多个状态。通过反悔的Iterator对象，可以依次遍历（调用next方法）Generator函数的每个内部状态
 * 4. Generator函数调用之后不会立即执行，而是返回遍历器对象（Iterator对象）。通过返回的Iterator对象的next方法来遍历内部yield表达式的每一个状态
 * 5. yield 表达式具有暂停执行的功能，而恢复执行的是 next 方法
 */

  function *gen () {
    yield 1
    yield 2
    return 3 // 只能有一个return
  }

  const g = gen() // Iterator
  console.log(g.next()) // { value: 1, done: false }
  console.log(g.next()) // { value: 2, done: false }
  console.log(g.next()) //  { value: 3, done: true } done 表示是否遍历完毕
  console.log(g.next()) // {value: undefined, done: true}


  function *gen2 () {
    var x = yield 'hello world'
    var y = x / 2 // yield没有返回值，所以x是undefined
    return [x, y]
  }
  const g2 = gen2()
  g2.next() // {value: 'hello world', done: false}
  g2.next() // { value: undefined, done: true } 

  
  function *Gen() {
    yield this.a = 1
  }
  Gen.prototype.say = function () {
    console.log('charless')
  }
  const g = new Gen()
  g.a // undefined 返回的遍历器对象不是实例对象，无法获取this指向，使用call方法将函数执行时所在的作用域绑定到Generator.prototype原型对象上
  g.say() // 'charless'