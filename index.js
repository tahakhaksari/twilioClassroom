var express = require('express');
var app = express();
var classroom=require('./api/twilioClassroom.js');



const TWILIO_ACCOUNT_SID="AC7dc19299541246e02d6deed6b8400d4d";
const TWILIO_API_KEY="SKd85388c6913ac6a096e73284753533c0";
const TWILIO_API_SECRET="ow6dunXS5DNaGsnvvhQ5yxJLMn7lC8OV";
const users={
        1:"Taha Khaksari",
        2:"Atefeh",
        3:"Essi",
        4:"Mohammad",
        5:"Ali"
        }
var classrooms={};
// var c1=new classroom(TWILIO_ACCOUNT_SID,TWILIO_API_KEY,TWILIO_API_SECRET);
// c1.addMembers({
//     teacher:{id:1,name:"Taha Khaksari"}
//     ,students:[
//         {id:2,name:"Atefeh"},
//         {id:3,name:"Essi"},
//         {id:4,name:"Mohammad"}
//     ]
// });

// Serve static files from the main build directory
app.use(express.static(__dirname + '/static'));


app.get('/', function(req, res){
    res.sendFile("static/index.html", {root: '.'});
});
app.get('/classroom/:classId', function(req,res,next){
    //var express = require('express');
    var cid=req.params.classId;
    var uid=req.query.uid;
    if(!classrooms[cid])//here can check classId is invalid Or not Started or ect
    {
        classrooms[cid]=new classroom(TWILIO_ACCOUNT_SID,TWILIO_API_KEY,TWILIO_API_SECRET);
        classrooms[cid].addMembers({
                teacher:{id:1,name:"Taha Khaksari"}
                ,students:[
                    {id:2,name:"Atefeh"},
                    {id:3,name:"Essi"},
                    {id:4,name:"Mohammad"}
                ]
            });
        classrooms[cid].setInfo({
            name:"Test Class"
        });
        console.log("class "+cid+" created.")
    }
    var classroomView=require('./src/classroomView.js');
    classroomView.send(classrooms[cid],uid,req,res,next);
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