/**
 * @param {number[]} nums
 * @return {boolean}
 */
/** 通过索引判断，主要在于 indexOf */
// const containsDuplicate = function(nums) {
//   for(let i = 0; i < nums.length; i++) {
//     if (nums.indexOf(nums[i]) < i) return true
//   }
//   return false;
// };

/** 先给排序，然后再判断相邻有无相同 */
// const containsDuplicate = function(nums) {
//   nums.sort()
//   for (let i=0; i<nums.length; i++) {
//     if (nums[i] === nums[i+1]) {
//       return true
//     }
//   }
//   return false
// };

/** 通过Set() ，遍历原数组*/
const containsDuplicate = function(nums) {
  let _newSetArr = new Set()
  for (let item of nums) {
    if (_newSetArr.has(item)) {
      return true
    } else {
      _newSetArr.add(item)
    }
  }
  return false
};

console.log(containsDuplicate([1,3,2,5,4]))