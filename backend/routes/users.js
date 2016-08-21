var express = require('express');
var user = require('../models/userData');
var mongoose = require('mongoose');
var router = express.Router();

mongoose.connect('mongodb://localhost/smartcampus');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/signup', function(req, res) {
    var newUser = new user;
    newUser.username = req.body.signup_username;
    newUser.email = req.body.signup_email;
    newUser.password = req.body.signup_password;
    user.encrypt(newUser, function(err, saved_user) {
        if (err) {
            res.redirect('/');
        } else {
            console.log(newUser.password);
            console.log('success');
            res.redirect('/');
        }
    });
});

router.post('/login', function(req, res) {
    var username = req.body.login_username;
    var password = req.body.login_password;
    user.findOne({ username: username }, function(err, userinfo) {
        if (err) throw err;
        else if (!userinfo) {
            console.log('No such user exists');
            res.redirect('/');
        } else if (userinfo) {
            var status = user.decrypt(password, userinfo.password, res);
        }
    })
});

router.get('/loggedin', function(req, res) {
    res.status(200).send('loggedIn');
});
router.get('/invalid', function(req, res) {
    res.status(404).send('Invalid');
});
module.exports = router;
