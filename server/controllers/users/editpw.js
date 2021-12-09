const { user } = require('../../models')
const { isAuthorized } = require('../tokenFunc');
const { encrypto } = require("../users/setpw")

module.exports = async(req, res) => {
    //console.log(req.body)
    //비밀번호 변경 
    //기존에 있는 정보인지 확인하고 (토큰에 있는 정보인지 확인하고)
    //update로 데이터베이스 수정 
    const accessTokenData = isAuthorized(req);
    console.log(accessTokenData)
    if (!accessTokenData) {
        res.json({ data: null, message: 'not authorized' });
    }

    // const { user_id, password } = accessTokenData
    const { user_id, nickname } = accessTokenData
    const { password } = req.body;
    const enpw = encrypto(password); 
    //user_id와 password가 토큰발급한 정보와 같으면 비밀번호를 업데이트해라  
    user.update({
        password: enpw
    }, 
    { where: { 
        user_id: user_id,
        nickname: nickname
        }
    })
    res.status(201).send()
};