/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  if (!s.length) return
  return s.split(' ').map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
};