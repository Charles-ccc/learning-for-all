// var isPalindrome = function(x) {
//   let xCopy = x
//   let xArr = String(Math.abs(xCopy)).split('')
//   let result = ''
//   for (let i=0; i<xArr.length;) {
//     result += xArr.pop()
//   }
//   if (x >= 0) {
//     result = Number(result)
//   } else {
//     return false
//   }
//   return result === x
// };
var isPalindrome = function(x) {
  const arr = String(x).split('');
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - (i + 1)]) {
      return false
    }
  }
  return true
};
console.log(isPalindrome(121))