
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
        `SELECT *, a.name AS author_name 
        FROM book b, Book_Author ba JOIN author a 
        WHERE ba.bookID = b.bookID AND a.authorID = ba.authorID`, (err, result) => {
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
    db.query("Select email from profile where email= ? or user_name= ?", [email, username],
    (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.send({message: "Email Or Username is already used"})
        } else {
            res.send(result)
            db.query(
                "INSERT INTO Profile VALUES (?, ?, ?, ?, ?, ?, ?)", [profileID, username, email, password, age,
            birthPlace, shippingAddress], (err, result) => {
                if (err) {
                    console.log(err)
                }
                console.log(result)
            })
            
        }
        console.log(result)
    })


})

app.post("/checkout", (req, res) => {
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();

    date = yyyy + '-' + dd + '-' + mm;


    const orderID = null
    const paymentID = null

    const profileID = req.body.profileID //good
    const price = req.body.price //need
    
    const ordersBookID = req.body.ordersBookID
    
    const cardName = req.body.cardName
    const cardNum = req.body.cardNum
    const cardCVV = req.body.cardCVV
    const cardExp = req.body.cardExp

    console.log(cardName)
    console.log(cardNum)

    console.log(cardCVV)
    console.log(cardExp)


    db.query(
        "INSERT INTO Orders VALUES (?, ?, ?, ?)", [orderID, profileID, price, date], (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result)
    })

    db.query(
        `INSERT INTO Payment(orderID, cardHolder, cardNum, expirationDate, cvv) 
        SELECT orderID, ?, ?, ?, ?
        FROM orders ORDER BY orderID DESC LIMIT 1`,
            [cardName, cardNum, cardExp, cardCVV], (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result)
        })


    for (let i = 0; i < ordersBookID.length; i++) {
        db.query(
            `INSERT INTO Book_Orders (bookID, orderID) 
            SELECT ?, orderID
            FROM orders ORDER BY orderID DESC LIMIT 1`, [ordersBookID[i]], (err, result) => {
                if (err) {
                    console.log(err)
                }
                console.log(result)
            })
    }
    
    
    

})
app.post("/home", (req, res) => {
    
    db.query(
        "SELECT * FROM  Book_discount AS d, book AS s  WHERE  d.bookID=s.bookID",  (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
        })
})

app.post("/holiday", (req, res) => {
    db.query(
        "SELECT * FROM holiday_book AS h, book AS B WHERE h.bookID=b.bookID and holidayID=1",  (err, result) => {
            if (err) {
                console.log(err)
            }
            res.send(result)
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