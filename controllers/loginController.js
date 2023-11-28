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

app.use(session({ // app session host
    secret: 'supersecretsecret',
    resave: true,
    saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));