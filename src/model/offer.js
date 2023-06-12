const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;
const offerSchema = mongoose.Schema(
  {
    tellUsAboutYourSelf: {
      type: String,
      default: "",
    },
    fullName:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:""
    },
    phone:{
        type:String,
        default:""
    },
    cobuyer:{
        type:String,
        default:""
    },
    howWillyouBePaying: {
      type: String,
      default: "",
    },
    amount:{
        type:String,
        default:""
    },
    downpayment:{
        type:String,
        deafult:""
    },
    percentage:{
        type:String,
        default:""
    },
    timelineInMind:{
        type:String,
        default:""
    },
    uploadDoc: {
      type: String,
      default: "",
    },
    sellerId:{
        type:objectid,
        ref:"sellerProfile"
    },
    userId:{
        type:objectid,
        ref:"userProfile"
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("offer", offerSchema);
