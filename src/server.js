require('dotenv').config();
const express = require('express')
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./router/web');
const connection = require('./config/database')
// import express from 'express'
const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app)

connection.query(
    'SELECT * FROM Users',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
);

//khai bao router
app.use('/version_1', webRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})