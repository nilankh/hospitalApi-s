const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();
const port = 8000;


//view engine set
app.use(expressLayouts);
app.set('view engine', 'ejs');


//use express router
app.use('/', require('./routes'));





app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server started on port ${port}`);
})