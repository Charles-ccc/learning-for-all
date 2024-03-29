/** proxy 版本的双向绑定 */
const data = { text: 'default' }
const input = document.getElementById('input')
const span = document.getElementById('span')

// 数据劫持
const handler = {
  set(target, key, value) {
    target[key] = value
    // 数据变化 修改视图
    input.value = value
    span.innerHTML = value
    return value
  }
}
const proxy = new Proxy(data, handler)

input.addEventListener('keyup', function(e) {
  proxy.text = e.target.value
})