/** defineProperty 版本的双向绑定 */

const data = { text: 'default' }
const input = document.getElementById('input')
const span = document.getElementById('span')

Object.defineProperty(data, 'text', {
  // 数据变化 修改视图
  set(newVal) {
    input.value = newVal
    span.innerHTML = newVal
  }
})

input.addEventListener('keyup', function(e) {
  data.text = e.target.value
})