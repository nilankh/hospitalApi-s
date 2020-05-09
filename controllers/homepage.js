module.exports.home = function(req, res){
    return res.render('doctorh', {
        title: "home"
    });
}