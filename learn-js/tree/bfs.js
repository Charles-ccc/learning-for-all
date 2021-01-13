/**
 * 深度优先遍历
 */
const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [{
        val: 'd',
        children: []
      },{
        val: 'e',
        children: []
      }]
    },{
      val: 'c',
      children: [{
        val: 'f',
        children: []
      },{
        val: 'g',
        children: []
      }]
    }
  ]
}

const bfs = root => {
  // 新建队列，并把跟节点入队
  const q = [root]
  // 在队列不为空的情况下
  while(q.length > 0) {
    // 让队头出队
    const n = q.shift()
    console.log(n.val)
    // 把队头的children挨个入队
    n.children.forEach(child => {
      q.push(child)
    })
  }
}

bfs(tree)