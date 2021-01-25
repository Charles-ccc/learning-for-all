/** 二分查找
 *  需对数组排序
 *  时间复杂度 O(logN)
 */
Array.prototype.binarySearch = function (item) {
  let low = 0
  let high = this.length - 1 
  while(low <= high) {
    const mid = Math.floor((low + high) / 2)
    const element = this[mid]
    if (element < item) {
      low = mid + 1
    } else if (element > item) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

const res = [1,2,3,4,5,6].binarySearch(9)
console.log(res)