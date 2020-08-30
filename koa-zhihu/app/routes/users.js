// const JsonWebToken = require('jsonwebtoken')
const JWT = require('koa-jwt')
const Router = require('koa-router')
const router = new Router({prefix: '/users'})
const { find, findById, update, create, delete: del, login, checkOwner } = require('../controllers/users')
const { secret } = require('../config.js')

// 认证
const auth = JWT({ secret })
// const auth = async (ctx, next) => {
//   const  { authorization = '' } = ctx.request.header
//   const token = authorization.replace('Bearer ', '')
//   try {
//     const user = JsonWebToken.verify(token, secret)
//     // state通常用来存放用户信息
//     ctx.state.user = user
//   } catch (err) {
//     ctx.throw(401, err.message)
//   }
//   await next()
// }

// 注入控制器
router.get('/', find)
router.post('/', create)
router.get('/:id', findById)
router.patch('/:id', auth, checkOwner, update)
router.delete('/:id', auth,checkOwner, del)
router.post('/login', login)

module.exports = router