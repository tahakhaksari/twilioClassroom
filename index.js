var express = require('express');
var app = express();
var classroom=require('./api/twilioClassroom.js');



const TWILIO_ACCOUNT_SID="AC7dc19299541246e02d6deed6b8400d4d";
const TWILIO_API_KEY="SKd85388c6913ac6a096e73284753533c0";
const TWILIO_API_SECRET="ow6dunXS5DNaGsnvvhQ5yxJLMn7lC8OV";

var c1=new classroom(TWILIO_ACCOUNT_SID,TWILIO_API_KEY,TWILIO_API_SECRET);

// Serve static files from the main build directory
app.use(express.static(__dirname + '/static'));


app.get('/', function(req, res){
    res.sendFile("static/index.html", {root: '.'});
});



app.get('/token', function(request, response) {
    var token=c1.getTokenFor("test");
    response.send({
      identity: token.identity,
      token: token.toJwt()
    });
  });
// Tell the app to listen for requests on port 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});