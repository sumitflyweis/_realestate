const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeInspector");

// Create a new health item
router.post("/", homeController.createHomeItem);


router.get("/", homeController.getHomeItems);

// Get all health items
router.get("/:id", homeController.getHomeItemsById);

// Update a specific health item
router.put("/:id", homeController.updateHomeItem);

// Delete a specific health item
router.delete("/:id", homeController.deleteHomeItem);

module.exports = router;
