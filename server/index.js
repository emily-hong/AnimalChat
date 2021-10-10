<<<<<<< HEAD
require("dotenv").config()
const fs = require("fs")
const https = require("https")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const express = require("express")
const app = express()
=======
require('dotenv').config();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const controllers = require('./controllers');
>>>>>>> 751d55a2b73a0d8d557b3a4daa35d3e80ad8816a

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  cors({
    origin: ["https://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
<<<<<<< HEAD
)
app.use(cookieParser())
app.get("/", function (req, res) {
  res.send("이게 보인다면 파이프라인 자동배포까지 모두 성공12345")
})

const HTTPS_PORT = process.env.HTTPS_PORT || 80

let server
if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8")
  const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8")
  const credentials = { key: privateKey, cert: certificate }

  server = https.createServer(credentials, app)
  server.listen(HTTPS_PORT, () => console.log("https server runnning"))
=======
);

app.use(cookieParser())

//test
app.get('/', (req, res) => {
  res.status(201).send('Hello World');
});

// app.post('/commentsend', controllers.commentsend)
// app.post('/postedit', controllers.postedit)
// app.post('/postsend', controllers.postsend)
// app.post('/pwchange', controllers.pwchange)
// app.post('/signin', controllers.signin)
// app.post('/signout', controllers.signout)
// app.post('/signup', controllers.signup)
// app.post('/userinfochange', controllers.userinfochange)

// app.get('/userinfo', controllers.userinfo)
// app.get('/postlist', controllers.postlist)
// app.get('/postlist', controllers.commentlist)

// app.delete('/commentdelete', controllers.commentdelete)
// app.delete('/postdelete', controllers.postdelete)
// app.delete('/userremove', controllers.userremove)


const HTTPS_PORT = process.env.HTTPS_PORT || 80;

let server;
if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {  // https 프로토콜 사용 시
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };
  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log('https server runnning'));
>>>>>>> 751d55a2b73a0d8d557b3a4daa35d3e80ad8816a
} else {
  server = app.listen(HTTPS_PORT, () => console.log("http server runnning"))
}
module.exports = server
