const bt = require('./bt')

/** 后序遍历 */
const postorder = (root) => {
  if (!root) return
  postorder(root.left)
  postorder(root.right)
  console.log(root.val)
}

postorder(bt)
