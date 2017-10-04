var express = require('express');
var User = require('../models/users')
var router = express.Router();
var md5=require("md5");
var myDate = new Date();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { 
	  title: 'Express' ,
	  year: myDate.getFullYear()//2017
		  });
});
//reg 注册信息处理逻辑

router.get('/process_login', function(req, res, next) {
	  var b = req.query;
	  var logins={
	    username: b.inputName,
	    password: md5(b.inputPassword)
	  }
	  res.send(logins);
	});

module.exports = router;