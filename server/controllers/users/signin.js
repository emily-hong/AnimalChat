const { user } = require("../../models")
const { generateAccessToken, sendAccessToken } = require("../tokenFunc")

module.exports = (req, res) => {
    //console.log(req.body) //{ id: 'kimcoding3', password: 'a123' }
    let accessToken = null
    user.findOne({
        where: {
            user_id: req.body.id,
            password: req.body.password,
        },
    }).then((data) => {
        if (!data) {
            res.status(404).send("invalid user")
        }

        delete data.dataValues.password
        accessToken = generateAccessToken(data.dataValues)
        // sendAccessToken(res, accessToken)
        //console.log(accessToken)
        res.cookie("jwt", accessToken, {
            httpOnly: true,
        })
            .status(200)
            .send({ accessToken: accessToken, message: "ok" })
    })
}
