const { post } = require("../../models")
const { generateAccessToken, generateRefreshToken } = require("../tokenFunc")

// ***** 해당 게시물의 아이디가 들어와야함
module.exports = async(req, res) => {
    console.log('postedit: ', req.body) // 기존 제목, 내용이 보여짐

    const {post_title, post_content} = req.body // 수정된 제목,내용

    if( !post_title || !post_content ){
      res.status(401).send('제목과 내용은 필수입니다.')
    }else{
      const finId= await post.findOne({

      })

      // 1. 해당 게시물을 찾아야함 -> update의 where로 이용
      const postEdit = await post.update(
        {
          id: id,
          post_title: req.body.post_title, 
          post_content: req.body.post_content,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, 
        { where: { id: 1 } }  // where 를 기준으로 해당게시글을 찾아서 지워야할듯함
      )
      
      res
        .cookie("jwt", generateAccessToken(postEdit.dataValues), { httpOnly: true })
        .status(200)
        .send({ message: "ok" })
    }
};