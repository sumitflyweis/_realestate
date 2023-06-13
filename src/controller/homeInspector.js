const Health = require("../model/homeInspector");

exports.createHomeItem = async (req, res) => {
  try {
    const { image, name } = req.body;
    const newHealthItem = new Health({ image, name });
    const savedHealthItem = await newHealthItem.save();
    res.status(200).json(savedHealthItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHomeItems = async (req, res) => {
  try {
    const healthItems = await Health.find();
    res.status(200).json({msg:healthItems});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getHomeItemsById = async (req, res) => {
    try {
        const id = req.params.id
      const healthItems = await Health.findById(id);
      res.status(200).json({msg:healthItems});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.updateHomeItem = async (req, res) => {
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

exports.deleteHomeItem = async (req, res) => {
  try {
    await Health.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "Health item deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
