/**
 * 孩子数组
 * @param {number[]} g
 * 饼干
 * @param {number[]} s
 * 满足多少个孩子
 * @return {number}
 */
/** 贪心算法 局部最优 */
var findContentChildren = function(g, s) {
  // 对孩子和饼干的数组进行升序排列
  const sortFunc = (a,b) => a - b
  g.sort(sortFunc)
  s.sort(sortFunc)

  let i = 0
  // 遍历找到能满足第n个孩子的饼干
  s.forEach(n => {
    if (n >= g[i]) { // 能满足
      i ++
    }
  })
  return i
};