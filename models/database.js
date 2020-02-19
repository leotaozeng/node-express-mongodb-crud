const mongoose = require('mongoose')

const server = 'Leo:db19950723@cluster0-koiw6.mongodb.net' // REPLACE WITH YOUR DB SERVER
const database = 'employeeDB'      // REPLACE WITH YOUR DB NAME

// Connect to MongoDB
mongoose.connect(`mongodb+srv://${server}/${database}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (error) => {
  if (!error) {
    console.log('MongoDB Connection Succeeded!')
  } else {
    console.log(`Error in MongoDB Connection: ${error}`)
  }
})

