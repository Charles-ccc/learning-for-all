var reverse = function(x) {
  let toArray = String(Math.abs(x)).split("")
  let result = ''
  for (let i=0; i<toArray.length;) {
    result += toArray.pop()
  }
  result = x > 0 ? Number(result) : -Number(result)
  if (result > Math.pow(2,31)-1 || result < -Math.pow(2,31)) {
    result = 0
  }
  return result
};

console.log(reverse(-12345))