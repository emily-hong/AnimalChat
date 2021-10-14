const { user } = require("../../models")
const { isAuthorized } = require("../tokenFunc")

module.exports = async(req, res) => {
  //console.log(req.headers)
  const accessTokenData = isAuthorized(req);
  
  if (!accessTokenData) {
    return res.json({ data: null, message: "not authorized" })
  }

  const { user_id, nickname } = accessTokenData
  const userInfoData = await user.findOne({
    where: {
      user_id: user_id,
      nickname: nickname,
    },
  })

  if (!userInfoData) {
    return res.status(401).send({ data: null, message: "not authorized" })
  } else {
    delete userInfoData.dataValues.password
    return res.send({
      data: { userInfo: userInfoData.dataValues },
      message: "ok",
    })
  }
}
