const express = require("express");
const router = express.Router();
const healthController = require("../controller/healthAndWellness");

// Create a new health item
router.post("/", healthController.createHealth);

// Get all health items
router.get("/", healthController.getHealth);


router.get("/:id", healthController.getHealthById);
// Update a specific health item
router.put("/:id", healthController.updateHealth);

// Delete a specific health item
router.delete("/:id", healthController.deleteHealth);

module.exports = router;
