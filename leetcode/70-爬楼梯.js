/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 动态规划
  // 斐波那契 F(n) = F(n - 1) + F(n - 2)
  if (n < 2) return 1
  // dp 内的 item 代表方法数量，index 代表n
  // const dp = [1, 1]
  let dp0 = 1
  let dp1 = 1
  for (let i = 2; i <= n; i ++) {
    // dp[i] = dp[i - 1] + dp[i - 2]
    const temp = dp0
    dp0 = dp1
    dp1 = dp1 + temp
  }
  
  // return dp[n]
  return dp1
};

climbStairs(6)