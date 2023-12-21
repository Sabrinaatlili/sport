// import mongoose module
const mongoose= require("mongoose");
// create stadium schema
const stadiumSchema =mongoose.Schema({
    name:String,
    capacity:Number,
    country:String,
    team:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
        }    
});
// create stadium Model
const stadium = mongoose.model("Stadium", stadiumSchema);
//  export stadium
module.exports= stadium;