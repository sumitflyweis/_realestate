const mongoose = require('mongoose');
const objectid = mongoose.Schema.Types.ObjectId;
const loanSchema = mongoose.Schema({
    image: {
        type: String,
        default:
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      }, 
    name: {
        type: String,
        default:""
    },
    userId:{
        type:objectid,
        ref:"userProfile"
    }
  })

const loanmodel = mongoose.model('loan', loanSchema);

module.exports = loanmodel;