/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');	// Not being used as of yet
var contact = require('./routes/contact');
var http = require('http');
var path = require('path');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/stickposer');

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
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index(db));
app.get('/guide', routes.guide);

app.get('/library', routes.library(db));
app.post('/library', routes.addToLibrary(db));

app.get('/editor', routes.editor);
app.get('/about', routes.about);
app.get('/db-dump', routes.dbDump(db));
app.get('/users', user.list); // not being used yet

app.get('/contact', contact.view);
app.get('/contact/sent', contact.sent);
app.post('/contact', contact.email);

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
