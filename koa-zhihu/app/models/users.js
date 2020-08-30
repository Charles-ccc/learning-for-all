const Mongoose = require('mongoose')

const { Schema, model } = Mongoose

// 使用Schema构造器创建一个新的模式实例
// user的json结构
const userSchema = new Schema({
  // 模式的字段类型和声明方式，还可包括内置验证器
  __v: {type: Number, select: false},
  name: {type: String, required: true},
  password: {type: String, required: true, select: false}
})

// 创建模型
// (集合名称，user的json结构)
module.exports = model('User', userSchema)