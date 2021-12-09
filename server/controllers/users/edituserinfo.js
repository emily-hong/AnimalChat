const { user } = require("../../models")
const { animal } = require("../../models")
const { generateAccessToken, generateRefreshToken } = require("../tokenFunc")
const { isAuthorized } = require('../tokenFunc');

module.exports = async(req, res) => {
	//console.log("반려동물추가 : ", req.body);
	// 반려동물 추가
	const {userId, animalName, animalYob, selectType, animal_photo} = req.body
	const accessTokenData = isAuthorized(req);
	if(!accessTokenData){
    return res.json({ data: null, message: '회원정보가 일치하지 않습니다.' })
  }

	if (req.file) {
    res.send({
      fileName: req.file.filename,
    })
  }else if(
		!userId ||
		!animalName ||
		!animalYob ||
		!selectType
	){
		res.status(401).send("정보를 모두 기입해야합니다.")
	}
	else{
		await animal.create({
			userId: userId,
			animaltype: selectType,
			animalname: animalName,
			animalyob: animalYob,
			animal_photo: animal_photo,
		})
		res.status(201).send({message: "ok"})
	}
};