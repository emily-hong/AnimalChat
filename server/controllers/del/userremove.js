const { user } = require("../../models")
const { isAuthorized } = require('../tokenFunc');

module.exports = (req, res) => {
  // console.log(req.body)
  //res.send()
  //회원정보확인하고 
  //토큰삭제 
  //정보삭제 
  const accessTokenData = isAuthorized(req)
  if(!accessTokenData){
    return res.json({ data: null, message: '회원정보가 일치하지 않습니다.' })
  }
  
  // const { user_id, nickname } = req.body
  const { user_id, nickname } = accessTokenData
  user.destroy({
    where: {
      user_id: user_id,
      nickname: nickname
    }
  })
  res.clearCookie("jwt").status(205).send('회원탈퇴가 되었습니다.')
};