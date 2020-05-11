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

// module.exports.register = function(req, res){
//    const {name, email, password, confirm_password} = req.body;
//    let errors = [];

//     // Check required Fields
//     if(!name || !email || !password || !confirm_password){
//         errors.push({msg: 'Please fill in all fields'});
//     }

//     // check password match
//     if(password != confirm_password){
//         errors.push({msg: 'Passwords do not match'});
//     }

//     // Check password length
//     if(password.length < 6){
//         errors.push({msg: 'password should be atleast 6 characters'});
//     }
//     if(errors.length > 0){
//         res.render('register', {
//             errors,
//             name,
//             email,
//             password,
//             confirm_password
//         });
//     }else{
//         //Validatioon paassed
//         User.findOne({email: email})
//         .then(user => {
//             if(user){
//                 // User exists
//                 errors.push({msg: 'Emails is already registred'});
//                 res.render('register', {
//                     errors,
//                     name,
//                     email,
//                     password,
//                     confirm_password
//                 });
//             }else{
//                 let newUser = newUser({
//                     name,
//                     email,
//                     password
//                 });
//                 // console.log(newUser);
//                 // res.send("hello");
//                 bcrypt.genSalt(10, (err, salt) => 
//                 bcrypt.hash(newUser.password, salt, (err, hash) => {
//                     if(err) throw err;
//                     // set password to hashed
//                     newUser.password = hash;
//                     // saved the user
//                     newUser.save()
//                     .then(user => {
//                         req.flash('success_msg', 'You are now registerd and can log in');
//                         res.redirect('/login');
//                     })
//                     .catch(err => console.log(err));
//                 }))
//             }
//         }) 
//     }
// }
module.exports.register = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user');return}

        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error h re baba register krne me');return}

                return res.redirect('/doctor/login');
            })
        }else{
            return res.redirect('back');
        }
    });
}
module.exports.doctorlogin = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect:'/',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
}