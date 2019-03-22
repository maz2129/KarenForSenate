var express = require('express'),
    router = express.Router(),
    Voter = require('../models/voter.js');

// GET ROUTE
router.get('/', function(req, res){
   res.render('index');
});

// POST ROUTE
router.post('/', function(req, res){
    
    Voter.findOne({
        // find voter
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }, function(err, voter){
        if(err)
            res.send(err);
        else{
            // update voter info
            voter.birthday = req.body.birthday;
            voter.helpType = helpTypeToBoolean(req.body.helpType);
            voter.save();
            res.send(voter);
        }
    })
    
});

function helpTypeToBoolean(arr) {
    for(var i=0; i<arr.length; i++){
        if(arr[i]=='true')
            arr[i]=true;
        else
            arr[i]=false;
    }
    return arr;
}

module.exports = router;