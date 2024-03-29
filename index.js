const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const multer = require("multer");
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyparser = require("body-parser");

const serverless = require("serverless-http");


require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 2008

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Db conneted succesfully");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/home",(req, res) => {
  res.status(200).send({msg:"Working App"});
});

 app.use("/api/v1/",require("./src/route/userlogin"));
 app.use("/api/v1",require("./src/route/seller"))
 app.use("/api/v1/wish",require("./src/route/wishlist"))
 app.use("/api/v1/paymentContr",require("./src/route/paymentController"))
 app.use("/api/v1/scheduleTourr",require("./src/route/scheduleTour"))
 app.use("/api/v1/offerr",require("./src/route/offer"))
 app.use("/api/v1/bannerr",require("./src/route/banner"))
 app.use("/api/v1/loann",require("./src/route/loan"))
 app.use("/api/v1/healthh",require("./src/route/healthAndWellness"))
 app.use("/api/v1/homeinsp",require("./src/route/homeInspector"))
 app.use("/api/v1/homeserv",require("./src/route/homeserv"))
//  app.use("/api/v1/ServiceToSelect",require("./src/route/whichServiceToSelect"))


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = {
  handler: serverless(app),
};

