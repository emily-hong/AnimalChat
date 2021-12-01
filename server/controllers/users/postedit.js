const { user } = require("../../models")
const { post } = require("../../models")
const { isAuthorized } = require("../tokenFunc")

module.exports = async (req, res) => {
  console.log("server/postedit.js::::::::::::", req.body)

  //console.log(req.file)
  //   console.log(req)
  const { id, user_id, post_title, post_img, post_content } = req.body
  // const checkUser = await post.findOne({
  //   where: {
  //     user_id: user_id,
  //     id: id
  //   }
  // })
  // if(!checkUser){
  //   res.send("게시물 작성자가 아닙니다.")
  // }
  // else if(!post_title || !post_content){
  //   res.send("제목과 내용은 필수로 수정해주세요 :)")
  // }
  // else{

  // }


  // post_users의 id, post_id, userid, createdAt, updatedAt 가져와야함
  if (req.file) {
    res.send({
      fileName: req.file.filename,
    })
  } else if (!post_title || !post_content) {
    res.status(401).send("제목과 내용 사진은 필수입니다.")
  } else {
    // 제목과 내용을 사진을 모두 작성한 경우
    await post.update(
      {
        // user_id: req.body.user_id,
        post_title: req.body.post_title,
        post_content: req.body.post_content,
        post_img: req.body.post_img,
      },
      {
        where: {
          id: req.body.post_id,
        },
      }
    )
    res.status(200).send({ message: "ok" })
  }
}