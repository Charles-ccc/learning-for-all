/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  const n = nums.length
  // let l = r = sum = 0
  // // +1 方便后面取最小值
  // let res = n + 1
  // while(r < n) {
  //   sum += nums[r]
  //   r++
  //   while(sum >= target) {
  //     res = res < r - l ? res : r - l
  //     sum-=nums[l]
  //     l++
  //   }
  // }

  let left = 0
  // 数组元素和
  let s = 0
  let ans = n + 1
  for (let right = 0;right < n; right++) {

  }

  return res > n ? 0 : res
};

console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]))