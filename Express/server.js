// server.js

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const route = require('./route/routes');
const cors = require('cors');
const createAdminUser = require('./src/student/setupAdmin');
mongoose.set('strictQuery', false);

app.use(cors({
    origin: "http://localhost:4200"
}));

app.use(express.json()); // Ensure this middleware is present

// In your server.js, after connecting to the database
mongoose.connect("mongodb://localhost:27017/data", { useNewUrlParser: true, useUnifiedTopology: true },
    async function checkDb(error) {
        if (error) {
            console.log("error connecting to DB");
        } else {
            console.log("successfully connected to DB");
            await createAdminUser(); // Call to create the admin user
        }
    });


app.use(route);

app.listen(8000, function check(error) {
    if (error) {
        console.log("error");
    } else {
        console.log("started");
    }
});
