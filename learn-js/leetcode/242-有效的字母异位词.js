/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 字母出现的次数相等的两个词，就是异位词
const isAnagram = function(s, t) {
  // return s.split().sort().join() === t.split().sort().join()
  if (s.length !== t.length) return false
  for (let char of s) {
    if (t.indexOf(char) !== -1) {
      const index = t.indexOf(char)
      // remove index
      t = t.slice(0, index) + t.slice(index + 1)
    }
  }
  if (t) return false
  return true
};