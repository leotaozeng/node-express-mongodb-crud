const mongoose = require('mongoose')
const { Schema } = mongoose

// Models are defined through the Schema interface.
const employeeSchema = new Schema({
  fullName: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  city: {
    type: String
  }
})

// Custom validation
const validator = (value) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailRegex.test(value)
}

employeeSchema.path('email').validate(validator, 'Invalid email')

// Define a Employee document
mongoose.model('Employee', employeeSchema)