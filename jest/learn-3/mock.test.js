// 找到 ./__mocks__/mock.js 的内容来替换真正的mock
jest.mock('./mock')
import {fetchData} from './mock' // from ./__mocks__/mock.js
// 如何分开处理异步和同步函数？异步使用mock替换，同步使用原始函数
const { getNumber } = jest.requireActual('./mock')
// import axios from 'axios'
// jest.mock('axios')

test('测试 fetchData', () => {
  // axios.get.mockResolvedValue({
  //   data: "(function(){return '123'})()"
  // })
  return fetchData().then(data => {
    expect(eval(data)).toEqual('123')
  })
})

test('测试 getNumber', () => {
  expect(getNumber()).toEqual(12345)
})