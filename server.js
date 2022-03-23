const mysql = require('mysql')
const express = require("express")
require('dotenv').config();
const multer = require('multer');
const {sign} = require('jsonwebtoken');
const  bCrypte = require('bcrypt');


const app = express();
const port =  3000;
const bdd = mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "",
    database : "blog"
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
        extended : false,
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
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


/* GET DATA ARTICLE */
app.get("/api/get", (req, res) =>{

    bdd.query(`SELECT blog.*, GROUP_CONCAT(tag.name) AS 'tag' from blog
                LEFT JOIN blog_tag on blog_tag.blog_id = blog.id
                LEFT JOIN tag on blog_tag.tag_id = tag.id
                GROUP BY blog.id ORDER BY blog.dateCreated DESC;`, (err, result) => {
        if(err){
            console.log(err)
            throw err; 
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

/*GET DATA TAG */

app.get("/api/getTag", (req, res) =>{
    bdd.query("SELECT * FROM tag", (err, result) => {
        if(err){
            console.log(err)
        }
        res.send(result)
    })
})


/*POST DATA BLOG */
app.post("/api/createPosts",(request, res) => {
    // Validate request
    if (!request.body) {
        res.status(400).send({message: "Post ne peut pas être vide !"});
        return
    }

    const {title, description, content, image, titleImage, timeRead, slug, color} = request.body

    bdd.query(`INSERT INTO blog set ?`, {title, description, content, image, titleImage, timeRead, slug, color}, (err, result) =>{
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


/*AUTHENTIFICATION LOGIN */

app.post("/auth/login", (req, res) => {

    const {username, password} = req.body;
    if(username.length > 5 && password.length > 5){
        try{
            bdd.query(`SELECT * FROM users WHERE username = ?`, username, (error, result) => {
                if (error){
                    console.log(error)
                    throw error;
                }
                let user = result[0]
                if(user){
                   bCrypte.compare(password, user.password, function(err, isMatch){
                        if(err){
                            throw err
                        }else if(!isMatch){
                            console.log("Les deux mots de passe ne correspondent pas")
                        }else{
                            console.log("Password correspondent")
                            const token = sign({username : user.username, id : user.id},"Tunetrouverasjamaismonsecret")
                            if(token){
                                bdd.query(`UPDATE users SET token = '${token}' WHERE username = '${username}'`, (error, result2) =>{
                                    if (error){
                                        console.log(error)
                                        throw error;
                                    }
                                    res.set({"Authorization":token})
                                    res.send({token:token})
                                })
                            }
                        }
                    })
                }
            }) 
        } catch(e){
            console.error(e)
        }
    }
    else {
        res.status(400).send({error:"Veuillez entrez un pseudo et mot de passe valide"})
    }
    
    
})


app.listen(port, () =>{
    console.log(`PortFolio - Database to http://localhost:${port}`)
});