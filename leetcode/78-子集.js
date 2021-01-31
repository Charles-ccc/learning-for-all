/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = []
  const backtrack = (path, l, start) => {
    if (path.length === l) {
      nums.push(path)
      return
    }
    for (let i = start; i < nums.length; i ++) {
      backtrack(path.concat(nums[i]), l, i + 1)
    }
  }
  for (let i = 0; i <= nums.length; i++) {
    backtrack([], i, 0)
  }
  return res
}