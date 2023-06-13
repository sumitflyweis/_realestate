const Health = require("../model/healthAndWellness");

exports.createHealth = async (req, res) => {
  try {
    const { image, desc } = req.body;
    const newHealth = new Health({ image, desc });
    const savedHealth = await newHealth.save();
    res.status(200).json(savedHealth);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHealth = async (req, res) => {
  try {
    const healthItems = await Health.find();
    res.status(200).json({msg:healthItems});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHealthById = async (req, res) => {
  try {
    const id = req.params.id;
    const healthItems = await Health.findById(id);
    res.status(200).json({msg:healthItems});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateHealth = async (req, res) => {
  try {
    const { image, desc } = req.body;
    const updatedHealth = await Health.findByIdAndUpdate(
      req.params.id,
      { image, desc },
      { new: true }
    );
    res.status(200).json(updatedHealth);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteHealth = async (req, res) => {
  try {
    await Health.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "Health item deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
