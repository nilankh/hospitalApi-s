module.exports.home = function(req, res){
    return res.render('doctor', {
        title: "home"
    });
}