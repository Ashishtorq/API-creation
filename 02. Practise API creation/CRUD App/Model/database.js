const mongoose = require("mongoose");


const dataCrud = new mongoose.Schema({
  Name: {
    type: String
  },
  Password: {
    type: Number
  }
});

const userCred = mongoose.model('userCred', dataCrud);

module.exports = userCred;
