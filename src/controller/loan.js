const loanModel = require("../model/loan");


exports.createLoan = async (req, res) => {
  try {
    const newLoan = new loanModel(req.body);
    const savedLoan = await newLoan.save();
    res.status(200).json(savedLoan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getAllLoan = async (req, res) => {
  try {
    const loan = await loanModel.find();
    if (!loan) {
      return res.status(404).json({ error: "Loan not found" });
    }
    res.status(200).json({ msg: loan });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.getLoanById = async (req, res) => {
  try {
    const loanId = req.params.id;
    const loan = await loanModel.findById(loanId);
    if (!loan) {
      return res.status(404).json({ error: "Loan not found" });
    }
    res.status(200).json({ msg: loan });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.updateLoan = async (req, res) => {
  try {
    const loanId = req.params.id;
    const updatedLoan = await loanModel.findByIdAndUpdate(loanId, req.body, {
      new: true,
    });
    if (!updatedLoan) {
      return res.status(404).json({ error: "Loan not found" });
    }
    res.status(200).json(updatedLoan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteLoan = async (req, res) => {
  try {
    const loanId = req.params.id;
    const deletedLoan = await loanModel.findByIdAndDelete(loanId);
    if (!deletedLoan) {
      return res.status(404).json({ error: "Loan not found" });
    }
    res.status(200).json({ message: "Loan deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
