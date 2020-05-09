/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i=0; i<nums.length; i++) {
    for (let k=i+1; k<nums.length; k++) {
      if (nums[k] === target - nums[i]) {
        return [i, k]
      }
    }
  }
}
console.log(twoSum([2,3,4,5,6], 9))