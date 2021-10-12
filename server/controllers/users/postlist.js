const { post } = require("../../models")

module.exports = async (req, res) => {
  // 해당 동물의 작성된 게시판 목록을 보여줌
  res.send(await post.findAll({}))
}
