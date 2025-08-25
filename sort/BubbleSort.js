/** 冒泡排序 */
function bubbleSort (arr) {
  if (!arr.length) return
  for (let i=0; i<arr.length-1; i++) {
    for (let j=0; j<arr.length-1-i; j++) {
      if (arr[j] > arr[j+1]) {
        const t = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = t
      }
    }
  }
  return arr
}
bubbleSort([9,8,7,6,5,4,3,2,1])

Array.prototype.bubbleSort = function () {
  if (!this.length) return
  for (let i = 0; i < this.length - 1; i ++) { 
    for (let j = 0; j < this.length -1 - i; j ++) { // - i是每轮结束后，排序区间会变小
      if (this[j] > this[j + 1]) {// 获取相邻元素
        const temp = this[j] // 交换相邻元素
        this[j] = this[j + 1]
        this[j + 1] = temp
      }
    }
  }
}

const arr = [9,8,7,6,5,4,3,2,1]
arr.bubbleSort()
