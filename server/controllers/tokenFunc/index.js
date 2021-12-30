const dotenv = require("dotenv")
dotenv.config()

const { sign, verify } = require("jsonwebtoken")

module.exports = {
    generateAccessToken: (data) => {
        return sign(data, process.env.ACCESS_SECRET, { expiresIn: "2days" })
    },

    sendAccessToken: (res, accessToken, data) => {
        res.cookie("jwt", accessToken, {
            HttpOnly: true,
        })
        res.status(200).json({
            data: { accessToken: accessToken, data: data },
            message: "ok",
        })
    },

    isAuthorized: (req) => {
        const authorization = req.headers.cookie
        if (!authorization) {
            return null
        }

        const token = authorization.split("=")[1].split(",")[0]

        try {
            return verify(token, process.env.ACCESS_SECRET)
        } catch (err) {
            return null
        }
    },
}
