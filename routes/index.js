var express = require('express');
var User = reuqire('../models/users')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//reg 注册信息处理逻辑

router.post('/reg', function(req, res, next) {
	  var b = req.body;
	  var _user={
	    username: b.username,
	    password: b.password
	  }
	  var user=new User(_user);
	  user.save(function(err,user){
	  if (err) {
	  console.log(err);
	  return;
	  }
	  console.log('注册成功');
	  res.send('注册成功');
	  })
	});

module.exports = router;
