var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.render('sites/home.ejs')
});

app.get('/login', function (req, res){
	res.render('sites/login.ejs');
});

app.get('/profile', function (req, res){
	res.render('sites/profile.ejs');
});

app.get('/signup', function (req, res){
	res.render('sites/signup.ejs');
});
// mike needs to explain there two get requests a bit more
app.get('/player/:id', function (req, res){
	res.render('sites/player.ejs '+req.params.id);
});

app.get('/player/new', function (req, res){
	res.render('sites/newplayer.ejs');
});

app.listen(3000);
