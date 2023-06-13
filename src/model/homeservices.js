const mongoose = require('mongoose');

const homeserviceSchema = mongoose.Schema({
    image: {
        type: String,
        default:
          "https://cdn.pixabay.com/photo/2022/06/24/17/35/relaxation-7282116_1280.jpg",
      }, 
    name: {
        type: String,
        default:""
    },
  })

const homeservmodel = mongoose.model('homeservice', homeserviceSchema);

module.exports = homeservmodel;