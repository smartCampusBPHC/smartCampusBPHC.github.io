var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    email: String,
    password: String
}, { collection: 'usermodel' });

var userModel = mongoose.model('usermodel', userSchema);

module.exports = userModel;

module.exports.encrypt = function(newUser, callback) {

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            // Store hash in your password DB. 
            if (err) throw err;
            else {
                newUser.password = hash;
                newUser.save(callback());
            }
        });
    });
}

module.exports.decrypt = function(pwd_entered, pwd_correct, res) {
    bcrypt.compare(pwd_entered, pwd_correct, function(err, response) {
        if (response == true) {
            var status = 'authenticated';
            return res.redirect('/users/loggedin');
        } else {
            var status = 'invalid';
            return res.redirect('/users/invalid');
        }
    });
}
