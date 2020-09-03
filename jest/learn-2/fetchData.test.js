import { fetchData } from './fetchData'

// 回调函数的异步测试
// test('fetchData 返回 {success: true}', done => {
//   fetchData(data => {
//     try {
//       expect(data).toEqual({
//         success: true
//       })
//       done ()
//     } catch (e) {
//       done(e)
//     }
//   })
// })

// 直接返回 promise 的异步测试，注意需要 return
// test('fetchData 返回 {success: true}', () => {
//   return fetchData().then(res => {
//     expect(res.data).toEqual({
//       success: true
//     })
//   })
// })

// test('fetchData 返回 404', () => {
//   // 确保 expect 执行传入的次数
//   expect.assertions(1)
//   return fetchData().catch(e => {
//     expect(e.toString().indexOf('404') > -1).toBe(true)
//   })
// })

// test('fetchData 返回 {success: true}', () => {
//   return expect(fetchData()).resolves.toMatchObject({
//     data: {
//       success: true
//     }
//   })
// })

// test('fetchData 返回 404', () => {
//   return expect(fetchData()).rejects.toThrow()
// })

test('fetchData 返回 {success: true}', async () => {
  const res = await fetchData()
  expect(res.data).toEqual({
    success: true
  })
  // await expect(fetchData()).resolves.toMatchObject({
  //   data: {
  //     success: true
  //   }
  // })
})

// test('fetchData 返回 404', async () => {
//   expect.assertions(1)
//   try {
//     await fetchData()
//   } catch (e) {
//     expect(e.toString()).toEqual('Error: Request failed with status code 404')
//   }
//   // await expect(fetchData()).rejects.toThrow()
// })