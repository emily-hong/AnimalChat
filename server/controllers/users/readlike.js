const { like, comment, post } = require("../../models")

module.exports = async (req, res) => {
    //res.send()
    console.log("server/readlike.js:::::::::",req.body)
    const { user_id, comment_id, post_id } = req.body;
    const list = await like.findOne({
        where: {
            user_id: user_id,
            comment_id: comment_id,
            post_id: post_id
        }
    })
    if(!list){
        res.send("댓글 좋아요 없음")
    }
    else{
        res.send(list)
    }
}