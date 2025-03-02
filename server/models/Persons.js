const mongoose = require("mongoose")

const PersonSchema = new mongoose.Schema({
    fullname: String,
    age: Number,
    phone: String,
    email: String,
})

const PersonModel = mongoose.model("PersonList",PersonSchema);
module.exports = PersonModel