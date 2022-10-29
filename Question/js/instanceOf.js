const instanceOf1 = (A, B) => {
  let p = A.__proto__
  while (p) {
    if (p === B.prototype) {
      return true
    }
    p = p.__proto__
  }
  return false
}



const test = instanceOf1([], Array)