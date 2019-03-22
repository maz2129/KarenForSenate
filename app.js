// setup requirements
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    
// configure ejs
app.set("view engine", "ejs");
// configure public directory
app.use(express.static(__dirname + "/public"));
// confidure body-parser
app.use(bodyParser.urlencoded({extended: true}));

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
   res.send(birthday); 
});

// have server listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!!!");
});