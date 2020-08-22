const Koa = require('koa')
const BodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const usersRouter = new Router({prefix: '/users'})

router.get('/', (ctx) => {
  ctx.body = '主页'
})
usersRouter.get('/', (ctx) => {
  ctx.set('Allow', 'GET, POST') // 设置允许的请求方法
  ctx.body = [{name: '德里克'}, {name: '布莱恩特'}]
})
usersRouter.post('/', (ctx) => {
  ctx.body = {name: '詹姆斯'}
})
usersRouter.get('/:id', (ctx) => {
  ctx.body = {name: '罗斯'}
})
usersRouter.put('/:id', (ctx) => {
  ctx.body = {name: '勒布朗'}
})
usersRouter.delete('/:id', (ctx) => {
  ctx.status = 200
})

app.use(BodyParser()) // 解析请求体
app.use(router.routes())
app.use(usersRouter.routes())
app.use(usersRouter.allowedMethods())

app.listen(3000)