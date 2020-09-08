import timer from './timer'

// 多个timer测试可能会互相影响，使用beforeEach
beforeEach(() => {
  jest.useFakeTimers()
})

test('测试 timer', () => {
  const fn = jest.fn()
  timer(fn)
  // jest.runAllTimers()
  // jest.runOnlyPendingTimer() // 只执行处于队列中的timer
  jest.advanceTimersByTime(6000) // 选择快进的时间
  expect(setTimeout).toHaveBeenCalledTimes(2)
})