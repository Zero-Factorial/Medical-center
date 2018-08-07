const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// set up express app
const app = express();
mongoose.connect('mongodb://localhost/Medical');
mongoose.Promise = global.Promise;

// use body-parser middleware
//app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// initialize routes
app.use('/medical', require('./routes/doctors'));
app.use('/medical', require('./routes/staffs'));
app.use('/medical', require('./routes/treatments'));
app.use('/medical', require('./routes/tests'));
//app.use('/medical', require('./routes/schedules'));


app.use(function(err,req,res,next){
   res.status(422).send({error:err.message});
});


app.use((req, res, next)=>{

    const error = new Error('Not found');
    error.status = 404;
    next(error);

});

app.use((error, req, res, next) => {

    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    });
});


// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});
