const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admin')

// /admin/employees => GET
router.get('/employees', adminController.getEmployees)

// /admin/delete-employee/:id => GET
router.get('/delete-employee/:id', adminController.getDeleteEmployee)

// /admin/edit-employee/:id => GET
router.get('/edit-employee/:id', adminController.getEditEmployee)

// /admin/edit-employee/:id => POST
router.post('/edit-employee/:id', adminController.postEditEmployee)

// /admin/add-employee => GET
router.get('/add-employee', adminController.getAddEmployee)

// /admin/add-employee => POST
router.post('/add-employee', adminController.postAddEmployee)

module.exports = router