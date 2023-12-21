// import mongoose module
const mongoose= require("mongoose");
// create team schema
const teamSchema =mongoose.Schema({
    teamName:String,
    teamFondation:Number,
      teamOwner:String,
    players: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
        }] ,
        stadiumId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Stadium"
        }
            
});
// create Team Model
const team = mongoose.model("Team", teamSchema);
//  export team
module.exports= team;