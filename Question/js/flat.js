/** 拍平数组 */
// [1, [2, [3, [4, 5]]], 6];

function flat(arr) {
  return arr.flat(Infinity)
}

function flat2(arr) {
  let str = JSON.stringify(arr)
  return str.replace(/(\[|\])/g, '').split(',')
  // 或者 return JSON.parse('[' + str + ']')
}

function flat3(arr) {
  let res = []
  for(let i=0; i<arr.length;i++) {
    let item = arr[i]
    if (Array.isArray(item)) {
      flat3(item)
      // res = res.concat(flat3(item))
      // res.push(...flat3(item))
    } else {
      res.push(item)
    }
  }
}

function flat4(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat4(cur) : cur)
  }, [])
}