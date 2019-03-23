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

// add routes to server
var indexRoutes = require('./routes/index'),
    dataRoutes = require("./routes/data");
app.use(indexRoutes);
app.use(dataRoutes);

// have server listen
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!!!");
});