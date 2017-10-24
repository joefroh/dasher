import express = require('express');

var app = express();

app.get('/', function(req: express.Request, res: express.Response){
    res.send('hello world');
});

app.listen(3000, function(){
    console.log("Listening to port 3000");
});