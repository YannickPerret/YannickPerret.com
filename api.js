const mysql = require('mysql')
const express = require("express")
require('dotenv').config();

const app = express();
const port =  3000;
const bdd = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME
})


app.use(express.json());
app.use(
    express.urlencoded({
        extended : true
    })
);

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.get("/api/get", (req, res) =>{
    bdd.query("SELECT * FROM blog", (err, result) => {
        if(err){
            console.log(erro)
        }
        res.send(result)
    })
});

app.get("/api/getFromId/:id", (req, res) => {
    const id = req.params.id;
    bdd.query("SELECT * FROM blog WHERE id = ?", id, 
    (err, result) => {
        if (err){
            console.log(err)
        }
        res.send(result)
    });
});

app.get("/api/getFromSearch/:sentence", (req, res) => {
    const sentence = req.params.sentence;
    bdd.query(`SELECT DISTINCT * FROM blog WHERE title LIKE '%${sentence}%' OR content LIKE '%${sentence}%'`,
    (err, result) => {
        if (err){
            console.log(err)
        }
        res.send(result)
    });
});


app.get("/api/getFromSlug/:slug", (req, res) => {
    const slug = req.params.slug;
    bdd.query(`SELECT * FROM blog WHERE slug = ?`,slug, 
    (err, result) =>{
        if(err){
            console.log(err)
        }
        res.send(result)
    });
});

app.get("/api/getFromTag/:tag", (req, res) => {
    const tag = req.params.tag;
    console.log(tag)
})


app.listen(port, () =>{
    console.log(`NodeJs - Database to http://localhost:${port}`)
});