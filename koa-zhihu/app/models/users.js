const Mongoose = require('mongoose')

const { Schema, model } = Mongoose

// user 的json结构
const userSchema = new Schema({
  name: {type: String, required: true}
})

// 集合名称，user 的json结构
module.exports = model('User', userSchema)