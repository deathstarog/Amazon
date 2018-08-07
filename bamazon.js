var mysql = require('mysql')
var inq = require('inquirer')
var pmpt = inq.createPromptModule()

var config = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bamazon_db',
    socketPath: ''
})

config.connect(function(e) {
    if (e) throw e
})

