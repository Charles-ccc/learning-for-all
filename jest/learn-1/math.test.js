function expect (result) {
  return {
    toBe: function (actual) {
      if (result !== actual) {
        throw new Error(`预期值${actual}与实际值${result}不相等`)
      }
    }
  }
}

function test (desc, fn) {
  try {
    fn()
    console.log(`${desc} 通过测试`)
  } catch (e) {
    console.log(`${desc} 没有通过测试, ${e}`)
  }
}

test('测试加法 3 + 7', () => {
  expect(add(3, 7)).toBe(10)
})

test('测试减法 5 - 5', () => {
  expect(add(5, 5)).toBe(0)
})