/** 二分查找
 *  前提是需对数组排序
 *  时间复杂度 O(logN)
 */
// Array.prototype.binarySearch = function (item) {
//   this.sort()
//   let low = 0 // 搜索的最小下标和最大下标
//   let high = this.length - 1 
//   while(low <= high) {
//     const mid = Math.floor((low + high) / 2) // 中间元素的下标 或者 low + (high - low) / 2
//     const element = this[mid]
//     if (element < item) { // 如果目标值大于中间元素，说明在右侧，移动最小下标到中间
//       low = mid + 1
//     } else if (element > item) {
//       high = mid - 1
//     } else {
//       return mid
//     }
//   }
//   return -1 // 没有找到返回 -1
// }

// const res = [1,2,3,4,5,6].binarySearch(9)
// console.log(res)


Array.prototype.binarySearch = function (item) {
  let low = 0
  let high = this.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (this[mid] > item) {
      high = mid - 1
    } else if (this[mid] < item) {
      low = mid + 1
    } else {
      // 重复元素第一次出现的下标
      // if ((mid == 0) || (this[mid - 1] != item)) return mid
      // 重复元素最后一次出现的下标
      if ((mid == this.length - 1) || (this[mid + 1] != item)) return mid
      else high = mid - 1
    }
  }
  return -1
}
console.log(res = [1,2,3,4,5,5,6].binarySearch(5))