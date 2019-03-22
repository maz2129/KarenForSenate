// install express
var express = require('express'),
    app = express();
    
// configure ejs
app.set("view engine", "ejs");

// configure public directory
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
   res.render('index'); 
});

// have server listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!!!");
});