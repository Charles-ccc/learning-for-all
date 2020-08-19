const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const usersRouter = new Router({prefix: '/users'})

router.get('/', (ctx) => {
  ctx.body = '主页'
})
usersRouter.get('/', (ctx) => {
  ctx.body = [{name: 'Derrick'}, {name: 'Bryant'}]
})
usersRouter.post('/', (ctx) => {
  ctx.body = {name: 'James'}
})
usersRouter.get('/:id', (ctx) => {
  ctx.body = {name: 'James'}
})
usersRouter.put('/:id', (ctx) => {
  ctx.body = {name: 'LeBron'}
})
usersRouter.delete('/:id', (ctx) => {
  ctx.status = 200
})

app.use(router.routes())
app.use(usersRouter.routes())
app.use(usersRouter.allowedMethods())

app.listen(3000)