/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false
  let res = false
  const dfs = (n, s) => {
    if (!n.left && !n.right && s === sum) {
      res = true
    }
    n.left && dfs(n.left, s + n.left.val)
    n.right && dfs(n.right, s + n.right.val)
  }
  dfs(root, root.val)
  return res
};