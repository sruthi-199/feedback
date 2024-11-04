// src/student/studentModel.js

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    ufname: { type: String, required: true },
    ulname: { type: String, required: true },
    uemail: { type: String, required: true, unique: true },
    upass: { type: String, required: true }
});

const studentModel = mongoose.model('Student', studentSchema);

module.exports = studentModel; // Ensure this line is present
