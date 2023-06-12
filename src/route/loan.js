const express = require("express");
const router = express.Router();
const loanController = require("../controller/loan");

// Create a new loan
router.post("/", loanController.createLoan);

router.get("/", loanController.getAllLoan);

// Get loan by ID
router.get("/:id", loanController.getLoanById);

// Update an existing loan
router.put("/:id", loanController.updateLoan);

// Delete a loan
router.delete("/:id", loanController.deleteLoan);

module.exports = router;
