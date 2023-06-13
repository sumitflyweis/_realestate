const Health = require("../model/homeservices");

exports.createHomeserv = async (req, res) => {
  try {
    const { image, name } = req.body;
    const newHealthItem = new Health({ image, name });
    const savedHealthItem = await newHealthItem.save();
    res.status(200).json(savedHealthItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHomeserv = async (req, res) => {
  try {
    const healthItems = await Health.find();
    res.status(200).json({msg:healthItems});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getHomeservById = async (req, res) => {
    try {
        const id = req.params.id
      const healthItems = await Health.findById(id);
      res.status(200).json({msg:healthItems});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.updateHomeserv = async (req, res) => {
  try {
    const { image, name } = req.body;
    const updatedHealthItem = await Health.findByIdAndUpdate(
      req.params.id,
      { image, name },
      { new: true }
    );
    res.status(200).json(updatedHealthItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteHomeserv = async (req, res) => {
  try {
    await Health.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "Health item deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
