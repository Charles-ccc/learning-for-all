/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true
  const isMirror = (l, r) => {
    if (!l && !r) return true
    if (l && r && 
      l.val === r.val &&
      isMirror(l.left, r.right) &&
      isMirror(l.right, r.left)
    ) {
      return true
    }
    return false
  }
  return isMirror(root.left, root.right)

  /** bfs 写法 */
  // const q = []
  // q.push(root.left, root.right)
  // while (q.length) {
  //   for (let i = 0; i < q.length; i += 2) {
  //     const left = q.shift()
  //     const right = q.shift()
  //     // 左子树或右子树其一为null
  //     if ((left && right === null) || (left === null && right)) return false
  //     if (left && right) {
  //       if (left.val !== right.val) return false
  //       q.push(left.left, right.right)
  //       q.push(left.right, right.left)
  //     }
  //   }
  // }
  // return true

}
