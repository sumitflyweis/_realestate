const express = require("express");
const router = express.Router();
const tourController = require("../controller/scheduleTour");

// Get all tours
router.get("/", tourController.getAllTours);

// Get tour by ID
router.get("/:id", tourController.getTourById);

// Create a new tour
router.post("/", tourController.createTour);

// Update a tour
router.put("/:id", tourController.updateTour);

// Delete a tour
router.delete("/:id", tourController.deleteTour);

module.exports = router;
