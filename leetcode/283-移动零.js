/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let count = []
  for (let i=0; i<nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      count.push(0)
      i--
    }
  }
  nums.push(...count)
  return nums
}

var moveZeroes = function(nums) {
  let i0 = 0
  for(let i=0; i<nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      j++
    }
  }

}
console.log(moveZeroes([0,1,0,3,12]))