const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const usersRouter = new Router({prefix: '/users'})

const auth = async (ctx, next) => {
  if (ctx.url !== '/users') {
    ctx.throw(401)
  }
  await next()
}

router.get('/', (ctx) => {
  ctx.body = '主页'
})
usersRouter.get('/', auth, (ctx) => {
  ctx.body = '用户列表页'
})
usersRouter.post('/', auth, (ctx) => {
  ctx.body = '新建/编辑用户'
})
usersRouter.get('/:id', auth, (ctx) => {
  ctx.body = `用户ID ${ctx.params.id}`
})

app.use(router.routes())
app.use(usersRouter.routes())

app.listen(3000)