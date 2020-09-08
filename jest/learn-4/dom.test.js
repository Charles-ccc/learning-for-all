import $ from 'jquery'
import addDivToBody from './dom.js'

test('测试 addDivToBody', () => {
  addDivToBody()
  addDivToBody()
  expect($('body').find('div').length).toBe(2)
})

// node 不具备 dom
// jest 在 node 环境下模拟了一套 dom-api。jsdom