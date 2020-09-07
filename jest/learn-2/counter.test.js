import Counter from './counter'

describe('Counter 的测试代码', () => {
  let counter = null
  // 在所有测试用例执行之前，反之 afterAll
  // beforeAll(() => {
  //   counter =  new Counter() 
  // })

  // 在每一个测试用例之前执行，反之 afterEach
  beforeEach(() => {
    counter =  new Counter()
  })

  describe('测试加法', () => {
    // test.only 仅执行当前测试用例
    test('测试 addOne', () => {
      counter.addOne()
      expect(counter.number).toBe(1)
    })
  })
  describe('测试减法', () => {
    test('测试 minusOne', () => {
      counter.minusOne()
      expect(counter.number).toBe(-1)
    })
  })
})