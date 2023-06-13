const mongoose = require('mongoose');

const healthSchema = mongoose.Schema({
    image: {
        type: String,
        default:
          "https://cdn.pixabay.com/photo/2022/06/24/17/35/relaxation-7282116_1280.jpg",
      }, 
    desc: {
        type: String
    },
  })

const healthmodel = mongoose.model('healthandwellness', healthSchema);

module.exports = healthmodel;