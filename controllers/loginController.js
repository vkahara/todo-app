const mongoose = require('mongodb');
const app = require('../index')
const session = require('express-session')
const path = require('path'); // All the required packages for login and session control

//database
const url = "mongodb+srv://1:1@cluster0.mh1o3kp.mongodb.net/?retryWrites=true&w=majority";

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true

}));

mongoose.connect(url)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
        

exports.login = ('/auth', function(res, req) { //The login function itself
    let username = req.body.username; // Saving request username and password
    let password = req.body.username;

    if (username && password) { // Comparing login info to our database and ensure given info is not empty.
        username.find({username: username} && password.find({password: password}), function(err, data) {
            if(err){ //Error handling
                console.log(err);
                return;
            }

            if(data.length > 0) { //If found
                req.session.loggedin = true; //Valid session given
                req.session.username = username; //Username set for other uses
                res.redirect('/'); // Redirect to homepage. This should be notes view per user.
            } else { //Otherwise alert of incorrect credentials
                res.send('Incorrect username or password!');
            }
            res.end();
        });
     } else { //If no login was attempted send a response to enter them.
            res.send('Enter username and password');
            res.end();
        }
    });

exports.notesView = (req, res) => { //request to view notes is user dependent and requires authentication
    if (req.session.loggedin) { //Check session validity
        res.send('Welcome back ' + req.session.username); //If session valid greet user
    } else {
        res.send('Please login to view your notes'); // Not a valid session, ask for login.
    }
    res.end();
}