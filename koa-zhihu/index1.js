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

app.listen(3000)