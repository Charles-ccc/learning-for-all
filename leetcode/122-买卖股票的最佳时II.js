/**
 * @param {number[]} prices
 * @return {number}
 * 第二天才会有利润，所以利润序列比股票少一天
 * 把最终利润分解为每天的利润
 * 正利润区间就是股票买卖的区间
 * 局部最优：收集每天的正利润
 * 全局最优：求得最大利润
 */
var maxProfit = function(prices) {
  /** 贪心算法 */
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    // if (prices[i] > prices[i - 1]) {
    //   profit += prices[i] - prices[i - 1]
    // }
    profit += Math.max(prices[i] - prices[i - 1], 0)
  }
  return profit
};

/**
1、price  > buy
说明此时股票的价格大于等于买入的价格，就卖股票，将这个差值加入到money总收入中

2、prices <= buy
什么都不做
*/