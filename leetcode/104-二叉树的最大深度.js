/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let maxDeep = 0
  const dfs = (n, level) => {
    if(!n) return
    if (!n.left && !n.right) {
      maxDeep = Math.max(maxDeep, level)
    }
    dfs(n.left, level + 1)
    dfs(n.right, level + 1)
  }
  dfs(root, 1)
  return maxDeep
}

maxDepth([3,9,20,null,null,15,7])