const { user } = require("../../models")
//const { generateAccessToken, generateRefreshToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  console.log(req.body)
  const { userId, password, nickName, animalName, selectType, animalYob } =
    req.body

  //정보 6가지가 모두 없었을 경우 클라이언트 에러 리턴
  if (
    !userId ||
    !password ||
    !nickName ||
    !animalName ||
    !selectType ||
    !animalYob
  ) {
    res.status(401).send("정보를 모두 기입해야합니다.")
  }
  //6가지 정보가 정상일경우 중
  else {
    //id가 조회
    const userInfo = await user.findOne({
      where: {
        userId,
      },
    })

    //id가 이미 있는 사람인 경우
    if (userInfo) {
      res.status(402).send("이미 가입되어 있는 회원입니다.")
    }
    //id가 없는 사람인경우 아이디 만들어줌
    else {
      const userCreate = await user.create({
        userId,
        password,
        nickname,
      })
    }
  }

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
}
