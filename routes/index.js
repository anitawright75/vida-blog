var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.render('index', { title: 'VIDA Lifestyle Blog' });
});

// router.get('/posts', function(req, res, next){
// 	res.send('Hello world, this is posts');
// });

// router.get('/', function(req, res, next) {
//   res.render('/account/register', { title: 'Express' });
// });


module.exports = router;
