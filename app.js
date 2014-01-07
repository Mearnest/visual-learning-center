/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var routes = require('./routes');
var contact = require('./routes/contact');
var Poser = require('./Poser.js').Poser;
var poser = new Poser();
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(express.bodyParser()); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

// Routes
app.get('/', routes.index(poser));
app.get('/guide', routes.guide);

app.get('/library', routes.library(poser));
app.post('/library', poser.savePose);

app.get('/editor', routes.editor);
app.get('/svg-edit', routes.svgEditor);
app.get('/about', routes.about);

// This is for a database dump / inspection
app.get('/database', routes.database(poser));

app.get('/contact', contact.view(poser));
app.get('/contact/sent', contact.sent);
app.post('/contact', contact.email);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
