/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q) return true
  // if (p == null || q == null) return false
  // if (p.val !== q.val) return false
  // return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)

  // return JSON.stringify(p) === JSON.stringify(q)

  if (p && q && p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  ) {
    return true
  }
  return false
}