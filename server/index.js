require("dotenv").config();
const express = require("express");
const app = express();
const massive = require('massive');
const controller = require('./controller')

app.listen(5150, () => {
    console.log('Listening on port 5150')
});