const { post } = require("../../models")
const { generateAccessToken, generateRefreshToken } = require("../tokenFunc")
const { isAuthorized } = require('../tokenFunc');

// ***** 해당 게시물의 아이디가 들어와야함
module.exports = async(req, res) => {
    console.log('postedit: ', req.cookies)
    
    const {editTitle, editContent} = req.body // 수정된 제목,내용

    // 기존 내용 데이터 찾기
    // const prePostFind = await post.findOne({
    //   where: {id: 20}
    // })
    // console.log(prePostFind);

    if( !editTitle || !editContent ){
      res.status(401).send('제목과 내용은 필수입니다.')
    }else{
      // 1. 해당 게시물을 찾아야함 -> update의 where로 이용
      const postEdit = await post.update(
        {
          post_title: req.body.editTitle, 
          post_content: req.body.editContent
        }, 
        { where: { 
            post_title ,
            post_content
          }
        }  // where 를 기준으로 해당게시글을 찾아서 지워야할듯함
      )
      
      res
        .cookie("jwt", generateAccessToken(postEdit.dataValues), { httpOnly: true })
        .status(200)
        .send({ message: "ok" })
    }
};