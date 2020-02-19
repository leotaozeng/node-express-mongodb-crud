const mongoose = require('mongoose')
const Employee = require('../models/employee')

function handleValidationError(err, body) {
  // Errors is an object
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

// Get Employees
exports.getEmployees = (req, res, next) => {
  //  Get employees from MongoDB
  Employee.find((err, employees) => {
    if (!err) {
      res.render('admin/employees', { employees })
    } else {
      res.status(500).send(err)
    }
  })
}

// Add Employee
exports.getAddEmployee = (req, res, next) => {
  res.render('admin/add-employee')
}
exports.postAddEmployee = (req, res, next) => {
  // Create an instance of the employee model 
  const employee = new Employee(req.body)

  // Save the document
  employee.save((err) => {
    if (!err) {
      res.redirect('/admin/employees')
    } else if (err.name === 'ValidationError') {
      handleValidationError(err, req.body)

      res.render(`admin/add-employee`, {
        employee: req.body
      })
    } else {
      res.status(500).send(err)
    }
  })
}

// Edit Employee
exports.getEditEmployee = (req, res, next) => {
  const employeeId = req.params.id

  // find documents
  Employee.findById(employeeId, (err, employee) => {
    if (!err) {
      res.render('admin/edit-employee', {
        employee
      })
    }
  })
}
exports.postEditEmployee = (req, res, next) => {
  const employeeId = req.params.id

  // Update the document
  Employee.findByIdAndUpdate(
    employeeId,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false
    },
    (err, employee) => {
      req.body['_id'] = employeeId

      if (!err) {
        res.redirect('/admin/employees')
      } else if (err.name === 'ValidationError') {
        handleValidationError(err, req.body)

        res.render('admin/edit-employee', {
          employee: req.body
        })
      } else {
        res.status(500).send(err)
      }
    })
}

// Delete Employee
exports.getDeleteEmployee = (req, res, next) => {
  const employeeId = req.params.id

  Employee.findByIdAndRemove(
    employeeId,
    (err) => {
      if (!err) {
        res.redirect('/admin/employees')
      } else {
        res.status(500).send(err)
      }
    })
}
