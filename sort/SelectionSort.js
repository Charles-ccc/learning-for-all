/** 选择排序 */
// function selectionSort (arr) {
//   const length = arr.length
//   let indexMin
//   for (var i=0; i<length-1; i++) {
//     indexMin = i
//     for (var j=i; j<length; j++) {
//       if (arr[indexMin] > arr[j]) {
//         indexMin = j
//       }
//     }
//     if (i !== indexMin) {
//       [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
//     }
//   }
//   return arr
// }

// console.log(selectionSort([9,8,7,6,5,4,3,2,1]))

Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length - 1; i ++) {
    let indexMix = i // 假设最小值是第一个元素，i 代表第几个元素开始
    for (let j = i; j < this.length; j ++) { // 循环一轮找到最小元素
      if (this[j] < this[indexMix]) { 
        indexMix = j
      }
    }
    if (indexMix !== i) { // 不需要自己跟自己交换
      const temp = this[i] // 与最小元素位置做交换
      this[i] = this[indexMix]
      this[indexMix] = temp
    }
  }
}

const arr = [2,1,5,4,3]
arr.selectionSort()