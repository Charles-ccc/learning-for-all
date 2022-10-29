function TreeNode(data, left, right) {
  this.data = data
  this.left = left
  this.right = right
}

function BinaryTree() {
  this.root = null
}

BinaryTree.prototype.insert = function (data) {
  let node = new TreeNode(data, null, null)
  if (this.root == null) {
    this.root = node
  } else {
    let current = this.root
    let parent
    while (true) {
      parent = current
      if (data < current.data) {
        current = current.left
        if (current == null) {
          parent.left = node
          break
        }
      } else {
        current = current.right
        if (current == null) {
          parent.right = node
          break
        }
      }
    }
  }
}

function fn (arr) {
  let bst = new BinaryTree()
  for (let i = 0; i < arr.length; i++) {
    bst.insert(arr[i])
  }
  console.log(bst.root)
}

fn([12,4,8,11,15,18,9,16,26])