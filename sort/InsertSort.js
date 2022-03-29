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
  for (let i = 1; i < this.length; i ++) { // 从第二个数往前比
    const temp = this[i]
    let j = i
    while (j > 0) {
      if (this[j - 1] > temp) { // 第二个数和前面的比
        this[j] = this[j - 1]
      } else {
        break
      }
      j -- // 循环内 j 递减
    }
    this[j] = temp // 要插入的位置
  }
}

const arr = [2,1,5,4,3]
arr.insertSort()