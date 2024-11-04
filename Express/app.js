const express = require('express');
const mongoose = require('mongoose');
const employeeRoutes = require('./route/employeeroutes'); // Corrected path to match provided code
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/employeedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));

app.use('/employees', employeeRoutes);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});