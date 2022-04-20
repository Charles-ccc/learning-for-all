/**
 * @param {number[]} cost
 * @return {number}
 * 第一步必须花费
 * 当前一步都要花费，所以均 + cost[i]
 * 最后一步不用花费，所以取数组最后两位最小值
 */
 var minCostClimbingStairs = function(cost) {
  // const dp = [cost[0], cost[1]]
  // for (let i = 2; i < cost.length; i++) {
  //   dp[i] = Math.min(dp[i-1] + cost[i], dp[i-2] + cost[i])
  //   console.log(dp[i])
  // }
  
  // return Math.min(dp[cost.length-1], dp[cost.length-2])
  let dp0 = cost[0]
  let dp1 = cost[1]
  for (let i=2; i<cost.length; i++) {
    let temp = Math.min(dp0 + cost[i], dp1 + cost[i])
    dp0 = dp1
    dp1 = temp
  }
  return Math.min(dp0, dp1)
};
minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])