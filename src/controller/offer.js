const offerModel = require("../model/offer");

// Example controller function
exports.createOffer = async (req, res) => {
  try {
    const newOffer = new offerModel(req.body);
    const savedOffer = await newOffer.save();
    res.status(200).json(savedOffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.getAllOffer = async (req, res) => {
    try {
     
      const offer = await offerModel.find()
      if (!offer) {
        return res.status(404).json({ error: "Offer not found" });
      }
      res.status(200).json({msg:offer});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Example controller function
exports.getOfferById = async (req, res) => {
  try {
    const offerId = req.params.id;
    const offer = await offerModel.findById(offerId)
    if (!offer) {
      return res.status(404).json({ error: "Offer not found" });
    }
    res.status(200).json({msg:offer});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Example controller function
exports.updateOffer = async (req, res) => {
  try {
    const offerId = req.params.id;
    const updatedOffer = await offerModel.findByIdAndUpdate(
      offerId,
      req.body,
      { new: true }
    );
    if (!updatedOffer) {
      return res.status(404).json({ error: "Offer not found" });
    }
    res.status(200).json(updatedOffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Example controller function
exports.deleteOffer = async (req, res) => {
  try {
    const offerId = req.params.id;
    const deletedOffer = await offerModel.findByIdAndDelete(offerId);
    if (!deletedOffer) {
      return res.status(404).json({ error: "Offer not found" });
    }
    res.status(200).json({ message: "Offer deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
