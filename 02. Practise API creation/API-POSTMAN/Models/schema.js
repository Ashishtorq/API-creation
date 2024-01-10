const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
  Name: {
    type: String
  },
  Email: {
    type: String
  },
  id: {
    type: Number
  },
});

module.exports = mongoose.model("prac_collection", modelSchema);
