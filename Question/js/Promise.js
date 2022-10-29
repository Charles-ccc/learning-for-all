/**
 * Promise 三种状态 pending、fulfilled、rejected
 * todo
 */
class Promise {
  constructor(executor) {
    this.state = 'pending'
    // 成功的值
    this.value = undefined
    // 失败原因
    this.reason = undefined
    // 将then里的两个函数储存起来，解决异步问题
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []

    let resolve = value => {
      if (this.state = 'pending') {
        this.state = 'fulfilled'
        this.value = value

        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }

    let reject = value => {
      if (this.state = 'pending') {
        this.state = 'rejected'
        this.reason = reason

        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    try{
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state = 'fulfilled') {
      onFulfilled(this.value)
    }
    if (this.state = 'rejected') {
      onRejected(this.reason)
    }

    if (this.state === 'pending') {
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value)
      })

      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason)
      })
    }
  }
}