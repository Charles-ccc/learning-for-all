const Router = require('koa-router')
const router = new Router({prefix: '/users'})
const { find, findById, update, create, delete: del } = require('../controllers/users')

// 注入控制器
router.get('/', find)
router.post('/', create)
router.get('/:id', findById)
router.put('/:id', update)
router.delete('/:id', del)

module.exports = router