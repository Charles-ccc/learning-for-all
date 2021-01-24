/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root == null) return true
  /** 递归写法 */
  // const check = (left, right) => {
  //   if (left == null && right == null) return true
  //   if (left && right) {
  //     return left.val === right.val 
  //       && check(left.left, right.right) 
  //       && check(left.right, right.left)
  //   }
  //   return false
  // }
  // return check(root.left, root.right)

  /** bfs 写法 */
  const q = []
  q.push(root.left, root.right)
  while (q.length) {
    for (let i = 0; i < q.length; i += 2) {
      const left = q.shift()
      const right = q.shift()
      // 左子树或右子树其一为null
      if ((left && right === null) || (left === null && right)) return false
      if (left && right) {
        if (left.val !== right.val) return false
      }
      q.push(left.left, right.right)
      q.push(left.right, right.left)
    }
  }
  return true
}



function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const node = new TreeNode(1)
node.left = new TreeNode(2,3)
node.right = new TreeNode(3,2)

isSymmetric(node)