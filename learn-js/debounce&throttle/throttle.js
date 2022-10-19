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

const throttle2 = (fn, wait=100) => {
  let lastTime = 0
  return function (..args) {
    let now = +new Date()
    if (now - lastTime > wait) {
      lastTime = now
      fn.apply(this, args)
    }
  }
}