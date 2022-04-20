/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // 存当前对大值
  let result = -Infinity
  // 充当指针
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    count = count + nums[i]
    if (count > result) result = count
    // count为负数，就将头部指针移动当前位置nums[i]
    if (count < 0) count = 0
  }
  return result
};