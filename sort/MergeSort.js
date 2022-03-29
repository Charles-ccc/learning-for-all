/**
 * 归并排序
 * 分 归 并
 * 分：将子数组分为两个，然后再对子数组递归进行“分”的操作，直到分为一个个单独的数
 * 归：把两个数合并为有序数组
 * 并：再对有序数组合并，直到全部子数组合并为一个完整数组
 * 分治算法，将原数组切分成较小的数组，直到每个数据只有一个位置，接着将小数组归并成较大的数组，最后只有一个排序完毕的大数组
 */

Array.prototype.mergeSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) return arr // 递归终止条件
    const mid = Math.floor(arr.length / 2) // 获取数组中间下标
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, arr.length)
    const orderLeft = rec(left) // 递归调用rec方法，直到分为单个元素
    const orderRight = rec(right)

    const res = [] // 用于存放最终排序后的数组
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) { // 比较两个有序数组头部，较小者推入res
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
      } else if (orderLeft.length) { // 如果两个数组还有值，则重复上面操作
        res.push(orderLeft.shift())
      } else if (orderRight.length) {
        res.push(orderRight.shift())
      }
    }
    return res
  }
  const res = rec(this)
  res.forEach((n, i) => { // 把数组拷贝到this上
    this[i] = n
  })
}

const arr = [6,5,4,3,2,1]
arr.mergeSort()
