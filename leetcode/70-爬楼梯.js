/**
 * @param {number} n
 * @return {number}
 * 用数组时间空间 O(n)
 * 用变量 O(1)
 */
var climbStairs = function(n) {
  // 动态规划
  // 斐波那契 F(n) = F(n - 1) + F(n - 2)
  if (n < 2) return 1
  // dp的item代表方法数量，index代表n，n是台阶数量
  const dp = [1, 1]
  // let dp0 = 1
  // let dp1 = 1
  for (let i = 2; i <= n; i ++) {
    dp[i] = dp[i - 1] + dp[i - 2]
    // const temp = dp0
    // dp0 = dp1
    // dp1 = dp1 + temp
    
  }
  // 取数组最后一位，就是最大数量
  return dp[n]
  // return dp1
};

console.log(climbStairs(3))