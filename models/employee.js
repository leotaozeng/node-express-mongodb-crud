const mongoose = require('mongoose')
const { Schema } = mongoose

// models are defined through the Schema interface.
const employeeSchema = new Schema({
  fullName: {
    type: String,
    required: [true, 'This field is required']
  },
  email: {
    type: String
  },
  phone: {
    type: Number,
    required: [true, 'This field is required']
  },
  city: {
    type: String,
    required: [true, 'This field is required']
  }
})

// custom validation
const validator = (value) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailRegex.test(value)
}

employeeSchema.path('email').validate(validator, 'Invalid email')

// define a Employee document
module.exports = mongoose.model('Employee', employeeSchema)