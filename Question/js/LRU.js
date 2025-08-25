/** 
 * LRU（Least Recently Used，最近最少使用）缓存实现
 * 特点：
 * 1. 当缓存空间满时，会自动删除最久未使用的数据
 * 2. 每当访问缓存中的某个数据时，该数据会被移动到最前面
 * 3. 使用双向链表 + Map 实现，保证操作的时间复杂度为 O(1)
 */

/**
 * 双向链表节点类
 */
class Node {
  constructor(key, value) {
    this.key = key          // 键
    this.value = value      // 值
    this.prev = null        // 前驱节点指针
    this.next = null        // 后继节点指针
  }
}

class LRUCache {
  /**
   * @param {number} capacity - 缓存容量
   */
  constructor(capacity) {
    this.capacity = capacity               // 缓存的最大容量
    this.cache = new Map()                // 存储键值对的 Map
    this.head = new Node()                // 虚拟头节点，方便操作
    this.tail = new Node()                // 虚拟尾节点，方便操作
    
    // 初始化双向链表
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  /**
   * 获取缓存中的值
   * @param {string|number} key - 键
   * @returns {*} 值，如果不存在则返回 -1
   */
  get(key) {
    if (!this.cache.has(key)) return -1   // 检查哈希表，如果键不存在，返回 -1

    const node = this.cache.get(key)      // 获取节点
    this.moveToHead(node)                 // 将节点移动到头部（最近使用）

    return node.value
  }

  /**
   * 放入缓存
   * @param {string|number} key - 键
   * @param {*} value - 值
   */
  put(key, value) {
    if (this.cache.has(key)) {           // 如果键已存在
      const node = this.cache.get(key)
      node.value = value                 // 更新值
      this.moveToHead(node)              // 移动到头部
      return
    }

    const node = new Node(key, value)    // 创建新节点
    this.cache.set(key, node)            // 加入 Map
    this.addToHead(node)                 // 添加到头部

    // 如果超出容量，删除最久未使用的节点（尾部节点）
    if (this.cache.size > this.capacity) {
      this.removeTail()
    }
  }

  /**
   * 将节点移动到头部
   * @param {Node} node - 要移动的节点
   */
  moveToHead(node) {
    this.removeNode(node)    // 先从原位置删除
    this.addToHead(node)     // 再添加到头部
  }

  /**
   * 从链表中删除节点
   * @param {Node} node - 要删除的节点
   */
  removeNode(node) {
    node.prev.next = node.next    // 调整前驱节点的 next 指针
    node.next.prev = node.prev    // 调整后继节点的 prev 指针
  }

  /**
   * 将节点添加到头部
   * @param {Node} node - 要添加的节点
   */
  addToHead(node) {
    node.prev = this.head           // 新节点的 prev 指向 head
    node.next = this.head.next      // 新节点的 next 指向原来的第一个节点
    this.head.next.prev = node      // 原来的第一个节点的 prev 指向新节点
    this.head.next = node           // head 的 next 指向新节点
  }

  /**
   * 删除尾部节点（最久未使用的节点）
   */
  removeTail() {
    const node = this.tail.prev     // 获取尾部节点（虚拟尾节点的前一个节点）
    this.removeNode(node)           // 从链表中删除
    this.cache.delete(node.key)     // 从 Map 中删除
  }
}