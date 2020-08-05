class KVue {
  constructor(options) {
    // options 就是平常用的data，components，methods
    this.options = options
    this.$data = options.data
    // 响应化
    this.observe(this.$data)


    // 重新定义数组原型
    const oldArrayProperty = Array.prototype
    // 创建新对象，原型指向 oldArrayProperty ，再扩展新的方法不会影响原型
    const arrProto = Object.create(oldArrayProperty)
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(methodName => {
      arrProto[methodName] = function () {
        update() // 触发试图更新
        oldArrayProperty[methodName].call(this, ...arguments)
      }
    })
  }

  // 递归遍历，使传递进来的对象响应化
  // 数据劫持
  observe(value) {
    if (!value || typeof value !== 'object') return value

    if (Array.isArray(value)) {
      target.__proto__ = arrProto
    }
    // 遍历对象
    Object.keys(value).forEach(key => {
      // 对 key 做响应式处理
      this.defineReactive(value, key, value[key])
      this.proxyData(key)
    })
  }

  // 数据响应
  defineReactive(obj, key, value) {
    // 创建Dep实例: Dep和key是一一对应的
    const dep = new Dep()

    // 递归
    this.observe(value)

    // 给obj定义属性
    Object.defineProperty(obj, key, {
      get() {
        // 将Dep.target指向的 Watcher实例 加入到Dep中
        Dep.target && dep.addDep(Dep.target)
        return value
      },
      set(newVal) {
        if (newVal !== value) {
          value = newVal
          dep.notify()
          // console.log(`set中-> ${key}属性更新`)
        }
      }
    })
  }
  
  // 在Vue根上定义属性代理data中的数据，使之能够直接访问
  proxyData(key) {
    Object.defineProperty(this, key, {
      get() {
        return this.$data[key]
      },
      set(newVal) {
        this.$data[key] = newVal
      }
    })
  }
}

// Watcher是做更新的，Dep是通知 Watcher 做更新的
// 管理若干 wathcer， 和 Object.defineProperty 里面的key是一对一的关系
class Dep {
  constructor() {
    this.deps = []
  }

  addDep(watcher) {
    this.deps.push(watcher)
  }

  notify() {
    this.deps.forEach(watcher => watcher.update())
  }
}

// 保存UI中依赖，实现update函数可以更新它
class Watcher {
  // vm 当前vue组件的实例，key是当前挂钩的key
  constructor(vm, key) {
    this.vm = vm
    this.key = key
    
    // 将当前实例指向Dep.target
    // 该 this 指向会持续变更，加入新的Watcher实例
    Dep.target = this
  }

  update() {
    console.log(`${this.key}属性更新`)
  }
}