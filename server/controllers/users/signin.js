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
        id: req.body.id,
        password: req.body.password
      }
    })
    .then((data) => {
      //console.log(data)
      if(!data){
        return res.status(404).send('invalid user')
      }
      else{
      // const { id, password } = userInfo
      const accessToken = generateAccessToken(data.dataValues)
      return sendAccessToken(res, accessToken, data.dataValues)
      }
    })
    .catch((err) => {
      console.log(err);
    })
};