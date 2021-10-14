const { user } = require("../../models")
require("dotenv").config()
const { generateAccessToken, sendAccessToken } = require("../tokenFunc")

module.exports = async (req, res) => {
  //console.log(req.body) //{ id: 'kimcoding3', password: 'a123' }
  let userFind = await user.findOne({
    where: {
      user_id: req.body.id,
      password: req.body.password,
    },
  })

  if (!userFind) {
    return res.status(404).send("invalid user")
  } else {
    //delete data.dataValues.password;
    const accessToken = generateAccessToken(data.dataValues)
    //console.log(data.dataValues)
    //console.log(accessToken) //토큰 잘발급되고
    return sendAccessToken(res, accessToken, data.dataValues)
  }
}
