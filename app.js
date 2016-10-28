var express = require('express');
var app = express();

app.set('port',(process.env.PORT || 8080));

app.get('/', function(req,res){

res.send(req.connection.remoteAddress + ":::" + process.platform);


});

app.listen(3000, function() {console.log('server is up on 3000 or process env');}); 
//app.listen(app.get('port'), function() {console.log('server is up on 8080 or process env');}); 
