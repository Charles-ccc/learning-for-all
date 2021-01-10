/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 集合
var intersection = function(nums1, nums2) {
  return [...new Set(nums1)].filter(n => nums2.includes(n))
};

// 字典
var intersection = function(nums1, nums2) {
  const map = new Map()
  nums1.forEach(n => {
    map.set(n, true)
  })
  const res = []
  nums2.forEach(n => {
    if (map.get(n)){
      res.push(n)
      map.delete(n)
    }
  })
  return res
};
