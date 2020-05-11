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

// passport middleware
app.use(passport.initialize());
app.use(passport.session());


//connect falsh
app.use(flash());

//use express router
app.use('/', require('./routes'));





app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server started on port ${port}`);
})