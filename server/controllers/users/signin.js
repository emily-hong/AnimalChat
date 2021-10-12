const { user } = require('../../models');
require("dotenv").config();
const { 
  generateAccessToken,
  sendAccessToken
} = require('../tokenFunc');


module.exports = async(req, res) => {
  //console.log(req.body) //{ id: 'kimcoding3', password: 'a123' }
  user.findOne({
      where: {
        user_id: req.body.id,
        password: req.body.password
      }
    })
    .then((data) => {
      // console.log(data)
      // dataValues: {
      //   id: 3,
      //   user_id: 'kimcoco',
      //   password: 'a123',
      //   nickname: 'kim',
      //   createdAt: 2021-10-12T04:05:10.000Z,
      //   updatedAt: 2021-10-12T04:05:10.000Z
      // }
      if(!data){
        return res.status(404).send('invalid user')
      }
      else{
      const accessToken = generateAccessToken(data.dataValues)
      //console.log(data.dataValues)
      //console.log(accessToken) //토큰 잘발급되고 
      return sendAccessToken(res, accessToken, data.dataValues)
      }
    })
    .catch((err) => {
      console.log(err);
    })
};