// setup requirements
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
    
// configure ejs
app.set("view engine", "ejs");
// configure public directory
app.use(express.static(__dirname + "/public"));
// confidure body-parser
app.use(bodyParser.urlencoded({extended: true}));

// connect mongoose to DB
mongoose.connect('mongodb://localhost:27017/voters', {useNewUrlParser: true});

// require Voter schema
var Voter = require('./models/voter.js')

// GET ROUTE
app.get('/', function(req, res){
   res.render('index');
});

// POST ROUTE
app.post('/', function(req, res){
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

// have server listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!!!");
});