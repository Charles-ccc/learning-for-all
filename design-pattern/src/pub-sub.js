/** 发布订阅模式 */

class PubSub {
  constructor() {
    // 储存不同事件的回调函数
    this.subscribers = {}
  }
  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = []
    }
    this.subscribers[event].push(callback)
  }
  publish(event, data) {
    if (!this.subscribers[event]) {
      return
    }
    this.subscribers[event].forEach((cb) => cb(data));
  }
  unsubscribe(event, callback) {
    if (!this.subscribers[event]) {
      return
    }
    this.subscribers[event] = this.subscribers[event].filter((cb) => cb !== callback);
  }
}

const pubSub = new PubSub()
function onEvent(data) {
    console.log(`Received data: ${data}`);
}

// 订阅事件
pubSub.subscribe('myEvent', onEvent);

// 发布事件
pubSub.publish('myEvent', 'Hello, World!');

// 取消订阅
pubSub.unsubscribe('myEvent', onEvent);
