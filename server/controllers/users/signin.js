const { user } = require('../../models');
require("dotenv").config();
// const { 
//   generateAccessToken,
//   generateRefreshToken,
//   resendAccessToken
// } = require('../tokenFunc');


module.exports = async(req, res) => {
    // const userInfo = await user.findeOne({
    //   where: {
    //     user_id: req.body.user_id,
    //     password: req.body.password
    //   }
    // })
    
    // if(!userInfo){  //원하는 유저가 아니면 
    //   res.status(401).send("아이디 혹은 비밀번호가 일치하지 않습니다.")
    // }
    // else{ //원하는 유저가 맞을 때 
    //   //이 정보가 제대로 넘어오는지 아직 모름..
    //   const { user_id, password, nickname, animaltype, animalname, animalyob } = userInfo
    //   const accessToken = generateAccessToken({ user_id, password, nickname, animaltype, animalname, animalyob })
    //   const refreshToken = generateRefreshToken({ user_id, password, nickname, animaltype, animalname, animalyob })
    //   res.cookie('refreshToken', refreshToken, { HttpOnly: true, sameSite: 'none', secure:true }).status(200)
    //   res.json({ accessToken: accessToken, user_id, password, nickname, animaltype, animalname, animalyob })
    // }
    res.send()
};