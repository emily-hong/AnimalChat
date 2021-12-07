const { like } = require("../../models");
const user = require("../../models/user");

module.exports = async (req, res) => {
  //res.send()
  //console.log("server/like---------",req.body)
  //{ user_id: 'kimcoco123', comment_id: 33 }
  const { user_id, comment_id } = req.body;
  const liked = await like.findOne({
    where: {
      user_id: user_id, 
      comment_id: comment_id
    }
  })
  
  let likes; 
  if(liked){
    await liked.destroy();
    res.send("좋아요 해제")
  }
  else{
    likes = await like.create({
      user_id: user_id,
      comment_id: comment_id
    })
    res.send("좋아요 누름")
  }
}