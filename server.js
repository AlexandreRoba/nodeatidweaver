var express = require("express");

var app = express();

app.get('/', function (req, res) {
  res.send('Hello from idweaver');
});

var port = process.env.PORT || 3000;

app.listen(port,function(err){
    if(err){
        console.dir(err);
    }
    console.log("server is listening... Yeah");
});