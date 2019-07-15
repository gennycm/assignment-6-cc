var express = require('express');
var app = express();
const mysql = require('mysql');

const port = 8080;

const db = mysql.createConnection({
    host: "cc-employer-db.mysql.database.azure.com",
    user: "cc-team6@cc-employer-db",
    password: "cloudgladiators_6",
    port: 3306,
    database: "assignment6"
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

const {getEmployees, createEmployee,sendSuccessStatus} = require('./routes/index');

// routes for the app
app.get('/', sendSuccessStatus);
app.get('/api/employees', getEmployees);
app.get('/api/employee/create', createEmployee);

app.listen(port, function () {
    console.log('Example app listening on port '+ port);
});
