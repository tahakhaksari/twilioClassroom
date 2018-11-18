var express = require('express');
var app = express();

// Serve static files from the main build directory
app.use(express.static(__dirname + '/static'));


app.get('/', function(req, res){
    res.sendFile("static/index.html", {root: '.'});
});

var AccessToken = require('twilio').jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;
app.get('/token', function(request, response) {
    var identity = "test";
  
    // Create an access token which we will sign and return to the client,
    // containing the grant we just created.
    const TWILIO_ACCOUNT_SID="AC7dc19299541246e02d6deed6b8400d4d";
    const TWILIO_API_KEY="SKd85388c6913ac6a096e73284753533c0";
    const TWILIO_API_SECRET="ow6dunXS5DNaGsnvvhQ5yxJLMn7lC8OV";
    
    var token = new AccessToken(
      TWILIO_ACCOUNT_SID,
      TWILIO_API_KEY,
      TWILIO_API_SECRET
    );
  
    // Assign the generated identity to the token.
    token.identity = identity;
  
    // Grant the access token Twilio Video capabilities.
    var grant = new VideoGrant();
    token.addGrant(grant);
  
    // Serialize the token to a JWT string and include it in a JSON response.
    response.send({
      identity: identity,
      token: token.toJwt()
    });
  });
// Tell the app to listen for requests on port 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});