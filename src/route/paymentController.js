const express = require("express");
const router = express.Router();
const paymentCalcController = require("../controller/paymentController");

router.post("/",paymentCalcController.createPaymentCalc)

// GET all payment calculations
router.get("/", paymentCalcController.getAllPaymentCalcs);

// GET payment calculation by ID
router.get("/:id", paymentCalcController.getPaymentCalcById);

// Update payment calculation
router.put("/:id", paymentCalcController.updatePaymentCalc);

// Delete payment calculation
router.delete("/:id", paymentCalcController.deletePaymentCalc);

module.exports = router;
