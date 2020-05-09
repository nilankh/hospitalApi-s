module.exports.signIn = function(req, res){
    return res.render('login', {
        title: "login"
    });
}