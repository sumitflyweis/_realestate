const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;
const paymentcalcSchema = mongoose.Schema(
  {
   homePrice: {
      type: String,
      default:""
    },
    downPayment: {
      type: String,
      default:""
    },
    interestRate:{
      type:String,
      default:""
    },
    loantype:{
      type:String,
      default:""
    },
    propertytax:{
      type:String,
      default:""
    },
    HoaDues:{
      type:String,
      default:""
    },
    zipcode:{
      type:String,
      default:""
    },
    homeinsurance:{
      type:String,
      default:""
    },
    mortgageInsurance:{
      type:String,
      default:""
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("paymentcalc", paymentcalcSchema);
