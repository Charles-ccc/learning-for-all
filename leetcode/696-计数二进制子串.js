/**
 * @param {string} s
 * @return {number}
 * 起始指针每次右移一位，并在s.length前截止
 * 给一个输入，就返回第一个返回条件的子串
 */
var countBinarySubstrings = function(s) {
  // 建立数据结构 堆栈，保存数据
  const r = []
  // 传入一个任意子串（实际上是每次会指针右移一位）
  // 返回第一个匹配的
  const match = (s) => {
    // 匹配第一个连续相连的串
    const j = s.match(/^(0+|1+)/)[0]
    // 取与j对应的子串，比如 0，j就是1，比如 11，j就是00
    const o = (j[0] ^ 1).toString().repeat(j.length)
    const reg = new RegExp(`^(${j}${o})`)
    if (reg.test(s)) {
      return RegExp.$1
    } else {
      return ''
    }

  }

  for (let i = 0; i < s.length - 1; i++) {
    const sub = match(s.slice(i))
    if (sub) {
      r.push(sub)
    }
  }

  return r.length
};