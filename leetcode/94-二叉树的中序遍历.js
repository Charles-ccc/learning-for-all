/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  // 递归版
  // const res = []
  // const rec = n => {
  //   if (!root) return
  //   rec(n.left)
  //   res.push(n.val)
  //   rec(n.right)
  // }
  // rec(root)
  // return res

  // 迭代版
  const res = []
  const stack = []
  let p = root
  while(stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    res.push(n.val)
    p = n.right
  }
  return res
};