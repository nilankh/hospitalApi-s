
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