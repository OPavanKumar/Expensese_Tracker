const mongoose = require("mongoose");
const transectionSchema = new mongoose.Schema({
    amount:{
        type:Number,
        required:[true,"amount i srequired"];
    },
    category:{
        type:String,
        requries:[true,"cat is required"];
    },
    reference:{
        type:String;
    },
    description:{
        type:String;
        required:[true,"des is required"];
    },
    date:{
        type:String,
        required:[true,"data is required"]
    },
    {timestamps});

const transectionModel = mongoose.model("transections", transectionsSchema)