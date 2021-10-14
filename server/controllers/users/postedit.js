const { user } = require("../../models")
const { post } = require("../../models")
const { isAuthorized } = require('../tokenFunc');

// ***** 해당 게시물의 아이디가 들어와야함
module.exports = async(req, res) => {
  const accessTokenData = isAuthorized(req);


  if(!accessTokenData){
    return res.json({ data: null, message: '회원정보가 일치하지 않습니다.' })
  }
  
  
  const { user_id } = accessTokenData

  post.update({
          post_title: req.body.post_title, 
          post_content: req.body.post_content,
          // createdAt: new Date(),
          // updatedAt: new Date(),
        }, 
        { where: { // where 를 기준으로 해당게시글을 찾아서 지워야함
          user_id: 1,
        }} 
      )
};
