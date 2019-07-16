var express = require('express');
var app = express();


app.get('/_ah/health', (req, res) => {
    res.status(200).send('ok');
});

app.get('/', function (req, res) {
    res.status(200);
});

app.get('/employees', function (req, res) {
    res.json("{employees: [{'createdAt':1562961607326,'updatedAt':1562961607326,'id':1,'name':'Genny','lastName':'Centeno','address':'6050 University Road','age':26,'phoneNumber':'9852137458'},{'createdAt':1562961610909,'updatedAt':1562961610909,'id':2,'name':'Neharika','lastName':'Sehgal','address':'6050 University Road','age':31,'phoneNumber':'9022137458'},{'createdAt':null,'updatedAt':null,'id':8,'name':'Jose','lastName':'Ancona','address':'1333 University Road','age':25,'phoneNumber':'7892137789'}]}");
});

app.get('/sum/:maxNum', function (req, res) {

    //Source: https://tecadmin.net/get-current-date-time-javascript/
    let TSwsStart = new Date();

    let maxNum = req.params.maxNum;
    let totalSum = 0;

    for (let i = 1; i <= maxNum; i++) {
        totalSum += i;
    }
    let TSwsEnd = new Date();

    let executionDelay = (TSwsEnd.getTime() - TSwsStart.getTime()) / 1000;

    console.log('executionDelay', executionDelay);

    let response = {
        'totalSum': totalSum,
        'TSwsStart': TSwsStart,
        'TSwsEnd': TSwsEnd,
        'executionDelay': executionDelay
    };
    res.json(response);
});


// Basic 404 handler
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Basic error handler
app.use((err, req, res) => {
    /* jshint unused:false */
    // If our routes specified a specific response, then send that. Otherwise,
    // send a generic message so as not to leak anything.
    res.status(500).send(err.response || 'Something broke!');
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
