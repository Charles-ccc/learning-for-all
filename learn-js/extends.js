// /** 寄生组合式继承 */

function Product() {
  this.name = 'Honda'
  this.price = 12
}

function Car () {
  Product.call(this)
  this.category = 'civic'
}

Car.prototype = Object.create(Product.prototype)

Car.constructor.prototype = Car

console.log(new Product())

console.log(new Car())

/** ES6 Class 继承 */
class Parent {
  constructor(name) {
    this.name = name
  }
  do () {
    console.log('do some thing')
  }

  getName () {
    console.log('parent name: ', this.name)
  }
}

class Child extends Parent {
  constructor (name, parentName) {
    super(parentName)
    this.name = name
  }

  sayName () {
    console.log('child name: ', this.name)
  }
}

const child1 = new Child('kezai', 'changzai')
child1.sayName()
child1.getName()
child1.do()

const parent1 = new Parent('kkdd')
parent1.getName()

/** extends 实现原理 */
// 原型连接
Child.prototype = Object.create(Parent.prototype)
// B继承A的静态属性
Object.setPrototypeOf(child, Parent)
// 绑定this
Parent.call(this)