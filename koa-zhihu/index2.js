const koa = require('koa')
const app = new koa()

app.use(async (ctx) => {
  if (ctx.url === '/') {
    ctx.body = '主页'
  } else if (ctx.url === '/users') {
    if (ctx.method === 'GET') {
      ctx.body = '用户列表页'
    } else if (ctx.method === 'POST') {
      ctx.body = '新建编辑'
    } else {
      ctx.status = 405
    }
  } else if (ctx.url.match(/\/users\/\w+/)) {
    const userId = ctx.url.match(/\/users\/(\w+)/)[1]
    ctx.body = `用户ID - ${userId}`
  }else {
    ctx.status = 404
  }
})

app.listen(3000)