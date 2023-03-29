function debounce (fn, wait=100) {
  let timer = null
  return function () {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      // 箭头函数，this指向input；普通函数，this指向window
      fn.apply(this, arguments)
    }, wait)
  }
}

function sayHi() {
  console.log('防抖')
}

var inp = document.getElementById('inp')
inp.addEventListener('input', debounce(sayHi))
