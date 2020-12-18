/** 寄生组合式继承 */

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