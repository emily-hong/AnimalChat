const { user } = require('../../models')
require("dotenv").config();
const { 
  generateAccessToken,
  sendAccessToken
} = require('../tokenFunc');

module.exports = async(req, res) => {
    //비밀번호 변경 
    //기존에 있는 정보인지 확인하고 
    //인증을 한번 해야되는것 같음 
    //여기서 다시 토큰 발급
    
    const userInfoData = await user.findOne({
        where: {
            password: req.body.password
        }
    })
    .then((data) => {
        if(!userInfoData){ //수정전 비밀번호 입력시 일치하지 않는 정보일 때 
            return res.status(401).send({ data: null, message: 'not authorized' })
          }
          else{ //수정전 비밀번호 입력시 일치하는 정보일 때 
            const accessToken = generateAccessToken(data.dataValues)
            return sendAccessToken(res, accessToken, data.dataValues)
          }
    })
    .catch((err) => {
        console.log(err);
      })
};