const { post } = require("../../models")
const { generateAccessToken, generateRefreshToken } = require("../tokenFunc")

// ***** 해당 게시물의 아이디가 들어와야함
module.exports = async(req, res) => {
    console.log('postedit: ', req.body)
    const {post_title, post_content} = req.body

    if( !post_title || !post_content ){
        res.status(401).send('제목과 내용은 필수입니다.')
    }else{
      // 해당게시물을 새로작성한 게시물로 데이터베이스에 업데이트
      // postread에 업데이트된 게시물로 보이기

      // 1. 해당 게시물의 아이디를 찾아야함
      // 2. 업데이트

      // 1.
      // 2.
      const postEdit = await post.update(
        {
          post_title: req.body.post_title, 
          post_content: req.body.post_content,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, 
        { where: { id: 1 } }  // ***
      )
      
      res
        .cookie("jwt", generateAccessToken(postEdit.dataValues), { httpOnly: true })
        .status(200)
        .send({ message: "ok" })
    }
};