const Koa = require('koa')
// const BodyParser = require('koa-bodyparser') // 解析请求体
const KoaBody = require('koa-body')
const Error = require('koa-json-error') // 错误处理中间件
const Parameter = require('koa-parameter') // 参数校验
const Mongoose = require('mongoose')
const path = require('path')
const app = new Koa()
const routing = require('./routes')
const { connectionStr } = require('./config')

Mongoose.connect(connectionStr, { useUnifiedTopology: true }, () => {
  console.log('MongoDB 连接成功')
})
Mongoose.connection.on('error', console.error)

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
// app.use(BodyParser())
app.use(KoaBody({
  multipart: true, // 支持文件格式
  formidable: {
    uploadDir: path.join(__dirname, '/public/uploads'), // 设置文件上传目录
    keepExtensions: true // 保留文件拓展名
  }
}))
app.use(Parameter(app))
routing(app)

app.listen(3000, () => console.log('程序启动在 3000 端口'))