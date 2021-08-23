class myEventEmmiter {
  constructor() {
    // 用来储存事件和监听函数之间的关系
    this.eventMap = {}
  }

  // type 代表事件名称
  on(type, handler) {
    if (!(handler instanceof Function)) {
      throw new Error('请传入函数')
    }
    if (!this.eventMap[type]) {
      this.eventMap[type] = []
    }
    this.eventMap[type].push(handler)
  }

  emit (type, params) {
    // 假设该事件是有订阅的(对应的事件队列存在)
    if (this.eventMap[type]) {
      // 将事件队列里的handler依次执行出队
      this.eventMap[type].forEach((handler, index) => {
        handler(params)
      })
    }
  }

  off (type, handler) {
    if (this.eventMap[type]) {
      this.eventMap[type].splice(this.eventMap[type].indexOf(handler) >>> 0, 1)
    }
  }
}

// 实例化
const myEvent = new myEventEmmiter()
const testHandler = function (params) {
  console.log(`事件触发，参数是${params}`)
}

// 监听test事件（订阅）
myEvent.on('test', testHandler)

// 在触发test事件时，传入被testHandler感知的参数（发布）
myEvent.emit('test', 'newState')