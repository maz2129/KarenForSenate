// setup requirements
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    seedDB = require('./seeds.js');

// connect mongoose to DB
mongoose.connect('mongodb://localhost:27017/voters', {useNewUrlParser: true});
// seed DB
seedDB();
// configure ejs
app.set("view engine", "ejs");
// configure public directory
app.use(express.static(__dirname + "/public"));
// configure body-parser
app.use(bodyParser.urlencoded({extended: true}));

var routes = require('./routes/index.js');
app.use(routes);

// have server listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!!!");
});