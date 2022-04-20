/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
  // let dp = [0, 1]
  let dp0 = 0
  let dp1 = 1
  for(let i = 2; i <= n; i++) {
    // dp[i] = dp[i - 1] + dp[i - 2]
      let temp = dp0
      dp0 = dp1
      dp1 = dp1+ temp
  }
  // return dp[n]
  return dp1
};

console.log(fib(4)) // 3