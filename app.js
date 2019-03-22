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

// ROUTES
app.get('/', function(req, res){
   res.render('index'); 
});

app.post('/', function(req, res){
   var name = req.body.firstName;
   res.send(name); 
});

// have server listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!!!");
});