const User = require('../models/User');


//this is for sign in
module.exports.signIn = function(req, res){
    return res.render('login', {
        title: "login"
    });
}

// this is for register
module.exports.signUp = function(req, res){
    return res.render('register', {
       title: "register" 
    });
}



// get the register data

// module.exports.create = function(req, res){
//     if(req.body.password != req.body.confirm_password){
//         req.flash
//     }
// }