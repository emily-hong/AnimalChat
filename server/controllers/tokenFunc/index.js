require("dotenv").config()
const { sign, verify } = require("jsonwebtoken")

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "2s" })
  },
//   generateRefreshToken: (data) => {
//     return sign(data, process.env.REFRESH_SECRET, { expiresIn: "5s" })
//   },
//   sendRefreshToken: (data) => {
//     res.cookie("refreshToken", refreshToken, {
//       HttpOnly: true,
//     })
//   },
  sendAccessToken: (res, accessToken, data) => {
    res.cookie("jwt", accessToken, {
    HttpOnly: true,
    })
    res.json({ data: { accessToken : accessToken, data: data }, message: "ok" })
  },
  resendAccessToken: (res, accessToken) => {
    res.json({ accessToken, message: "ok" })
  },

  isAuthorized: (req) => {
    //로그인하는 토큰이 아직 제대로 잘 넘어오는지 아직 모름
   
    console.log(req.headers) //eyJhbGciOiJIUzI1NiIsInR5 ~ 
    //  const authorization = req.headers['Authorization'];
    //  if(!authorization){
    //     return null;
    //  }

    //  const token = authorization.split(' ')[1];
    //  try {
    //     return verify(token, process,env.ACCESS_SECRET)
    //  }catch(err){
    //     return null;
    //  }
  },

  checkRefreshToken: (refreshToken) => {
    try {
      return verify(refreshToken, process.env.REFRESH_SECRET)
    } catch (err) {
      // return null if refresh token is not valid
      return null
    }
  },
}
