// 内存数据库
const db = [{name: '德里克'}, {name: '科比'}]

class UsersCtl {
  find (ctx) {
    a.b
    ctx.body = db
  }

  findById (ctx) {
    if (ctx.params.id * 1 >= db.length) {
      // ctx.throw(412)
      ctx.throw(412, '先决条件失败：id 大于等于数组长度了')
    }
    ctx.body = db[ctx.params.id * 1]
  }
  
  create (ctx) {
    // 参数校验
    ctx.verifyParams({
      name: {type: 'string', required: true},
      age: {type: 'number', required: false}
    })
    db.push(ctx.request.body)
    ctx.body = ctx.request.body
  }

  update (ctx) {
    ctx.verifyParams({
      name: {type: 'string', required: true},
      age: {type: 'number', required: false}
    })
    if (ctx.params.id * 1 >= db.length) {
      ctx.throw(412, '先决条件失败：id 大于等于数组长度了')
    }
    db[ctx.params.id * 1] = ctx.request.body
    ctx.body = ctx.request.body
  }

  delete (ctx) {
    if (ctx.params.id * 1 >= db.length) {
      ctx.throw(412, '先决条件失败：id 大于等于数组长度了')
    }
    db.splice(ctx.params.id * 1, 1)
    ctx.status = 204
  } 
}

module.exports = new UsersCtl