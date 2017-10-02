var express = require('express');
var User = require('../models/users')
var router = express.Router();
var md5=require("md5");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//reg 注册信息处理逻辑

router.get('/reg', function(req, res, next) {
	  var b = req.query;
	  var _user={
	    username: b.username,
	    password: md5(b.password)
	  }
//	  res.send(_user);
	  var user=new User(_user);
	  user.save(function(err,user){
	  if (err) {
	  console.log(err);
	  return;
	  }
//	  console.log('注册成功');
//	  res.send('注册成功');
	  });
	  res.redirect('/');
	});

module.exports = router;