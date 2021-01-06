var RecentCounter = function () {
  // 新建一个队列
  this.q = []
}

/**
 * @param {number} t
 * @param {number}
 */

RecentCounter.prototype.ping = function (t) {
  this.q.push(t)

  while(this.q[0] < t - 3000) {
    this.q.shift()
  }

  return this.q.length
}
