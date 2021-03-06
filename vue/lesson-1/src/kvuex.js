let Vue

class Store {
  constructor (options) {
    this.state = new Vue({
      data: options.state
    })

    this.mutations = options.mutations
    this.actions = options.actions

    options.getters && this.handleGetters(options.getters)
  }

  commit = (type, arg) => {
    this.mutations[type](this.state, arg)
  }
  
  dispatch(type, arg) {
    this.actions[type]({commit: this.commit, state: this.state}, arg)
  }

  handleGetters(getters) {
    this.getters = {}
    // 遍历 getters 所有key
    Object.keys(getters).forEach(key => {
      // 为 this.getters定义若干属性，属性是只读的
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state)
        }
      })
    })
  }
}

function install(_Vue) {
  Vue = _Vue

  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default {Store, install}