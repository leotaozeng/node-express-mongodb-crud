const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admin')

router.get('/employees', adminController.getEmployees)

router.get('/add-employee', adminController.getAddEmployee)
router.post('/add-employee', adminController.postAddEmployee)

router.get('/edit-employee/:id', adminController.getEditEmployee)
router.post('/edit-employee/:id', adminController.postEditEmployee)

router.get('/delete-employee/:id', adminController.getDeleteEmployee)

module.exports = router