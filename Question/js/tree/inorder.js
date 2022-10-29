const bt = require('./bt')

/** 中序遍历 */
const inorder = (root) => {
  if (!root) return
  inorder(root.left)
  console.log(root.val)
  inorder(root.right)
}

inorder(bt)
