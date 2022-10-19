class Car {
  constructor(number, name) {
    this.name = name
    this.number = number
  }
}

class Kuaiche extends Car {
  constructor(number, name) {
    super(number, name)
    this.price = 1
  }
}

class Zhuanche extends Car {
  constructor(number, name) {
    super(number, name)
    this.price = 2
  }
}

class Trip {
  constructor(car) {
    this.car = car
  }
  start() {
    console.log(`行程开始，车型${this.car.name},车牌${this.car.number}`)
  }
  end() {
    console.log(`行程结束，金额是${this.car.price * 5}元`)
  }
}

let car = new Kuaiche(100, '宾利')
let trip = new Trip(car)
trip.start()
trip.end()