var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexController = require('./controllers/index');
var usersController = require('./controllers/users');

var app = express();

// if not in production mode, use .env file for db connection
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// mongoose db connection
const mongoose = require("mongoose");

// connecting database
mongoose
  .connect(process.env.DATABASE_URL, {})
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("MongoDB connection failed");
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.listen(4000, () => {
  console.log("Listening on port:4000");
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexController);
app.use('/users', usersController);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
