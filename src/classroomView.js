function send(classroom,uid,req,res,next)
{
    var page=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>twilio Classroom test</title>
        <script src="/js/classroom.js"></script>
        <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
        <header>
            <h1>${classroom.name}</h1>
        </header>
        <div id="videoTracksArea">
            <div id="mainVideoTrack">
                <label for="" class="caption">${classroom.teacher.name}</label>
            </div><div id="classroomTracksContainer">`
        ;
    classroom.students.forEach(element => {
        page+=`<div class="classroomTrack" id="track${element.id}"><label for="" class="caption">${element.name}</label></div>`
    });        
    page+=`
            </div>
        </div>
        
    </body>
    </html>`;
    res.send(page);
}

exports.send=send;