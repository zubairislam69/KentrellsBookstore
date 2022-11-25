const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "Kentrell",
    password: "abc123",
    database: "bookstore"
})

//Zubairs connection

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "Kentrell",
//     password: "abc123",
//     database: "bookstore"
// })

module.exports = db;