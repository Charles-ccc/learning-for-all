/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return ''
  }
  let minStrLen = strs[0].length
  let minStrIndex = 0
  for (let i=0; i<strs.length; i++) {
    if (strs[i].length < minStrLen) {
      minStrLen = strs[i].length
      minStrIndex = i
    }
  }
  let result = []
  for (let i=0; i<minStrLen; i++) {
    for (let k=0; k<strs.length; k++) {
      if (strs[minStrIndex][i] !== strs[k][i]) {
        return result.join('')
      }
      if (k === strs.length - 1) {
        result[i] = strs[minStrIndex][i]
      }
    }
  }
  return result.join('')
}

console.log(longestCommonPrefix(["flower","flow","flight"]))