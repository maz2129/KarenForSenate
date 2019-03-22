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

// Create Schema
var voterSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mi: String,
    birthday: Date,
    helpType: {
        register: Boolean,
        knock: Boolean,
        phone: Boolean,
        other: Boolean
    },
    age: Number,
    location: String,
    phoneNum: Number,
    lastContacted: Date
});

var Voter = mongoose.model('Voter', voterSchema);

// GET ROUTE
app.get('/', function(req, res){
   res.render('index');
});

// POST ROUTE
app.post('/', function(req, res){
   var firstName = req.body.firstName;
   var lastName = req.body.lastName;
   var mi = req.body.mi;
   var birthday = req.body.birthday;
   var register = req.body.register;
   var knock = req.body.knock;
   var phone = req.body.phone;
   var other = req.body.other;
   res.send(knock); 
});

// have server listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!!!");
});