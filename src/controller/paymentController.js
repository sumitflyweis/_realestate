const PaymentCalc = require("../model/paymentcalculator");

exports.createPaymentCalc = async (req, res) => {
  try {
    const paymentCalc = new PaymentCalc(req.body);
    const savedPaymentCalc = await paymentCalc.save();
    res.status(201).json(savedPaymentCalc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPaymentCalcById = async (req, res) => {
  try {
    const paymentCalc = await PaymentCalc.findById(req.params.id);
    if (!paymentCalc) {
      return res.status(404).json({ error: "PaymentCalc not found" });
    }
    res.json(paymentCalc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getAllPaymentCalcs = async (req, res) => {
  try {
    const paymentCalcs = await PaymentCalc.find();
    res.json(paymentCalcs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update payment calculation
exports.updatePaymentCalc = async (req, res) => {
  try {
    const paymentCalc = await PaymentCalc.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!paymentCalc) {
      return res.status(404).json({ error: "PaymentCalc not found" });
    }
    res.json(paymentCalc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete payment calculation
exports.deletePaymentCalc = async (req, res) => {
  try {
    const paymentCalc = await PaymentCalc.findByIdAndDelete(req.params.id);
    if (!paymentCalc) {
      return res.status(404).json({ error: "PaymentCalc not found" });
    }
    res.json({ message: "PaymentCalc deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

