/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // for (let i=0; i<nums.length; i++) {
  //   for (let k=i+1; k<nums.length; k++) {
  //     if (nums[k] === target - nums[i]) {
  //       return [i, k]
  //     }
  //   } 
  // }
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const n1 = nums[i]
    const n2 = target - n1
    if (map.has(n2)) {
      return [map.get(n2), i]
    } else {
      map.set(n1, i)
    }
  }
}

console.log(twoSum([2,3,4,5,6], 9))