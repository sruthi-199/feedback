// controllers/employeeController.js
const Employee = require('../models/employeeModel');

// Get all employees
exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: "Error fetching employees", error });
    }
};

// Add new employee
exports.addEmployee = async (req, res) => {
    const { name, position, reviewPeriod, feedback } = req.body;
    try {
        const newEmployee = new Employee({ name, position, reviewPeriod, feedback });
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(500).json({ message: "Error adding employee", error });
    }
};


exports.updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, position, reviewPeriod, feedback, status } = req.body;
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(id, {
            name, position, reviewPeriod, feedback, status
        }, { new: true });
        if (!updatedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ message: "Error updating employee", error });
    }
};
// Delete an employee
exports.deleteEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        await Employee.findByIdAndDelete(id);
        res.status(200).json({ message: "Employee deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting employee", error });
    }
};