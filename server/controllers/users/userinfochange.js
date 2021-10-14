const { user } = require("../../models")
const { animal } = require("../../models")
const { generateAccessToken, generateRefreshToken } = require("../tokenFunc")

module.exports = async(req, res) => {
	//console.log(req.body);
	// 반려동물 추가
	const {userId, animalName, animalYob, selectType} = req.body

	// 정보가 하나라도 없을 경우
	if(
		!userId ||
		!animalName ||
		!animalYob ||
		!selectType
	){
		res.status(401).send("정보를 모두 기입해야합니다.")
	}
	else{
		// const userInfo = await user.findOne({
		// 	where: {
		// 		user_id: userId
		// 	},
		// })
		// console.log('userInfo',userInfo);
		await animal.create({
			userId: userId,
			animaltype: selectType,
			animalname: animalName,
			animalyob: animalYob,
		})
		res.status(201).send({message: "ok"})
	}
};