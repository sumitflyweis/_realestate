const ScheduleTour = require("../model/scheduleTour");

exports.createTour = async (req, res) => {
  try {
    const { pickAdate, howWouldYouLikeATour, pickAtime,sellerId,
        userId } = req.body;

    const newTour = new ScheduleTour({
      pickAdate,
      howWouldYouLikeATour,
      pickAtime,
      sellerId,
      userId
    });

    const savedTour = await newTour.save();

    res.status(201).json(savedTour);
  } catch (error) {
    console.error("Error creating tour:", error);
    res.status(500).json({ error: "Failed to create tour" });
  }
};


exports.getAllTours = async (req, res) => {
  try {
    const tours = await ScheduleTour.find();
    res.status(200).json({msg:tours});
  } catch (error) {
    console.error("Error getting tours:", error);
    res.status(500).json({ error: "Failed to get tours" });
  }
};

exports.getTourById = async (req, res) => {
  try {
    const tour = await ScheduleTour.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ error: "Tour not found" });
    }
    res.status(200).json({msg:tour});
  } catch (error) {
    console.error("Error getting tour:", error);
    res.status(500).json({ error: "Failed to get tour" });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const updatedTour = await ScheduleTour.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTour) {
      return res.status(404).json({ error: "Tour not found" });
    }
    res.status(200).json(updatedTour);
  } catch (error) {
    console.error("Error updating tour:", error);
    res.status(500).json({ error: "Failed to update tour" });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const deletedTour = await ScheduleTour.findByIdAndDelete(req.params.id);
    if (!deletedTour) {
      return res.status(404).json({ error: "Tour not found" });
    }
    res.status(200).json({ message: "Tour deleted successfully" });
  } catch (error) {
    console.error("Error deleting tour:", error);
    res.status(500).json({ error: "Failed to delete tour" });
  }
};

