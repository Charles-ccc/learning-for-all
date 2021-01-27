/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return null
  // const left = invertTree(root.left)
  // const right = invertTree(root.right)
  // root.left = right
  // root.right = left
  // return root
  return {
    val: root.val,
    left: invertTree(root.right),
    right: invertTree(root.left)
  }
};