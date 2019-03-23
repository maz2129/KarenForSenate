var express = require('express'),
    router = express.Router(),
    Voter = require('../models/voter.js');

// send all info from DB
router.get('/data', function(req, res){
    Voter.find({}, function(err, cats){
        if(err)
            res.send(err);
        else
            res.send(cats);
    });
});

module.exports = router;