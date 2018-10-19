var express = require('express');
var app = express();
var path = require('path');

var firebase = require("firebase-admin");

var serviceAccount = require("./key/serviceAccountKey.json");

//firebase.initializeApp({
//  credential: firebase.credential.cert(serviceAccount),
//  databaseURL: "https://gjden-ac410.firebaseio.com"
//});
//

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



firebase.database().ref('/list').on('value', function(postSnapshot) {
   console.log(postSnapshot.val()); 
});
