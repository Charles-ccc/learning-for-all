/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  if (!s) return 0
  s = s.trim().split(' ')
  return s[s.length - 1].length
};

console.log(lengthOfLastWord('a'))