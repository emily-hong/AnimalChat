const { post } = require("../../models")
const { generateAccessToken, generateRefreshToken } = require("../tokenFunc")

module.exports = (req, res) => {
    // 기존게시물 ->, 새로 작성한 게시물 데이터로 업데이트
    console.log(req.body)
    const {post_title, post_content} = req.body

    if( !post_title || !post_content ){
        res.status(401).send('제목과 내용은 필수입니다.')
    }else{
        
    }
};