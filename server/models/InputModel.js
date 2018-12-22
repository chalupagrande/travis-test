const mongoose = require('mongoose')

const InputSchema = mongoose.Schema({
  ip: {
    type: String,
    trim: true,
  },
  input: {
    type: String,
    trim: true,
  }
})

InputSchema.pre('save', function(next) {
  console.log('saving input')
  next()
})

module.exports = mongoose.model('Input', InputSchema)
