const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/CRUD-SAT")
//   .then(() => {
//     console.log("Database Connected successfully");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const dataCrud = new mongoose.Schema({
  Name: {
    type: String,
  },
  Password: {
    type: Number,
  }
});

const usersData = mongoose.model(usersData, 'userCredential');

module.exports = usersData;
