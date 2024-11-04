const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    reviewPeriod: { type: String, required: true },
    feedback: { type: String, required: true },
    status: { type: String, default: "Active" }
});

module.exports = mongoose.model('Employee', employeeSchema);
