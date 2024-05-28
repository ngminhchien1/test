const path = require('path')
const express = require('express')

const configViewEngine = (app) => {
    // config temple engine
    console.log(__dirname)
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')

    //config static files
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine