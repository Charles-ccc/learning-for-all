/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  // const q = [[root, 0]]
  // const res = []
  // while (q.length) {
  //   const [n, l] = q.shift()
  //   if (!res[l]) {
  //     res.push([n.val])
  //   } else {
  //     res[l].push(n.val)
  //   }
  //   n.left && q.push([n.left, l + 1])
  //   n.right && q.push([n.right, l + 1])
  // }
  const q = [root]
  const res = []
  while (q.length) {
    // 可以保证每次while循环时，q 都是同一层级的元素
    let len = q.length
    // 新建一个空数组用于存放即将push的元素
    res.push([])
    while(len --) {
      const n = q.shift()
      // 将元素push到刚刚新建的空数组里
      res[res.length - 1].push(n.val)
      n.left && q.push(n.left)
      n.right && q.push(n.right)
    }
  }
  return res
};