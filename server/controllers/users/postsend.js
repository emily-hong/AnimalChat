const { post } = require("../../models")
const { generateAccessToken, generateRefreshToken } = require("../tokenFunc")
const multer = require("multer")

module.exports = async (req, res) => {
  //console.log(req.body)
  //   const { post_title, post_content } = req.body

  // post_users의 id, post_id, userid, createdAt, updatedAt 가져와야함

  //   if (!post_title || !post_content) {
  //     res.status(401).send("제목과 내용은 필수입니다.")
  //   } else {
  //     // 제목과 내용을 모두 적은 경우
  //     const postCreate = await post.create({
  //       post_title: req.body.post_title,
  //       post_content: req.body.post_content,
  //     })
  //     res
  //       .cookie("jwt", generateAccessToken(postCreate.dataValues), {
  //         httpOnly: true,
  //       })
  //       .status(200)
  //       .send({ message: "ok" })
  //   }
  //////////////////여기서 부터 사진 업로드 구현/////////////////

  res.send({
    fileName: req.file.filename,
  })
}

