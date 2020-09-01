const Mongoose = require('mongoose')

const { Schema, model } = Mongoose

// 使用Schema构造器创建一个新的模式实例
// user的json结构
const userSchema = new Schema({
  // 模式的字段类型和声明方式，还可包括内置验证器
  __v: {type: Number, select: false},
  name: {type: String, required: true},
  password: {type: String, required: true, select: false},
  avatar_url: {type: String},
  gender: {type: String, enum: ['male', 'female'], default: 'male', required: true},
  headline: {type: String},
  locations: {type:[{type: String}]},
  business: {type: String},
  employments: {
    type: [{
      company: {type: String},
      job: {type: String}
    }]
  },
  educations: {
    type: [{
      school: {type: String},
      major: {type: String},
      diploma: {type: Number, enmu: [1, 2, 3, 4, 5]},
      entrance_year: {type: Number},
      graduation_year: {type: Number}
    }]
  }
})

// 创建模型
// (集合名称，user的json结构)
module.exports = model('User', userSchema)