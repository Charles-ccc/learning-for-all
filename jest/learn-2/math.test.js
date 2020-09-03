const math = require('./math')
import { add, minus } from './math'

test('测试加法 3 + 7', () => {
  expect(add(3, 7)).toBe(10)
})

test('测试减法 5 - 5', () => {
  expect(minus(5, 5)).toBe(0)
})