const Router = require('koa-router')
const router = new Router()
const { index } = require('../controllers/home')

// 注入控制器
router.get('/', index)

module.exports = router