const mysql = require('mysql')
const express = require("express")
require('dotenv').config();
const multer = require('multer');

const app = express();
const port =  3000;
const bdd = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME
})

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './src/images/blog/')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    },
})
  
const upload = multer({ storage: storage })



app.use(express.json({limit: '50mb'}));
app.use(
    express.urlencoded({
        extended : true,
        limit: '50mb'
    }));

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, POST, OPTIONS, PUT');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});



app.get("/api/get", (req, res) =>{
    bdd.query("SELECT * FROM blog", (err, result) => {
        if(err){
            console.log(err)
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



/*INSERT DATA */
app.post("/api/createPosts",(request, res) => {
    // Validate request
    if (!request.body) {
        res.status(400).send({message: "Post ne peut pas être vide !"});
        return
    }

    bdd.query(`INSERT INTO blog set ?`, request.body, (err, result) =>{
        if (err){
            console.log(err)
            throw err; 
        }
        console.log("blog - Post envoyé avec succés : ", {id : result.insertId})
        res.send({ id: result.insertId });
    })
});

app.post("/api/upload", upload.single('file'), (req, res) => {
    if (!req.file) {
        console.log("No file upload");
    } else{
        console.log("image upload")
    }
});


app.listen(port, () =>{
    console.log(`NodeJs - Database to http://localhost:${port}`)
});