const { comment } = require("../../models")

module.exports = async (req, res) => {
  console.log(req.body)
  let commetList = await comment.findAll({
    where: {
      post_id: req.body.post_id,
      //   comment_user_id: req.body.comment_user_id,
    },
  })
  //   console.log(commetList)

  res.send(commetList)
}
