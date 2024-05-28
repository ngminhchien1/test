require('dotenv').config();
const express = require('express')
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./router/web');


// import express from 'express'
const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app)

//khai bao router
app.use('/version_1', webRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})