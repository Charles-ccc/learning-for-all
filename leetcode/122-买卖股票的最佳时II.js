/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // let money = 0
  // let buy = prices[0]
  // for (let p of prices) {
  //   if (p > buy) {
  //     money += p - buy 
  //   }
  //   buy = p
  // }
  // return money

  /** 贪心算法 */
  let profit = 0
  for (let i = 0; i < prices.length; i ++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1]
    }
  }
  return profit
};

/**
1、price  > buy
说明此时股票的价格大于等于买入的价格，就卖股票，将这个差值加入到money总收入中

2、prices <= buy
什么都不做
*/