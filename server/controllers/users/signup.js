const { user } = require('../../models');
//const { generateAccessToken, generateRefreshToken } = require('../tokenFunctions');

module.exports = async (req, res) => {

// const { user_id, password, nickname, animaltype, animalname, animalyob } = req.body
// if(!user_id || !password || !nickname || !animaltype || !animalname || !animalyob){
//   res.status(422).send("위 항목 모두 필수사항입니다:)")    
// }
// else{
  
//   const userInfo = await user.findOne({
//   where: {
//     user_id
//     }
//   })
//   if(userInfo){
//     res.status(409).send("이미 존재하는 아이디입니다.")
//   }
//    else{ //일치하는 아이디가 없을 경우: 신규회원 일 때

//    const userData = await user.create({
//    user_id: req.body.user_id, password: req.body.password, nickname: req.body.nickname, animaltype: req.body.animaltype, animalname: req.body.animalname, animalyob: req.body.animalyob
//   })
//  //userData에 정보가 잘 넘어왔는지 아직 모름 
//  //Response.cookie(name: string, val: string, options: CookieOptions)
//   const { user_id, password, nickname, animaltype, animalname, animalyob } = userData;
//   const accessToken = generateAccessToken({ user_id, password, nickname, animaltype, animalname, animalyob })
//   const refreshToken = generateRefreshToken({ user_id, password, nickname, animaltype, animalname, animalyob })
  
//   //쿠키에 리프레시, 액세스 토큰과 함께 바디에 정보넘겨줌 
//   res.cookie('refreshToken', refreshToken,  { SameSite: 'none', Secure:true , HttpOnly:true })
//   .status(201).send({accessToken: accessToken, user_id, password, nickname, animaltype, animalname, animalyob})  
//    //혹은 
//    //.status(201).send({accessToken: accessToken, user_id: userData.user_id, password: userData.password, nickname: userData.nickname, animaltype: userData.animaltype, animalname: userData.animalname, animalyob: userData.animalyob})  
//   }


// }
res.send()
};