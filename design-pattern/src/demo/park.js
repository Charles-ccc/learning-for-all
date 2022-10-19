// 停车场
class Park {
  constructor(floors) {
    this.floors = floors || []
    // 存储摄像头拍摄返回的信息（车牌号，进场时间）
    this.carList = {}
    // 进场拍照
    this.camera = new Camera()
    // 出场显示
    this.screen = new Screen()
  }
  in(car) {
    // 通过摄像头获取信息(车牌号，进场时间，停的车位信息)
    const info = this.camera.shot(car)
    // 取0-100随机数
    const i = parseInt(Math.random() * 100 % 100)
    // 第一层某个车位
    const place = this.floors[0].places[i]
    // 停车
    place.in()
    // 停车位信息
    info.place = place
    // 记录信息
    this.carList[car.num] = info
  }
  out(car) {
    // 获取信息
    const info = this.carList[car.num]
    // 将停车位清空
    const place = info.place
    // 显示时间
    this.screen.show(car, info.inTime)
    // 清空记录
    delete this.carList[car.num]
  }
  emptyNum() {
    return this.floors.map(floor => {
      return `${floor.index}层还有${floor.emptyPlaceNum()}个空余车位`
    }).join('\n')
  }
}

// 摄像头
class Camera {
 shot(car) {
  return {
    num: car.num,
    inTime: Date.now()
  }
 }
}

// 出口显示屏
class Screen {
  show(car, inTime) {
    console.log('车牌号', car.num)
    console.log('停车时间', Date.now() - inTime)
  }
}

// 车辆，记录车牌号
class Car {
  constructor(num) {
    this.num = num
  }
}

// 层
class Floor {
  constructor(index, places) {
    this.index = index
    this.places = places || []
  }
  // 空位数量
  emptyPlaceNum() {
    let num = 0
    this.places.forEach(p => {
      if (p.empty) {
        num += 1
      }
    })
    return num
  }
}

// 车位
class Place {
  constructor() {
    this.empty = true
  }
  in() {
    this.empty = false
  }
  out() {
    this.empty = true
  }
}

// 测试
// 初始化停车场
const floors = []
for(let i=0; i<3; i++) {
  const places = []
  // 初始化100个车位
  for(let j=0; j<100; j++) {
    places[j] = new Place()
  }
  floors[i] = new Floor(i+1, places)
}
const park = new Park(floors)

// 初始化车辆
const car1 = new Car(428)
const car2 = new Car(664)
const car3 = new Car(886)

console.log('第一辆车进入')
console.log('剩余车位', park.emptyNum())
park.in(car1)
console.log('第二辆车进入')
console.log('剩余车位', park.emptyNum())
park.in(car2)
console.log('第一辆车离开')
park.out(car1)
console.log('第二辆车离开')
park.out(car2)
console.log('第三辆车进入')
console.log('剩余车位', park.emptyNum())
park.in(car3)
park.out(car3)
