var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendStatus(200);
});

app.get('/employees', function (req, res) {
    res.json('{employees: [{"createdAt":1562961607326,"updatedAt":1562961607326,"id":1,"name":"Genny","lastName":"Centeno","address":"6050 University Road","age":26,"phoneNumber":"9852137458"},{"createdAt":1562961610909,"updatedAt":1562961610909,"id":2,"name":"Neharika","lastName":"Sehgal","address":"6050 University Road","age":31,"phoneNumber":"9022137458"},{"createdAt":null,"updatedAt":null,"id":8,"name":"Jose","lastName":"Ancona","address":"1333 University Road","age":25,"phoneNumber":"7892137789"}]}');
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
