/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let ans = []
  let f = word1.length
  let s = word2.length
  for (let i=0; i < f || i < s; i++) {
    if (i < f) {
      ans.push(word1[i])
    }
    if (i < s) {
      ans.push(word2[i])
    }
  }
  return ans.join('')
};