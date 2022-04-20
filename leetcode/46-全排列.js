/**
 * @param {number[]} nums
 * @return {number[][]}
 * 递归模拟出所有的情况
 * 遇到包含重复元素的情况，就回溯
 * 收集所有达到递归终点，并返回
 */
var permute = function(nums) {
  const res = []
  const backtrack = (path) => {
    if (path.length === nums.length) {
      res.push(path)
      return
    }
    nums.forEach(n => {
      if (path.includes(n)) return
      backtrack(path.concat(n))
    })
  }
  return res
};