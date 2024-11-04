const adminModel = require('../student/adminModel'); // Import your admin model
var key = '123456789asddfffff'; // Same key used in adminService.js
var encryptor = require('simple-encryptor')(key);

const createAdminUser = async () => {
    const adminDetails = {
        username: 'admin', // Replace with your admin username
        password: encryptor.encrypt('admin123') // Encrypt the password before storing
    };

    try {
        const existingAdmin = await adminModel.findOne({ username: adminDetails.username });
        if (!existingAdmin) {
            const newAdmin = new adminModel(adminDetails);
            await newAdmin.save();
            console.log("Admin user created.");
        } else {
            console.log("Admin user already exists.");
        }
    } catch (error) {
        console.error("Error setting up admin user:", error);
    }
};

module.exports = createAdminUser;
