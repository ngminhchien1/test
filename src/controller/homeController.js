const connection = require('../config/database')
const getHomePage = (req, res) => {
    connection.query(
        'SELECT * FROM Users',
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        }
    );
    res.send('Hello World!')
}

const duMa = (req, res) => {
    res.render('sample.ejs')
}

module.exports = { getHomePage, duMa }