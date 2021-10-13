const { post } = require("../../models")
const { generateAccessToken, generateRefreshToken } = require("../tokenFunc")
const { isAuthorized } = require('../tokenFunc');

// ***** 해당 게시물의 아이디가 들어와야함
module.exports = async(req, res) => {
    console.log('postedit: ', req.body)
    /*
    {
      user_id: 1,
      post_title: '수정',
      post_content: '수정',
      post_img: '/img/imgfile1634123833807.jpeg'
    }
    */
    
    const {post_title, post_content, post_img} = req.body // 수정된 제목,내용

    // const accessTokenData = isAuthorized(req)
    // console.log(accessTokenData); // null

    if( !editTitle || !editContent ){
      res.status(401).send('제목과 내용은 필수입니다.')
    }else{
      // 1. 해당 게시물을 찾아야함 -> update의 where에서 user_id
      const postEdit = await post.update(
        {
          user_id: 'userid',
          post_title: req.body.post_title, 
          post_content: req.body.post_content,
          post_img: req.body.post_img
        }, 
        { where: {
          id: 3
          // user_id : '1',
          }
        }
      )
      
      res
        .cookie("jwt", generateAccessToken(postEdit.dataValues), { httpOnly: true })
        .status(200)
        .send({ message: "ok" })
    }
};