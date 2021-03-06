/** 插入排序 */
// function insertSort (arr) {
//   const length = arr.length
//   for (let i=1; i<length; i++) { // 默认 [0]已经排序
//     let j = i
//     let target = arr[i]
//     while (j>0 && arr[j-1] > target) {
//       arr[j] = arr[j-1]
//       j --
//     }
//     arr[j] = target
//   }
//   return arr
// }

// console.log(insertSort([9,8,7,6,5,4,3,2,1]))

Array.prototype.insertSort = function () {
  for (let i = 1; i < this.length; i ++) {
    const temp = this[i]
    let j = i
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1]
      } else {
        break
      }
      j --
    }
    this[j] = temp
  }
}

const arr = [2,1,5,4,3]
arr.insertSort()