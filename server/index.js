require("dotenv").config();
const express = require("express");
const app = express();
const massive = require('massive');
const controller = require('./controller')

const { SERVER_PORT, DATABASE_STRING } = process.env;

massive(DATABASE_STRING).then(db => {
    app.set('db', db);
    console.log("Database Connected");
});

app.listen(5150, () => {
    console.log('Listening on port 5150')
});