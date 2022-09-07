/**
 * @param {number[]} nums
 * @return {number[]}
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序
 */
var sortedSquares = function(nums) {
  const n = nums.length
  // 新建一个与nums长度相同的数组
  let res = new Array(n).fill(0)
  // 新建双指针
  let l = 0
  let r = n - 1
  let k = n - 1
  while (l <= r) {
    let left = nums[l] * nums[l]
    let right = nums[r] * nums[r]
    // 如果1指针小于2指针的指向
    if (left < right) {
      res[k] = right
      k--
      r--
    } else {
      res[k] = left
      k--
      l++
    }
    console.log(res)
  }
  return res
};
sortedSquares([-4,-1,0,3,10])