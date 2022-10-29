const bt = require('./bt')

/** 先序遍历 */
const preorder = (root) => {
  if (!root) return
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}

preorder(bt)
