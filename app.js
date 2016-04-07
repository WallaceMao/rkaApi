var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config');

var winston = require('winston');
winston.add(winston.transports.File, {
    filename: __dirname + '/logs/winston.log'
});
winston.handleExceptions(new winston.transports.File({
    filename: __dirname + '/logs/exception.log'
}));
winston.level = config.log.level;

var routes = require('./routes/index');
var users = require('./routes/users');
var teams = require('./routes/teams');

var passport = require('passport');
var RKAStrategy = require('./auth');
passport.use(new RKAStrategy());

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false,
    verify: function(req, res, buf, encoding){
        req.rawBody = buf;
    }
}));
//app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());

app.use('/', routes);
app.use('/v1/users',
    passport.authenticate('RSQ-RKA', {session: false}),
    users);
app.use('/v1/teams',
    passport.authenticate('RSQ-RKA', {session: false}),
    teams);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
console.log('app.env' + app.get('env'));
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        winston.error(err.stack);
        res.status(err.status || 500);
        res.json({
            errcode: err.errcode || 500,
            msg: err.message
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        errcode: err.errcode || 500,
        msg: err.message
    });
});


module.exports = app;
