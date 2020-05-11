const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');


const app = express();
const port = 8000;


// passport config
require('./config/passport')(passport);

//Db config
const db = require('./config/mongoose');

//view engine set
app.use(expressLayouts);
app.set('view engine', 'ejs');//ye app.set islia kia h q ki app ko bht function h usme se hme view engine vchhiye islia app.set
app.set('views','./views');

//bodyparser
app.use(express.urlencoded({ extended: false }));

// Express Session 
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    
}));


// passport middleware
app.use(passport.initialize());
app.use(passport.session());


//connect falsh
app.use(flash());

//Global vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

//use express router
app.use('/', require('./routes'));
app.use('/doctors', require('./routes/doctor'));





app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server started on port ${port}`);
})