require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
    generateAccessToken: (data) => {
        return sign(data, process.env.ACCESS_SECRET, { expiresIn: '2days' })
    },
    generateRefreshToken: (data) => {
        return sign(data, process.env.REFRESH_SECRET, { expiresIn: '5days' })
    },
    sendRefreshToken: (data) => {
        res.cookie('refreshToken', refreshToken, {
        HttpOnly: true 
        })
    },
    sendAccessToken: (res, accessToken) => {
        res.json({ data: { accessToken }, message: 'ok' })
    },
    resendAccessToken: (res, accessToken) => {
        res.json({ accessToken, message: 'ok' })
    },

   isAuthorized: (req) => {
     //로그인하는 토큰이 아직 제대로 잘 넘어오는지 아직 모름 
    //  const authorization = req.headers['Authorization'];
    //  if(!authorization){
    //     return null;
    //  }
    //  //어떻게 생겼니 ㅠㅠㅠ 일단 아래 방법으로 잘라봄,,
    //  const token = authorization.split(' ')[1];
    //  try {
    //     return verify(token, process,env.ACCESS_SECRET) 
    //  }catch(err){
    //     return null; 
    //  }
   },

   checkRefreshToken: (refreshToken) => {
    try {
        return verify(refreshToken, process.env.REFRESH_SECRET);
      } catch (err) {
        // return null if refresh token is not valid
        return null;
      }
    }
}

