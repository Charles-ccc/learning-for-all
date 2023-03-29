/** LRU（最近最少使用）淘汰算法 */

/**
 * 实现一个 LRUCache 类型，用来充当存储空间
   采用 Map 数据结构存储数据，因为它的存取时间复杂度为 O(1)，数组为 O(n)
   实现 get 和 set 方法，用来获取和添加数据
   我们的存储空间有长度限制，所以无需提供删除方法，存储满之后，自动删除最久远的那条数据
   当使用 get 获取数据后，该条数据需要更新到最前面
 */

class LRUCache {
  constructor(length) {
    // 储存长度
    this.length = length
    // 储存数据
    this.data = new Map()
  }

  set(key, value) {
    const data = this.data
    // 有的话删除，重建放到 map 最前面
    if (data.has(key)) {
      data.delete(key)
    }

    data.set(key, value)
  
    // 如果超出了容量，则需要删除最久的数据
    if (data.size > data.length) {
      const delKey = data.keys().next().value
      data.delete(delKey)
    }
  }

  get(key) {
    const data = this.data
    if (!data.has(key)) {
      return null
    }

    // 获取元素
    const value = data.get(key)
    // 删除元素
    data.delete(key)
    // 重新插入元素到 map 最前面
    data.set(key, value)
    // 返回获取的值
    return value
  }
}