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

// changes the values of the elements of the helpType object from strings
// to booleans
function helpTypeToBoolean(helpType) {
    if(helpType!=undefined){
        for(var i=0; i<helpType.length; i++){
            if(helpType[i]=='true')
                helpType[i]=true;
            else
                helpType[i]=false;
        }
    }
    return helpType;
}

module.exports = router;