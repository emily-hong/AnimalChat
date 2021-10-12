const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunc');

module.exports = async(req, res) => {
  //console.log(req.headers)
  const accessTokenData = isAuthorized(req);
//  console.log(accessTokenData)
//   {
//     id: 3,
//     user_id: 'kimcoco',
//     nickname: 'kim',
//     password: 'a123',
//     createdAt: '2021-10-12T04:05:10.000Z',
//     updatedAt: '2021-10-12T04:05:10.000Z',
//     iat: 1634022850,
//     exp: 1634109250
//   }
  if (!accessTokenData) {
    return res.json({ data: null, message: 'not authorized' });
  }
 
  const { user_id, nickname } = accessTokenData
  const userInfoData = await user.findOne({
    where: {
      user_id: user_id, 
      nickname : nickname
    }
  })
  if(!userInfoData){
    return res.status(401).send({ data: null, message: 'not authorized' });
  }
  else{
    return res.send({ data: { userInfo: { accessTokenData } }, message: 'ok' });
  }
  
};