const mongoose = require('mongoose')
const { Schema } = mongoose

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

// Define a Employee document
mongoose.model('Employee', employeeSchema)