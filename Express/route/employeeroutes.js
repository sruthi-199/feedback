const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// CRUD routes
router.get('/', employeeController.getEmployees);
router.post('/', employeeController.addEmployee);
router.patch('/:id', employeeController.updateEmployee); // This handles feedback and status updates
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;