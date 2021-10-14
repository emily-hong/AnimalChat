const { user, post } = require("../../models")
const { isAuthorized } = require('../tokenFunc');

module.exports = (req, res) => {
//  console.log(req.body)
const accessTokenData = isAuthorized(req)
const { user_id } = accessTokenData

const userCheck = user.findOne({
    where: {
        user_id: user_id
    }
})

if(!userCheck){
  res.status(401).send('게시물을 삭제할 수 없습니다.')
}
else{
  post.destroy({
  where: {
    user_id: user_id
  }
})
res.status(205).send()
}

// //res.send()
// res.status(205).send()
};