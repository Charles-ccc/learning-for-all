/**
 * @param {number[]} digits
 * @return {number[]}
 * BigInt 是一种内置对象，它提供了一种方法来表示大于 253 - 1 的整数
 * BigInt 可以表示任意大的整数
 */
var plusOne = function(digits) {
  // 最简方案
  // return String(BigInt(digits.join('')) + 1n).split('')

  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++
    digits[i] = digits[i] % 10
    if (digits[i] > 0) {
      return digits
    }
  }

  return [1, ...digits]
}

console.log(plusOne([5,2,2,6,5,7,1,9,0,3,8,6,8,6,5,2,1,8,7,9,8,3,8,4,7,2,5,8,9]))