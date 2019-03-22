var express = require('express'),
    router = express.Router(),
    Voter = require('../models/voter.js');

// GET ROUTE
router.get('/', function(req, res){
   res.render('index');
});

// POST ROUTE
router.post('/', function(req, res){
    Voter.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mi: req.body.mi,
        birthday: req.body.birthday,
        helpType: {
            register: req.body.register,
            knock: req.body.knock,
            phone: req.body.phone,
            other: req.body.other
        }
    }, function(err, voter){
        if(err)
            res.send(err);
        else
            res.send(voter);
    });
});

module.exports = router;