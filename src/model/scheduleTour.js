const mongoose = require("mongoose");
const objectid = mongoose.Schema.Types.ObjectId;
const scheduleTourSchema = mongoose.Schema(
  {
    pickAdate: {
      type: String,
      default: "",
    },
    howWouldYouLikeATour: {
      type: String,
      default: "",
    },
    pickAtime: {
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

module.exports = mongoose.model("scheduletourr", scheduleTourSchema);
