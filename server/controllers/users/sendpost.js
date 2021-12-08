const { user, post } = require("../../models");
const { isAuthorized } = require('../tokenFunc');

module.exports = async (req, res) => {

  const accessTokenData = isAuthorized(req);
  // console.log(accessTokenData) //인증확인 부분  - 글쓴이가 토큰 정보에 있는지 
  if(!accessTokenData){
    return res.json({ data: null, message: '회원정보가 일치하지 않습니다.' })
  }
  
  //const { user_id } = accessTokenData
  const { post_title, post_content } = req.body
  
  if (req.file) {
    res.send({
      fileName: req.file.filename,
    })
  }
  else if (!post_title || !post_content) {
    res.status(401).send("제목과 내용 사진은 필수입니다.")
  } 

  else {
  // 제목과 내용을 사진을 모두 작성한 경우
    // const userData =  await post.findAll({
    //   include: [
    //     { 
    //       model: user,
    //       attributes: [ 'user_id' ]
    //      }
    //   ],
    //   where: { user_id: user_id }
    // })

    //   where:  { user_id: user_id },
    //   include: [{
    //     model: user, //user table 
    //     attributes: [ 'user_id', 'nickname' ],
    //     }]
    // })

    // let userDatas = await post.findOne({
    //   where,
    //   include: [{
    //     model: user, //user table 
    //     attributes: [ 'user_id', 'nickname' ],
    //     }]
    //   }

    // if(userData){
      post.create({
        user_id: req.body.user_id,
        post_title: req.body.post_title,
        post_content: req.body.post_content,
        post_img: req.body.post_img,
        animalcategory: req.body.animalcategory,
      })
      res.status(200).send({ message: "ok" })
    //}

  //////////////////여기서 부터 사진 업로드 구현/////////////////
  }
}