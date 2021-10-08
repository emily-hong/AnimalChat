require('dotenv').config();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const controllers = require('./controllers');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS']
  })
);

app.use(cookieParser())

//test
// app.get('/', (req, res) => {
//   res.status(201).send('Hello World');
// });

app.post('/commentsend', controllers.commentsend)
app.post('/postedit', controllers.postedit)
app.post('/postsend', controllers.postsend)
app.post('/pwchange', controllers.pwchange)
app.post('/signin', controllers.signin)
app.post('/signout', controllers.signout)
app.post('/signup', controllers.signup)
app.post('/userinfochange', controllers.userinfochange)

app.get('/userinfo', controllers.userinfo)
app.get('/postlist', controllers.postlist)
app.get('/postlist', controllers.commentlist)

// app.delete('/commentdelete', controllers.commentdelete)
// app.delete('/postdelete', controllers.postdelete)
// app.delete('/userremove', controllers.userremove)


const HTTPS_PORT = process.env.HTTPS_PORT || 80;

let server;
if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log('https server runnning'));
} else {
  server = app.listen(HTTPS_PORT, () => console.log('http server runnning'));
}
module.exports = server;