
const getHomePage = (req, res) => {
    res.send('Hello World!')
}

const duMa = (req, res) => {
    res.render('sample.ejs')
}

module.exports = { getHomePage, duMa }