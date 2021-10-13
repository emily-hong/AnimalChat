const { user, post } = require("../../models")
const { isAuthorized } = require('../tokenFunc');


module.exports = async (req, res) => {
  // 해당 동물의 작성된 게시판 목록을 보여줌
  // 글의 목록중 하나를 누르면 
  // post 글쓴이를 찾아서 
  // post 제목, 내용, 사진, 날짜가 들어와야함 
  
  res.send(await post.findAll({}))
  
  // post.findOne({
  //   post_title: 
  // })


  


}
