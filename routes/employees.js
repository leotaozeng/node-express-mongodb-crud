const express = require('express')
const router = express.Router()

const employeesController = require('../controllers/employees')

router.get('/', employeesController.getEmployees)

module.exports = router