var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

var index = require('./routes/index');
var users = require('./routes/users');

var User = require('./models/users');
var login = require('./routes/login');

var app = express();
mongoose.Promise = global.Promise;  
var session = require('express-session');
var FileStore = require('session-file-store')(session);
 
var identityKey = 'skey';
 
app.use(session({
  name: identityKey,
  secret: 'kevin lee', // 用来对session id相关的cookie进行签名
  store: new FileStore(), // 本地存储session（文本文件，也可以选择其他store，比如redis的）
  saveUninitialized: false, // 是否自动保存未初始化的会话，建议false
  resave: false, // 是否每次都重新保存会话，建议false
  cookie: {
    maxAge: 10 * 1000 // 有效期，单位是毫秒
  }
}));

//你妹的，新版本mongoose非得家这玩意
//远程数据库;
mongoose.connect('mongodb://root:UIrbWa9cvF3PK3gSI4qjbhZhU52zeUDSuQI4Oc73@ermkmolebuhn.mongodb.sae.sina.com.cn:10479',{useMongoClient: true});
//本地数据库;

//mongoose.connect('mongodb://127.0.0.1:27017/test',{useMongoClient: true});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/login',login);

//查询用户是否注册，注册验证
app.get("/find", function(req, res, usr) {
//    console.log("读取函数");
	usr=req.query.username
    User.findOne({username:usr}, function(err, docs) {
        //console.log(docs);
    	if(docs){
            res.send(true);
    	}else{
    		res.send(false);
    	}
        /*对docs进行操作*/
    });

//    res.send("读取成功！！");

});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
