const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunc');

module.exports = async(req, res) => {
  //console.log(req.headers)
  const accessTokenData = isAuthorized(req);
  //console.log(accessTokenData)
  if (!accessTokenData) {
    return res.json({ data: null, message: 'not authorized' });
  }
 
  const { id } = accessTokenData
  const userInfoData = await user.findOne({
    where: {
      user_id: id
    }
  })
  if(!userInfoData){
    return res.status(401).send({ data: null, message: 'not authorized' });
  }
  else{
    return res.send({ data: { userInfo: { accessTokenData } }, message: 'ok' });
  }
  
};