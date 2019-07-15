const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const {getEmployees, createEmployee,sendSuccessStatus} = require('./routes/index');

const port = 80;

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
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

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // parse form data client

// routes for the app
app.get('/', sendSuccessStatus);
app.get('/api/employees', getEmployees);
app.get('/api/employee/create', createEmployee);


// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
}).on('error', function(err){
    console.log('on error handler');
    console.log(err);
});



module.exports = app;
