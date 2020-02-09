const mongoose = require('mongoose')
const Employee = mongoose.model('Employee')

function handleValidationError(err, body) {
  // errors is an object
  const { errors } = err

  for (const field in errors) {
    if (errors.hasOwnProperty(field)) {
      switch (errors[field].path) {
        case 'fullName':
          body['fullNameError'] = errors[field].message
          break
        case 'email':
          body['emailError'] = errors[field].message
          break
        case 'phone':
          body['phoneError'] = errors[field].message
          break
        case 'city':
          body['cityError'] = errors[field].message
          break
        default:
          break
      }
    }
  }
}

exports.getEmployees = (req, res, next) => {
  res.render('admin/employees')
}

exports.getAddEmployee = (req, res, next) => {
  res.render('admin/add-employee')
}

exports.postAddEmployee = (req, res, next) => {
  const { fullName, email, phone, city } = req.body
  // Instantiate the model
  const employee = new Employee()

  employee.fullName = fullName
  employee.email = email
  employee.phone = phone
  employee.city = city

  employee.save((err) => {
    if (!err) {
      res.redirect('/admin/employees')
    } else if (err.name === 'ValidationError') {
      handleValidationError(err, req.body)
      
      res.render('admin/add-employee', {
        employee: req.body
      })
    } else {
      console.log(`Error during document insertion: ${err}`)
    }
  })
}

