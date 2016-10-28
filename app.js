var express = require('express');
var app = express();
var os = require('os');
var hbs = require('express-handlebars');

app.set('port',(process.env.PORT || 3000));
app.engine('handlebars',hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.get('/', function(req,res){

  var ipAddress = req.headers['x-forwarded-for']; 
  res.render('index', { ip: ipAddress });

});

app.use(express.static(__dirname));


app.listen(app.get('port'), function() {console.log('server is up on 3000 or process env');}); 
