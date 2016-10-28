var express = require('express');
var app = express();

app.set('port',(process.env.PORT || 8080));

app.get('/', function(req,res){

app.send(req.connection.remoteAddress);


});

app.listen(app.get('port'), function() {console.log('server is up on 8080 or process env');}); 
