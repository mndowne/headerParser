var express = require('express');
var app = express();
var os = require('os');


app.set('port',(process.env.PORT || 8080));

app.use(express.static(__dirname));


app.get('/here', function(req,res){

res.send(req.headers['x-forwarded-for']+ ":::" + process.platform + "\n"
 + os.platform() + os.release());

});



//app.listen(3000, function() {console.log('server is up on 3000 or process env');}); 
app.listen(app.get('port'), function() {console.log('server is up on 8080 or process env');}); 
