# Karen volunteer app challenge
Matt Zinman

## Description
This application allows voters to sign up to volunteer for an imaginary "Karen for Senate" campaign. The application updates a database that contains fake voter information. When the application is first started, the database contains the following entries:
'''
{
    firstName: "Matthew",
    lastName: "Zinman",
    mi: 'A',
    age: 20,
    location: 'New York',
    phoneNum: 9148152199,
    lastContacted: 2018-04-02
},
{
    firstName: "Kamala",
    lastName: "Harris",
    mi: 'D',
    age: 54,
    location: 'Los Angeles, CA',
    phoneNum: 1234567890,
    lastContacted: 2014-06-03
},
{
    firstName: "Elizabeth",
    lastName: "Warren",
    mi: 'A',
    age: 69,
    location: 'Cambridge, MA',
    phoneNum: 0472956381,
    lastContacted: 2019-01-01
},
{
    firstName: "Beto",
    lastName: "O'Rourke",
    mi: 'F',
    age: 46,
    location: 'El Paso, TX',
    phoneNum: 4856294639,
    lastContacted: 2000-01-01
}
'''
To update the database, you can fill out the HTML form on the '/' page. By entering the name of any of these fake voters in the HTML form, you can update their information in the database. If you submit the name of a person who is not already included in the database, the application will create and save a new Voter in the database.
I created a route that allows you to easily see the contents of the database without having to search for them in the terminal. If you go to the '/data' route, the server will return a list of every Voter in the database. This allows you to easily monitor how and when elements of the database are modified.

## Instructions
I created this in an online development environment so you can run the code without having to download it and its dependencies.
To access this environment, click on [this link](https://ide.c9.io/maz2129/karen-for-senate). Unfortunately, you might have to create an account on Cloud9 if you do not already have one.
Once you're in the environemnt, move to the top level directory and run mongoDB:
''' 
cd ..
./mongod
'''
Now that mongoDB is running in the background, you can start the server. Create a new terminal window by pressing "Window" and then "New Terminal." In this new window, start the server:
'''
node app.js
'''
You can now access the application in your browser by clicking [this link](https://karen-for-senate-maz2129.c9users.io/).
When you're done using the application, please quit the mongoDB server by pressing control-C in the mongoDB terminal window.

## Dependencies
This application was built using the following:
[body-parser](https://github.com/expressjs/body-parser)
[ejs](https://ejs.co/)
[express](https://expressjs.com/)
[mongoose](https://mongoosejs.com/)

## High Level Architecture
In this node.js application, an express server uses mongoose to access and modify a mongoDB database. I will give a brief overview of the function of each element of my code.
app.js: When run, this file seeds the database (by calling seeds.js) and then initializes the server.
models: this directory contains files for all Schemas in my database.
public: this directory contains files for stylizing webpages. Image files and stylesheets belong in here.
routes: this directory contains files that handle HTMl requests for all of the routes in my server.
views: this directory contains HTML files that are rendered by the server.