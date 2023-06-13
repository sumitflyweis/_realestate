const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeservices");

// Create a new health item
router.post("/", homeController.createHomeserv);


router.get("/", homeController.getHomeserv);

// Get all health items
router.get("/:id", homeController.getHomeservById);

// Update a specific health item
router.put("/:id", homeController.updateHomeserv);

// Delete a specific health item
router.delete("/:id", homeController.deleteHomeserv);

module.exports = router;
