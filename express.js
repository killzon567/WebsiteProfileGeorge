var express = require('express'),jade = require('jade');
var http = require('http');
var https = require('https');
var fs = require('fs');

var app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', './views');
app.engine('jade', jade.__express);
//app.engine('html', require('ejs').renderFile);

app.set('view engine', 'jade');


app.get('/Projects',function(req,res)
		{
		res.send('Hello from Projects Page');
		});

app.get('/Contact',function(req,res)
		{
		res.send('Hello from Contact Page');
		
		});


app.get('/',function(req,res)
		{
		//res.send('Hello from main page');
		res.render('index');
		});

app.listen(8080);
