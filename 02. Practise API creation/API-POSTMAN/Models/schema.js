const mongoose = require("mongoose");


const modelSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    }
    // Mob_No:{
    //     type:Number
    // }
});


module.exports = mongoose.model("prac_collection", modelSchema);