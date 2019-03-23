var mongoose = require('mongoose'),
    Voter = require('./models/voter.js');
    
var data = [
    {
        firstName: "Matthew",
        lastName: "Zinman",
        age: 20,
        location: 'New York',
        phoneNum: 9148152199,
        lastContacted: 2018-04-02
    },
    {
        firstName: "Kamala",
        lastName: "Harris",
        age: 54,
        location: 'Los Angeles, CA',
        phoneNum: 1234567890,
        lastContacted: 2014-06-03
    },
    {
        firstName: "Elizabeth",
        lastName: "Warren",
        age: 69,
        location: 'Cambridge, MA',
        phoneNum: 0472956381,
        lastContacted: 2019-01-01
    },
    {
        firstName: "Beto",
        lastName: "O'Rourke",
        age: 46,
        location: 'El Paso, TX',
        phoneNum: 4856294639,
        lastContacted: 2000-01-01
    },
]
    
function seedDB(){
    // clear database
    Voter.deleteMany({}, function(err){
        if(err)
            console.log(err);
        else {
            console.log('DB cleared');
            // add data to DB
            Voter.create(data, function(err, voters){
                if(err)
                    console.log(err);
                else
                    console.log("DB seeded");
            });
        }
            
    });
}

module.exports = seedDB;