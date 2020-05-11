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

module.exports.register = function(req, res){
   const {name, email, password, confirm_password} = req.body;
   let errors = [];

// Check required Fields
    if(!name || !email || !password || !confirm_password){
        errors.push({msg: 'Please fill in all fields'});
    }

    // check password match
    if(password != confirm_password){
        errors.push({msg: 'Passwords do not match'});
    }

    // Check password length
    if(password.length < 6){
        errors.push({msg: 'password should be atleast 6 characters'});
    }
    if(errors.length > 0){
        res.render('register', {
            errors,
            name,
            email,
            password,
            confirm_password
        });
    }else{
        //Validatioon paassed
        User.findOne({email: email})
        .then(user => {
            if(user){
                // User exists
                errors.push({msg: 'Emails is already registred'});
                res.render('register', {
                    errors,
                    name,
                    email,
                    password,
                    confirm_password
                });
            }else{
                const newUser = newUser({
                    name,
                    email,
                    password
                });
                console.log(newUser);
                res.send("hello");
            }
        }) 
    }
}