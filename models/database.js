const mongoose = require('mongoose')
const employee = require('./employee.model')

// Connect to MongoDB
mongoose.connect('mongodb+srv://Leo:db19950723@cluster0-koiw6.mongodb.net/employeeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error) => {
  if (!error) {
    console.log('MongoDB Connection Succeeded!')
  } else {
     console.log(`Error in MongoDB Connection: ${error}`)
  }
})