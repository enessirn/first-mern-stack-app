const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

const PersonModel = require("./models/Persons");
// mongose baglantisi
const DATABASE_URL = process.env.DB_URL;

mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB bağlantısı başarılı!"))
  .catch((err) => console.error("MongoDB bağlantısı hatalı:", err));
//

// get işlemi
app.get("/", async (req, res) => {
  try {
    const persons = await PersonModel.find();
    res.json(persons)
  } catch (error) {
    res.status(500).json({message: "Error",error})
  }
});
app.get("/get-person/:id", (req,res) => {
  const id = req.params.id;
  PersonModel.findById(id)
  .then(persons => res.json(persons))
  .catch(err => res.json(err))
})
// create işlemi
app.post("/create-person", (req, res) => {
  PersonModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// dğzenleme işlemi

app.put("/update-person/:id", async (req,res) => {
  const {id} = req.params;
  const {fullname, age, phone, email} = req.body;
  try {
    const person = await PersonModel.findByIdAndUpdate(id,{fullname, age, phone, email},{ new: true })
    if(!person) {
      return res.status(404).json({message: "Person not found"})
    }
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
})

// delete islemi

app.delete("/delete-person/:id", async (req, res) => {
  const {id} = req.params;

  try {
    const person = await PersonModel.findByIdAndDelete(id)
    if(!person) {
      return res.status(404).json({message: "Person not found"})
    }
    res.status(200).json({ message: "Person deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
})
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log("server is up", PORT);
});
