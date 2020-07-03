var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index')



const apiRouter = require('./routes/api');
var db = require('./routes/data/db.js');

const session = require('express-session')

const uuid = require('uuid/v4')


const app = express();
const port = process.env.PORT || 80;

// app.use(session({
//   secret: 'test',
//   resave: true,
//   saveUninitialized: true
// }))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));



global.__basedir = __dirname;


app.use(session({
  secret: uuid(),
  resave: true,
  saveUninitialized: true,
  cookie: {httpOnly: false, maxAge: 24 * 60 * 60 * 1000 }
}))

app.use('/', indexRouter);
app.use('/api', apiRouter);

// app.get('/abc', (req,res) => {
//   if(req.session.loggedin){
//   console.log (req.session.username)
//   res.redirect("/")}
//   else next(createError(404));
// })








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

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
