/** 二分查找
 *  前提是需对数组排序
 *  时间复杂度 O(logN)
 */
Array.prototype.binarySearch = function (item) {
  this.sort()
  let low = 0 // 搜索的最小下标和最大下标
  let high = this.length - 1 
  while(low <= high) {
    const mid = Math.floor((low + high) / 2) // 中间元素的下标
    const element = this[mid]
    if (element < item) { // 如果目标值大于中间元素，说明在右侧，移动最小下标到中间
      low = mid + 1
    } else if (element > item) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1 // 没有找到返回 -1
}

const res = [1,2,3,4,5,6].binarySearch(9)
console.log(res)

