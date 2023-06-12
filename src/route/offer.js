const express = require("express");
const router = express.Router();
const offerController = require("../controller/offer");

// Create a new offer
router.post("/", offerController.createOffer);

router.get("/", offerController.getAllOffer);

// Get offer by ID
router.get("/:id", offerController.getOfferById);

// Update an existing offer
router.put("/:id", offerController.updateOffer);

// Delete an offer
router.delete("/:id", offerController.deleteOffer);

module.exports = router;
