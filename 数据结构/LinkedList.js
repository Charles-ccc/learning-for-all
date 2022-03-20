/** 单向链表 */

/** Node类包含连个属性： element 用来保存节点上的数据，next 用来保存指向下一个节点的链接 */
function Node (element) {
  this.element = element // 当前节点的元素
  this.next = null // 下一个节点链接
}

/** LinkedList类提供了对链表进行操作的方法，包括插入删除节点，查找给定的值等 */
function LList () {
  this.head = new Node('head') // 头节点
  this.find = find
  this.insert = insert
  this.remove = remove
  this.prev = prev
  this.display = display
}

function find (item) {
  let currentNode = this.head
  while (currentNode.element !== item) {
    currentNode = currentNode.next
  }
  return currentNode
}

function insert (newElement, item) {
  let newNode = new Node(newElement)
  let currentNode = this.find(item)
  newNode.next = currentNode.next
  currentNode.next = newNode
}

function display () {
  let currentNode = this.head
  while (!(currentNode.next == null)) {
    console.log(currentNode.next.element)
    currentNode = currentNode.next
  }
}


function prev (item) {
  let currentNode = this.head
  while(!(currentNode.next == null) && (currentNode.next.element != item)) {
    currentNode = currentNode.next
  }
  return currentNode
}

function remove (item) {
  let prevNode = this.prev(item)
  if (!(prevNode.next != null)) {
    prevNode.next = prevNode.next.next
  }
}

let fruits = new LList()
fruits.insert('apple', 'head')
fruits.insert('banana', 'apple')
fruits.insert('orange', 'banana')
console.log(fruits.display())

fruits.remove('apple')
console.log(fruits.display())

