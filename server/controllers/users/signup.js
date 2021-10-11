const { user } = require("../../models")
const { generateAccessToken } = require("../tokenFunc")

module.exports = async (req, res) => {
  //console.log(req.body)
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
        user_id: userId,
      },
    })
    // console.log(userInfo)
    // id가 이미 있는 사람인 경우
    if (userInfo) {
      res.status(402).send("이미 가입되어 있는 회원입니다.")
    }
    //id가 없는 사람인경우 아이디 만들어줌
    else {
      const userCreate = await user.create({
        user_id: userId,
        password: password,
        nickname: nickName,
      })
      res
        .cookie("jwt", generateAccessToken(userCreate.dataValues), {
          httpOnly: true,
        })
        .status(201)
        .send({ message: "ok" })
    }
  }
}
