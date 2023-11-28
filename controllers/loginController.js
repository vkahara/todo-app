const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path') // All the required packages for login and session control

const connection = mysql.createConnection({ // The database connection runnning a local mysql
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'todo-backend'
});

const app = express();

app.use(session({ // The modules used and their configs
    secret: 'supersecretsecret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

exports.login = (res, req) => { //The login function itself
    let username = req.body.username; // Saving request username and password
    let password = req.body.username;

    if (username && password) { // Comparing login info to our database and ensure given info is not empty.
        connection.query('SELECT * FROM users WHERE username = ? AND password = ?'), [username, password], function(err, results, fields) {
            if (err) throw err; //Error handling in query.
            if (results.length > 0) { //If exists in database, request a session and authenticate the user for a valid session.
                req.session.loggedin = true; //Valid session given
                req.session.username = username; //Username set for other uses
                res.redirect('/'); // Redirect to homepage. This should be notes view per user.
            } else {
                res.send('Incorrect username or password'); //If not found send a response of incorrect credentials.
            }
            res.end();
        }
    } else {
        res.send('Enter username and password')
        res.end();
    }
}

exports.notesView = (req, res) => { //request to view notes is user dependent and requires authentication
    if (req.session.loggedin) { //Check session validity
        res.send('Welcome back ' + req.session.username); //If session valid greet user
    } else {
        res.send('Please login to view your notes'); // Not a valid session, ask for login.
    }
    res.end();
}

module.exports = app;