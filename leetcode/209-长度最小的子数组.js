/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  const n = nums.length
  let l = r = sum = 0
  // +1 为了后面判断
  let res = n + 1
  while(r < n) {
    sum += nums[r]
    r++
    while(sum >= target) {
      res = res < r - l ? res : r - l
      sum-=nums[l]
      l++
    }
  }

  return res > n ? 0 : res
};

console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]))