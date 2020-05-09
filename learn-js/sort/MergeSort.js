/**
 * 归并排序
 * 分 归 并
 * 分治算法，将原数组切分成较小的数组，直到每个数据只有一个位置，接着将小数组贵秉承较大的数组，最后只有一个排序完毕的大数组
 */
function mergeSort (arr) {
  arr = mergeSortRec(arr)
  return arr
}

// 将大数组分成多个小数组
function mergeSortRec (arr) {
  console.log('arr', arr)
  const length = arr.length
  if (length === 1) {
    return arr
  }
  const mid = Math.floor(length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid, length)
  // 在这里通过递归将数组分成多个length=1的数组
  return merge(mergeSortRec(left), mergeSortRec(right))
}

// 合并和排序
function merge (left, right) {
  let result = []
  let il = 0
  let ir = 0
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il])
      il++
    } else{
      result.push(right[ir])
      ir++
    }
  }
  // 将剩余的数组加入
  if (il < left.length) {
    result.push(...left.slice(il))
  }
  if (ir < right.length) {
    result.push(...right.slice(ir))
  }
  return result
}

console.log(mergeSort([9,8,7,6,5,4,3,2,1]))