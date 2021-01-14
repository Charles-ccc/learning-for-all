/** 冒泡排序 */
// function bubbleSort (arr) {
//   for (let i=0; i<arr.length-1; i++) {
//     for (let j=0; j<arr.length-1-i; j++) {
//       if (arr[j] > arr[j+1]) {
//         const t = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = t
//       }
//     }
//   }
//   return arr
// }
// bubbleSort([9,8,7,6,5,4,3,2,1])
Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i ++) {
    for (let j = 0; j < this.length -1 - i; j ++) {
      if (this[j] > this[j + 1]) {
        const temp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = temp
      }
    }
  }
  return this
}

const arr = [9,8,7,6,5,4,3,2,1]
console.log(arr.bubbleSort())
