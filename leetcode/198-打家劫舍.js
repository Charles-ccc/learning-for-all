/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0
  // 记录每个房屋打劫到的最大金额
  // const dp = [0, nums[0]]
  let dp0 = 0
  let dp1 = nums[0]
  for (let i = 2; i <= nums.length; i++) {
    // 第 i 个房间的金额，需要取 nums[i - 1]
    // dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
    const dp2 = Math.max(dp0 + nums[i - 1], dp1)
    dp0 = dp1
    dp1 = dp2
  }
  // return dp[nums.length]
  return dp1
};

rob([2,7,9,3,1])