/** 输入有序的数组，返回两个数，使得它们的和等于目标值 */

/** 
 * 输入：numbers = [2, 7, 11, 15], target = 9
 * 输出：[1, 2]
 * 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 */

var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1
    while (true) {
      let sum = numbers[left] + numbers[right]
      if (sum === target) {
        return [left + 1, right + 1]
      }
      sum > target ? right-- : left++
    }
};

