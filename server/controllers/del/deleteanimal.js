const { animal } = require("../../models")

module.exports = async (req, res) => {
  //console.log(req.body)
  await animal.destroy({
    where: {
      userId: req.body.userId,
      id: req.body.id,
    },
  })

  res.send("delete ok")
}
