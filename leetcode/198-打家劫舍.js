/**
 * @param {number[]} nums
 * @return {number}
 * f(k) 从前k个房屋中能偷到的最大数额
 * Ak 第k个房屋的钱数
 * fk = max(f(k-2) + Ak, f(k-1))
 */
var rob = function(nums) {
  if (nums.length === 0) return 0
  // 记录前面房屋打劫到的最大金额 数组下标对应房屋金额
  // const dp = [0, nums[0]]
  let dp0 = 0
  let dp1 = nums[0]
  for (let i = 2; i <= nums.length; i++) {
    // 注意数组下标，第i个房间的金额，需要 nums[i - 1]
    // dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
    const dp2 = Math.max(dp0 + nums[i - 1], dp1)
    dp0 = dp1
    dp1 = dp2
  }
  // return dp[nums.length] 
  return dp1
};

rob([2,7,9,3,1])