const Koa = require('koa')
const BodyParser = require('koa-bodyparser')
const app = new Koa()
const routing = require('./routes')

app.use(BodyParser()) // 解析请求体
routing(app)

app.listen(3000, () => console.log('程序启动在 3000 端口'))