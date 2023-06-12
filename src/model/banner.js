const mongoose = require('mongoose');

const bannerSchema = mongoose.Schema({
    image: {
        type: String,
        default:
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      }, 
    desc: {
        type: String
    },
  })

const land_model = mongoose.model('banner', bannerSchema);

module.exports = land_model;