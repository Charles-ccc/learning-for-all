/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const res = []
    const n = nums.length
    // 可以想象成 i = j + k
    for (let i = 0; i < n - 2; i++) {
      const x = nums[i]
      // 跳过重复的数字
      if (i > 0 && x === nums[i - 1]) continue
      // 如果最小的三个数都大于0，则无解
      if (x + nums[i + 1] + nums[i + 2] > 0) break
      // 如果最大的三个数都小于0，往后才可能有解
      if (x + nums[n - 1] + nums[n - 2] < 0) continue
      // 双指针 设置一头一尾
      let j = i + 1, k = n - 1
      while (j < k) {
        const sum = x + nums[j] + nums[k]
        if (sum > 0) {
          k--
        } else if (sum < 0) {
          j++
        } else {
          res.push([x, nums[j], nums[k]])
          // 跳过j和k的重复数字
         for (j++; j < k && nums[j] === nums[j - 1]; j++);
          for (k--; k > j && nums[k] === nums[k + 1]; k--);
        }
      }
    }
    return res
};
