# Karen volunteer app challenge
Matt Zinman

## Description
This application allows voters to sign up to volunteer for an imaginary "Karen for Senate" campaign.

To volunteer for Karen's campaign, fill out the HTML form on the homepage. The server will match your information to an existing voter in the database. If you enter the name of a voter that is not already in the database, the app will create a new entry.

You can monitor the entries in the database by going to the '/data' page. The server will return all Voters in the database.

## Instructions
I created this in an online development environment so you can run the code without having to download it and its dependencies.

To access this environment, click on [this link](https://ide.c9.io/maz2129/karen-for-senate). Unfortunately, you might have to create an account on Cloud9 if you do not already have one.

Once you're in the environemnt, move to the top level directory and run mongoDB:

```
cd ..
./mongod
```

Now that mongoDB is running in the background, you can start the server. Create a new terminal window by pressing "Window" and then "New Terminal." In this new window, start the server:

```
node app.js
```

You can now access the application in your browser by clicking [this link](https://karen-for-senate-maz2129.c9users.io/).

When you're done using the application, please quit the mongoDB server by pressing control-C in the mongoDB terminal window.

## Dependencies
This application was built using the following:

- [body-parser](https://github.com/expressjs/body-parser) to collect and store information in POST requests.

- [ejs](https://ejs.co/) to embed javascript in HTML files.

- [express](https://expressjs.com/) to create a server in node.js.

- [mongoose](https://mongoosejs.com/) to access and modify a mongoDB database.

## High Level Architecture
In this node.js application, an express server uses mongoose to access and modify a mongoDB database. I will give a brief overview of the function of each element of my code.

FILES:

- app.js: When run, this file seeds the database (by calling seeds.js) and then initializes the server.

DIRECTORIES:

- models: contains files for all Schemas in my database.

- public: contains files for stylizing webpages. Image files and stylesheets belong in here.

- routes: contains files that handle HTML requests for all of the routes in my server.

- views: contains HTML files that are rendered by the server.