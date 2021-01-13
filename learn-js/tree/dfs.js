/**
 * 深度优先遍历
 */
const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [{
        val: 'd',
        children: []
      },{
        val: 'e',
        children: []
      }]
    },{
      val: 'c',
      children: [{
        val: 'f',
        children: []
      },{
        val: 'g',
        children: []
      }]
    }
  ]
}

const dfs = root => {
  // 访问根节点
  console.log(root.val);
  // root.children.forEach(child => {
  //   dfs(child)
  // })
  // 对根节点下的children进行递归
  root.children.forEach(dfs)
}

dfs(tree)