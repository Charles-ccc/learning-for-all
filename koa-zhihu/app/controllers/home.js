const path = require('path')

class HomeCtl {
  index(ctx) {
    ctx.body = '<h1>主页<h1>'
  }
  upload(ctx) {
    const file = ctx.request.files.file
    const basename = path.basename(file.path) // 获取文件名+后缀
    ctx.body = { url: `${ctx.origin}/uploads/${basename}` }
  }
}

module.exports = new HomeCtl()