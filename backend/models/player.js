// import mongoose module
const mongoose= require("mongoose");
// create player schema
const playerSchema =mongoose.Schema({
    playerName:String,
    playerNbr:Number,
    playerAge:Number,
    playerPos:String,
    team:
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
        }   
});
// create player Model
const player = mongoose.model("Player", playerSchema);
//  export player
module.exports= player;