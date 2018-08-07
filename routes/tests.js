const express = require('express');
const router = express.Router();
const Test = require('../models/test');


router.get('/tests', function(req, res,next){
    Test.find({}).then(function(test){
        res.send(test);
    });
});


router.post('/tests', function(req, res,next){
    Test.create(req.body).then(function(test){
        res.send(test);
      }).catch(next);

});  
    

router.put('/tests/:id', function(req, res,next){
    Test.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
          Test.findOne({_id:req.params.id}).then(function(test){
            res.send(test);
          });
     });    
});


router.delete('/tests/:id', function(req, res,next){
    Test.findByIdAndRemove({_id:req.params.id}).then(function(test){
      res.send(test);
    });
    
});

module.exports = router;
