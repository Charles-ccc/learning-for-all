/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLocaleLowerCase()
  // const resever = s.split('').reverse().join('')
  // return s === resever
  for(let i=0; i<s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false
    }
  }
  return true
};