const koa = require('koa')
const app = new koa()

app.use(async (ctx, next) => {
  console.log(1)
  await next()
  console.log(2)
  ctx.body = 'hello restful api'
   
})
app.use(async (ctx, next) => {
  console.log(3)
  await next()
  console.log(4)
})
app.use(async (ctx) => {
  console.log(5)
})
// 洋葱模型，打印 1 3 5 4 2
// 当一个中间件调用 next() 则该函数暂停并将控制传递给定义的下一个中间件。当在下游没有更多的中间件执行后，堆栈将展开并且每个中间件恢复执行其上游行为。
app.listen(3000)