const {user, comment} = require("../../models")
const { isAuthorized } = require('../tokenFunc');

module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req)
  console.log('req.body : ', req.body);
  const { user_id } = accessTokenData

  const userCheck = user.findOne({
    where: {
      user_id: user_id,
    }
  })

  if(!userCheck){
    res.status(401).send('댓글을 삭제할 수 없습니다.')
  }else{
    comment.destroy({
      where:{
        comment_user_id: user_id,
        // 댓글 내용으로 삭제 test
      }
    })
  }
  res.status(205).send()
};