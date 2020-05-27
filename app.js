const express = require('express');
const bodyParser = require('body-parser')
const Config = require('./config/db');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const gameStore = require('./route/game');

Config.connection.connect((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log('Back-end started, port 3000');
        });
        console.log('Connect to MySQL')
    } else {
        console.log('Failed connect to MySQL')
    }
});

app.use("/", gameStore);