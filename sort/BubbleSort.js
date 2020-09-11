/** 冒泡排序 */
function bubbleSort (arr) {
  for (let i=0; i<arr.length-1; i++) {
    for (let j=0; j<arr.length-1-i; j++) {
      if (arr[j] > arr[j+1]) {
        t = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = t
      }
    }
  }
  return arr
}
console.log(bubbleSort([9,8,7,6,5,4,3,2,1]))