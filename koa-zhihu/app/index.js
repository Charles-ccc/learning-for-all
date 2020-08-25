const Koa = require('koa')
const BodyParser = require('koa-bodyparser') // 解析请求体
const Error = require('koa-json-error') // 错误处理中间件
const Parameter = require('koa-parameter')
const app = new Koa()
const routing = require('./routes')

// 自定义错误处理中间件
// app.use(async (ctx, next) => {
//   try {
//     await next()
//   } catch (err) {
//     // 无法捕捉 404 错误
//     const { status, statusCode, message } = err
//     ctx.status = status || statusCode || 500
//     ctx.body = {
//       message
//     }
//   }
// })

app.use(Error({
  postFormat: (e, {stack, ...rest}) => {
    // 生产环境则不返回错误的堆栈信息
    return process.env.NODE_ENV === 'production' ? rest : {stack, ...rest}
  }
}))
app.use(BodyParser())
app.use(Parameter(app))
routing(app)

app.listen(3000, () => console.log('程序启动在 3000 端口'))