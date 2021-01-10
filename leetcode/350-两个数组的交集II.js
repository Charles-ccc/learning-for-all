/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const newArr = []
  for (let i=0; i<nums1.length; i++) {
    const index = nums2.indexOf(nums1[i])
    if (index > -1) {
      newArr.push(nums1[i])
      nums2.splice(index, 1)
    }
  }
  return newArr
  // return nums1.filter(n => new Set(nums2).has(n))
};

console.log(intersect([1,2,2,1], [2,2]))