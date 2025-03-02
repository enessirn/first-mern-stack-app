const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();
const PersonModel = require("./models/Persons")
// mongose baglantisi
const DATABASE_URL = process.env.DB_URL

mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB bağlantısı başarılı!"))
  .catch((err) => console.error("MongoDB bağlantısı hatalı:", err));
  //

  app.post("/create-person", (req, res) => {
    PersonModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
  })

app.listen(5000, () => {
  console.log("server is up");
});
