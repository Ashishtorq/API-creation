const mongoose = require("mongoose");


const dataSchema = new mongoose.Schema({
   Name:String,
   Email:String,
   Age:Number
});


const dataModel = mongoose.model("Collection", dataSchema);

module.exports = dataModel;