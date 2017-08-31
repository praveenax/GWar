var express = require('express');
var app = express();
var path = require('path');

var http = require('http').Server(app);


app.use(express.static('client'));

app.get('/', function (req, res) {

    res.sendfile('client/infinite.html');

});


var server = http.listen(process.env.PORT || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});
