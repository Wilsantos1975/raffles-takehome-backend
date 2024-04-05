const cors = require('cors');
const express = require('express');
const logger = require('morgan');
const rafflesControllers = require('./controllers/rafflesControllers');


const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use("/api/raffles", rafflesControllers)

app.get("/", (req, res) => {
    res.json({message: "Welcome to the Raffles API!"})
}   
);


module.exports = app;