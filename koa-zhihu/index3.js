const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router.get('/', (ctx) => {
  ctx.body = '主页'
})
router.get('/users', (ctx) => {
  ctx.body = '用户列表页'
})
router.post('/users', (ctx) => {
  ctx.body = '新建/编辑用户'
})
router.get('/users/:id', (ctx) => {
  ctx.body = `用户ID ${ctx.params.id}`
})

app.use(router.routes())

app.listen(3000)