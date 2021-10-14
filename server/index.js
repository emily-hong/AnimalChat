require("dotenv").config()
const fs = require("fs")
const path = require("path")
const https = require("https")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const express = require("express")
const app = express()
const controllers = require("./controllers")
const multer = require("multer")

const logger = require("morgan")

const url =
  process.env.API_URL ||
  // "https://animalchat-bucket.s3-website.ap-northeast-2.amazonaws.com"
  "https://animal-chat-3vm6os0gr-kingshuny.vercel.app"

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  cors({
    origin: [url],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
)
app.use(logger("dev")) //서버요청 로그
app.use(cookieParser())
app.use(express.static("public"))

const storage = multer.diskStorage({
  destination: "./public/img/",
  filename: function (req, file, cb) {
    cb(null, "imgfile" + Date.now() + path.extname(file.originalname))
  },
})
const upload = multer({
  storage: storage,
  limits: { fileSize: 1 * 1024 * 1024 },
})

//get
app.get("/auth", controllers.auth)
app.get("/postlist", controllers.postlist) //signin, signout, signup,
app.get("/userinfo", controllers.userinfo) // postlist -> userinfo 마이페이지에서 반려동물 정보 확인할 때(myPage.js)
app.post("/commentlist", controllers.commentlist) // postlist -> commentlist 게시글 볼 때 다른 사용자가 남긴 댓글 보기(postRead.js)

//post
app.post("/commentsend", controllers.commentsend) // postlist -> commentsend 게시글 볼 때 댓글 작성시(postRead.js)
app.post("/postedit", upload.single("img"), controllers.postedit) // postlist -> postedit 게시글 수정시(postEdit.js)
app.post("/postsend", upload.single("img"), controllers.postsend) // postlist -> postsend 게시글 작성시(post.js)
app.post("/pwchange", controllers.pwchange) // postlist -> pwchange 비밀번호 수정시(pwdEdit.js)
app.post("/signin", controllers.signin) // postlist -> signin 로그인시(signin.js)
app.post("/signout", controllers.signout) // postlist -> signout 로그아웃 버튼을 누르면 리다이렉팅(어느페이지에서 수정할지 아직 모름)
app.post("/signup", controllers.signup) // postlist -> signup 회원가입시(signup.js)
app.post("/userinfochange", controllers.userinfochange) // postlist -> userinfochange 반려동물 정보수정시(myPageEdit.js)

//delete
app.delete("/commentdelete", controllers.commentdelete) // postlist -> commentdelete 게시글에서 댓글 삭제시(postRead.js)
app.delete("/postdelete", controllers.postdelete) // postlist -> postdelete 게시글에서 해당 게시글 삭제시(postRead.js)
app.delete("/userremove", controllers.userremove) // userinfo -> userremove 마이페이지에서 회원탈퇴(myPage.js)

const HTTPS_PORT = process.env.HTTPS_PORT || 443

let server
if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  // https 프로토콜 사용 시
  const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8")
  const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8")
  const credentials = { key: privateKey, cert: certificate }
  server = https.createServer(credentials, app)
  server.listen(HTTPS_PORT, () => console.log("https server runnning"))
} else {
  server = app.listen(HTTPS_PORT, () => console.log("http server runnning"))
}
module.exports = server
