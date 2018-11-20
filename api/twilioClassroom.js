class twilioClassroom
{
    constructor(sid,apiKey,apiSecret)
    {
        //console.log("construct of twilioClassroom")
        this.sid=sid;
        this.apiKey=apiKey;
        this.apiSecret=apiSecret;
        this.AccessToken = require('twilio').jwt.AccessToken;
        this.VideoGrant = this.AccessToken.VideoGrant;
    }
    getTokenFor(identity)
    {
        var token = new this.AccessToken(this.sid,this.apiKey,this.apiSecret);
        token.identity = identity;
        var grant = new this.VideoGrant();
        token.addGrant(grant);
        return token;
    }
    addMembers(members)
    {

    }
}

module.exports=twilioClassroom;