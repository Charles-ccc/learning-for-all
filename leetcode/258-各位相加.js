/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function(num) {
  while (num > 9) {
    num = (num + '').split('').reduce((p, i) => Number(p) + Number(i))
  }
  return num
};

// 数学解法
// var addDigits = function(num) {
//   if (num < 10) return num
//   return num % 9 || 9
// };

/** 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
 *  例如 38，3 + 8 = 11， 1 + 1 = 2
 */