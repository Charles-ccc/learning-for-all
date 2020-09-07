import { runCallback, createObject, getData } from './demo'
import axios from 'axios'
jest.mock('axios') // 自动模拟 axios模块，不调用真实api

/**
  1. 捕获函数的调用和返回结果，以及this和调用顺序
  2. 自由的设置返回结果
  3. 改变函数的内部实现
 */

// test('测试 runCallback', () => {
//   const func = jest.fn()  // mock函数，捕获函数的调用
//   runCallback(func)
//   expect(func).toBeCalled()
// })

// 多次调用
test('测试 runCallback', () => {
  // mockImplementation
  const func = jest.fn()
  // mockReturnValueOnce
  func.mockReturnValue('设置返回值')
  func.mockImplementation(() => {
    return this
  })
  runCallback(func)
  runCallback(func)
  expect(func.mock.calls.length).toBe(2)
  expect(func.mock.results[0].value).toBeUndefined()
  console.log(func.mock)
})

test('测试 createObject', () => {
  const func = jest.fn()
  createObject(func)
  console.log(func.mock)
})

test.only('测试 getData', async () => {
  // mock 接口返回的数据
  axios.get.mockResolvedValue({data: 'hello'})
  await getData().then(data => {
    expect(data).toBe('hello')
  })
})