/** 观察者模式 */
class Subject {
  constructor () {
    this.observers = []
  }

  addObserver(observer) {
    if (!observer) return
    this.observers.push(observer)
  }
  removeObserver(observer) {
    this.observers = this.observers.filter(item => item !== observer)
  }
  notifyOberver(data) {
    if (!this.observers.length) {
      console.log('No observers to notify')
      return
    }
    this.observers.forEach(ob => ob.update(data))
  }
}

class Observer {
  constructor(name) {
    this.name = name
  }
  update(data) {
    console.log(`${this.name} received update: ${data}`)
  }
}

const subject = new Subject()
const observer1 = new Observer('Observer 1')
subject.addObserver(observer1)
subject.notifyOberver('Hello, World!')
subject.removeObserver(observer1)
subject.notifyOberver('Hello, World!')