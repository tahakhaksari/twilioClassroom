var express = require('express');
var app = express();

// Serve static files from the main build directory
app.use(express.static(__dirname + '/static'));


app.get('/', function(req, res){
    res.sendFile("static/index.html", {root: '.'});
});

// Tell the app to listen for requests on port 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});