/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 */
var removeElement = function(nums, val) {
  let k = 0
  for (let i=0; i<nums.length; i++) {
    if (nums[i] !== val) {
      nums[k++] = nums[i]
    }
  }
  return k
};