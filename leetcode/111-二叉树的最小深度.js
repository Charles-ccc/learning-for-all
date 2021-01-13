/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0
  const q = [[root, 0]]
  while (q.length) {
    const [n, level] = q.shift()
    if (!n.left && !n.right) {
      return level
    }
    n.left && q.push([n.left, level + 1])
    n.right && q.push([n.right, level + 1])
  }
}
