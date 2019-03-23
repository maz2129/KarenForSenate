var express = require('express'),
    router = express.Router(),
    Voter = require('../models/voter.js');

// GET ROUTE
router.get('/', function(req, res){
   res.render('index');
});

// POST ROUTE
// if the voter already exists in the DB, this function updates that voter's info
// if the voter does not already exist in DB, this funciton creates a new voter in DB
router.post('/', function(req, res){
    Voter.findOne({
        // find voter
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }, function(err, voter){
        if(err)
            res.send(err);
        else{
            if(voter!=undefined){
                // update voter info
                upateVoter(req.body, voter, res);
            }
            else {
                // add new voter to DB
                addVoter(req.body, voter, res);
            }
        }
    })
});

// updates information of a voter already in the DB
function upateVoter(body, voter, res) {
    voter.birthday = body.birthday;
    voter.helpType = helpTypeToBoolean(body.helpType);
    voter.save();
    res.send(voter);
}

// adds new voter to DB
function addVoter(body, voter, res) {
    Voter.create({
        firstName: body.firstName,
        lastName: body.lastName,
        mi: body.mi,
        birthday: body.birthday,
        helpType: helpTypeToBoolean(body.helpType)
    }, function(err, newVoter){
        if(err)
            res.send(err);
        else
            res.send(newVoter);
    })
}

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