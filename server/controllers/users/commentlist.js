const { comment } = require("../../models")

module.exports = async (req, res) => {
  // console.log("commentlist : ",req.body) // { post_id: 16, comment_user_id: 'hong123' }
  // 댓글의 유저아이디, 댓글내용, createdAt
  let commetList = await comment.findAll({
    where: {
      post_id: req.body.post_id,  // 해당게시물의 아이디
      comment_user_id: req.body.comment_user_id,
    },
  })
  console.log("commentList : ", commetList)

  res.send(commetList)
}
