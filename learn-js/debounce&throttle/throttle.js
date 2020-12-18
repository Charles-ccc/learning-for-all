function throttle (fn) {
  let isRun = true  // 通过闭包保存一个标记
  return function () {
    if (!isRun) return
    isRun = false
    setTimeout(() => {
      fn.apply(this, arguments)
      isRun = true
    }, 1000)
  }
}

function sayHi(e) {
  console.log(e.target.innerWidth, e.target.innerHeight);
}

window.addEventListener('resize', throttle(sayHi))
