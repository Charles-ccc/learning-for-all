jest.mock('./util')
// 支持自定义写法，也可以在 __mocks__ 目录下处理
// jest.mock('./util', () => {
//   const Util = jest.fn()
//   Util.prototype.a = jest.fn(() => {
//     console.log('aaa')
//   })
//   Util.prototype.b = jest.fn(() => {
//     console.log('bbb')
//   })
//   return Util
// })

// jest.mock 发现 util 是一个类，会自动把类的构造函数和方法变成 jest.fn()
// const Util = jest.fn()
// Util.a = jest.fn()
// Util.b = jest.fn()
import Util from './util'
import classFunction from './class'

test('测试 classFunction', () => {
  classFunction()
  expect(Util).toHaveBeenCalled()
  // console.log(Util.mock)
  expect(Util.mock.instances[0].a).toHaveBeenCalled()
  expect(Util.mock.instances[0].b).toHaveBeenCalled()
})
