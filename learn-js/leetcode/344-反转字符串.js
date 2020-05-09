/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  if (!s) return
  for (let i=0; i<(s.length - 1) / 2; i++) {
    let temp = s[s.length - 1 - i]
    s[s.length - 1 - i] = s[i]
    s[i] = temp
  }
  return s
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o', 's']))