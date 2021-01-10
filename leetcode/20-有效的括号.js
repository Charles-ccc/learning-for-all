/**
 * @param {string} s
 * @return {boolean}
 */
// 栈
// const isValid = function(s) {
//   if (s.length % 2 === 1) { return false }
//   const stack = []
//   for (let i = 0; i < s.length; i++) {
//     const c = s[i]
//     if (c === '(' || c === '{' || c === '[') {
//       stack.push(c)
//     } else {
//       const t = stack[stack.length - 1]
//       if (
//         (t === '(' && c === ')') ||
//         (t === '{' && c === '}') ||
//         (t === '[' && c === ']')
//       ) {
//         stack.pop()
//       } else {
//         return false
//       }
//     }
//   }
//   return stack.length === 0
// }

const isValid = function(s) {
  if (s.length % 2 === 1) { return false }
  const stack = []
  const map = new Map()
  map.set('(', ')')
  map.set('[', ']')
  map.set('{', '}')

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (map.has(c)) {
      stack.push(c)
    } else {
      const t = stack[stack.length - 1]
      if (map.get(t) === c) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

console.log(isValid('()'))