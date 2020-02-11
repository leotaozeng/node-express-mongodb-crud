const express = require('express')
const router = express.Router()

const adminController = require('../controllers/admin')

/* GET home page. */
router.get('/', adminController.getEmployees)

module.exports = router
