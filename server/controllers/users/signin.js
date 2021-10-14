const { user } = require("../../models")
// require("dotenv").config()
const { generateAccessToken, sendAccessToken } = require("../tokenFunc")

module.exports = (req, res) => {
  //console.log(req.body) //{ id: 'kimcoding3', password: 'a123' }
  user
    .findOne({
      where: {
        user_id: req.body.id,
        password: req.body.password,
      },
    })
    .then((data) => {
      if (!data) {
        res.status(404).send("invalid user")
      } else {
        delete data.dataValues.password
        const accessToken = generateAccessToken(data.dataValues)
        return sendAccessToken(res, accessToken)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
