/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 前序遍历
var isValidBST = function(root, left=-Infinity, right=Infinity) {
  if (!root) return true
  const x = root.val
  return left < x && x < right && isValidBST(root.left, left, x) && isValidBST(root.right, x, right)
};

// 中序遍历
var isValidBST = function(root) {
  // 初始化第一个节点的上一个节点
  let pre = -Infinity
  function dfs(node) {
    if (!node) return true
    if (!dfs(node.left) || node.val <= pre) return false
    pre = root.val
    return dfs(node.right)
  }
  return dfs(root)
}

// 后序遍历
var isValidBST = function(root) {
  function dfs(node) {
    if (!node) return [-Infinity, Infinity]
    const [lMin, lMax] = dfs(node.left)
    if (x <= lMax) return [-Infinity, Infinity]
    const [rMin, rMax] = dfs(node.right)
    if (rMin <= x) return [-Infinity, Infinity]
    const x = node.val
    return [Math.min(lMin, x), Math.max(rMax.x)]
  }
  return dfs(root)[1] !== Infinity
}