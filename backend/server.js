
const express = require('express')
const db = require('./dbFiles/dbConfig')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())



// app.post("/getAll", async (req, res) => {
//     // await dbOperation.createProfile(req.body)

//     db.query("SELECT * FROM Profile", (err, result) => {
//         if (err) {
//             console.log(err)
//         }
//         res.send(result)
    
//     })
// })

app.post("/orders", (req, res) => {
    const profileID = req.body.profileID
    console.log("profileID")
    console.log(req.body.profileID)
    db.query(

        
        `SELECT o.orderID, b.bookID, b.title, b.price, a.name AS author_name
FROM Orders o, Book_Orders bo, Book b, Profile p, book_author ba JOIN author a 
WHERE bo.orderID = o.orderID AND bo.bookID = b.bookID AND ba.bookID = b.bookID AND  a.authorID = ba.authorID
AND o.profileID = p.profileID AND p.profileID = ?`, [profileID],
      
        (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})


app.post("/books", (req, res) => {
    db.query(
        "SELECT * FROM Book", (err, result) => {
        if (err) {
            console.log(err)
        }
            res.send(result)
    })
})

app.post("/fantasy", (req, res) => {
    const p = 
    db.query(
        "SELECT * FROM Book WHERE genre LIKE '%fantasy%'",  (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})



app.post("/signup", (req, res) => {

    const profileID = null
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const age = req.body.age
    const birthPlace = req.body.birthPlace
    const shippingAddress = req.body.shippingAddress

    db.query(
        "INSERT INTO Profile VALUES (?, ?, ?, ?, ?, ?, ?)", [profileID, username, email, password, age,
    birthPlace, shippingAddress], (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    })

})

app.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const qr = "SELECT * FROM Profile WHERE user_name = ? AND password = ?"

    db.query(
        "SELECT * FROM Profile WHERE user_name = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({err: err})
            }
                if (result.length > 0) {
                    res.send(result)
                } else {
                    res.send({message: "Wrong username/password combination"})
                }
            
        })

})



app.listen(5000, () => { console.log("Server started on port 5000") })