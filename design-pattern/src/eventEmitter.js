class eventEmmiter {
  constructor() {
    // 用来储存事件和监听函数之间的关系
    this.listeners = {}
  }

  // eventType 代表事件名称
  on(eventType, callback) {
    if (!(callback instanceof Function)) {
      throw new Error('请传入函数')
    }
    // 如果没有监听者，就初始化
    if (!this.listeners[eventType]) {
      this.listeners[eventType] = []
    }
    this.listeners[eventType].push(callback)
  }

  emit (eventType, params) {
    // 假设该事件是有订阅的(对应的事件队列存在)
    if (this.listeners[eventType]) {
      // 将事件队列里的callback依次执行出队
      this.listeners[eventType].forEach(callback => {
        callback(params)
      })
    }
  }

  off (eventType, callback) {
    if (this.listeners[eventType]) {
      // 如果当前事件存在监听者，就移除
      const index = this.listeners[eventType].findIndex(fn => fn === callback)
      if (index !== -1) {
        this.listeners[eventType].splice(index, 1)
      }
      if (!this.listeners[eventType].length) {
        // 如果没有事件监听它，就直接删除该事件类型
        delete this.listeners[eventType]
      }
      // this.listeners[eventType].splice(this.listeners[eventType].indexOf(callback) >>> 0, 1)
    }
  }
}

// 实例化
const myEvent = new eventEmmiter()
const testHandler = function (params) {
  console.log(`事件触发，参数是${params}`)
}

// 监听test事件（订阅）
myEvent.on('test', testHandler)

// 在触发test事件时，传入被testHandler感知的参数（发布）
myEvent.emit('test', 'newState')


myEvent.off('test', testHandler)