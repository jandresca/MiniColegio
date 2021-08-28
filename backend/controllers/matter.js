const Matter = require("../models/matter");

const registerMatter = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.description ||
    !req.body.credits
  )
    return res.status(400).send("Incomplete data");

  let existingMatter = await Matter.findOne({ name: req.body.name });
  if (existingMatter)
    return res.status(400).send("The matter is already registered");

  let matter = new Matter({
    name: req.body.name,
    description: req.body.description,
    credits: req.body.credits
  });

  let result = await matter.save();
  if (!result) return res.status(400).send("Failed to register matter");
  return res.status(200).send({ result });

}
module.exports = {
  registerMatter,
};
