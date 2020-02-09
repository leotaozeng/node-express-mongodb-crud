const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admin')

// /admin/employees => GET
router.get('/employees', adminController.getEmployees)

// /admin/add-employee => GET
router.get('/add-employee', adminController.getAddEmployee)

// /admin/add-employee => POST
router.post('/add-employee', adminController.postAddEmployee)

module.exports = router