// import express application
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
// import bcrypt
const bcrypt = require("bcrypt");
// import Axios
const axios = require("axios");
// import mongoose 
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');
// import multer (sert à upload des fichiers) 
const multer = require("multer");
// import path 
const path = require("path");

// import jwt jsonwebtoken
const jwt = require('jsonwebtoken');
// import express session
const session = require('express-session');


//create a express application 
const app = express();
// Configuration body Parser
app.use(bodyParser.json());
// pour qu'on peut Récupérer des objet froms requests 
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(

        "Access-Control-Allow-Methods",

        "GET, POST, DELETE, PATCH, PUT"

    );

    next();

});
// Configuration path
app.use('/images', express.static(path.join('backend/images')))
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    // fileName
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});
// Cofig express-session 
const secretKey = 'your-secret-key';
app.use(session({
    secret: secretKey,
}));
// **************Data Base Simulation
// Importer les Models 
const Match = require("./models/match");
const User = require("./models/user");
const Player = require("./models/player");
const Team = require("./models/team");
const Stadium = require("./models/stadium");
//Déclaration des tableaux statiquement 
// let matchesData=[
//     {id:1,teamOne:"EST",teamTwo:"CA",scoreOne:1,scoreTwo:2},
//     {id:2,teamOne:"CSS",teamTwo:"ESS",scoreOne:4,scoreTwo:2},
//     {id:3,teamOne:"Bizerte",teamTwo:"Kef",scoreOne:1,scoreTwo:1},
//   ];

// ***********************MATCH BUSNISS LOGIC ****************
//  Busniss Logic : Add Match
app.post("/matches", (req, res) => {
    console.log("Here  into BL : Add Match");

    let newMatch = new Match(req.body);
    newMatch.save();
    res.json({ msg: "Added with successs" });
});
//  Busniss Logic : Get All Matches
//  Busniss Logic : Get All matches
app.get("/matches", (req, res) => {
    console.log("Here  into BL : Get All Matches");
    // statique
    // res.json({matches: matchesData});
    // suite à un DBase
    Match.find().then((docs) => { res.json({ matches: docs }) })
});

//  Busniss Logic : Get  Match By Id
app.get("/matches/:id", (req, res) => {
    console.log("Here  into BL : Get  Match By ID");
    // ****************** Statique*************
    // let matchId = req.params.id;
    // // for (let i = 0; i < matchesData.length; i++) {
    // //    if (matchesData[i].id== matchId) {
    // //     res.json({match: matchesData[i]});
    // //    }

    // // }
    // let findedMatch= matchesData.find((obj)=>{return obj.id==matchId});
    // res.json({match: findedMatch});

    // ************ Suite à une DBase******************
    Match.findById(req.params.id).then((doc) => { res.json({ match: doc }) });
});


//  Busniss Logic : Edit Match
app.put("/matches", (req, res) => {
    console.log("Here  into BL : Edit Match");
    let newobj = req.body;
    // ****************** Statique*************
    // for (let i = 0; i < matchesData.length; i++) {
    //     if (matchesData[i].id== newMatch.id) {
    //         matchesData[i] = newMatch;
    //         break; }
    // }
    // res.json({msg : "edit with successs"})
    // ************ Suite à une DBase******************
    Match.updateOne({ _id: req.body.id }, newobj).then((updateResponse) => {
        console.log("Here response after update", updateResponse);
        if (updateResponse.nModified == 1) {
            res.json({ isUpdated: true })
        } else {
            res.json({ isUpdated: false })
        }
    })
});

//  Busniss Logic : delete Match
app.delete("/matches/:id", (req, res) => {
    console.log("Here  into BL : delete Match");
    let matchId = req.params.id;
    // *********Statique 
    // for (let i = 0; i < matchesData.length; i++) {
    //    if (matchesData[i].id== matchId) {
    //     matchesData.splice(i, 1);
    //     break;
    //    }      
    // }
    // res.json({msg: "Match deleted"});

    //  *********Suite à une base
    Match.deleteOne({ _id: matchId })
        .then((deletedResponse) => { console.log("Here respose after Delete Match", deletedResponse); })
    if (deletedResponse.deletedCount == 1) {
        res.json({ msg: "match has been deleted" })
    } else {
        res.json({ msg: "match has not deleted" })
    }

});

// ***********************PLAYER BUSNISS LOGIC ****************
//  Busniss Logic : Get All players
app.get("/players", (req, res) => {
    console.log("Here  into BL : Get All players");
    Player.find().then((docs) => { res.json({ players: docs }) })
});
//  Busniss Logic : Get  player By Id
app.get("/players/:id", (req, res) => {
    console.log("Here  into BL : Get  player By ID");
    // Statique
    // let playerId = req.params.id;
    // let findedPlayer= playersData.find((obj)=>{return obj.id==playerId});
    // res.json({player: findedPlayer});
    Player.findById(req.params.id).then((doc) => { res.json({ player: doc }) });
});
//  Busniss Logic : Add player
app.post("/players", (req, res) => {
    console.log("Here  into BL : Add player", req.body);
    Team.findById(req.body.teamId).then((team) => {
        console.log("Here is team from DB : ", team);
        if (!team) {
            res.json({ msg: "Team not found" });
        }
        else{
            const player = new Player({
                playerName: req.body.playerName,
                playerNbr: req.body.playerNbr,
                playerAge: req.body.playerAge,
                playerPos: req.body.playerPos,
                team: team._id,
            });
            console.log("Here player after : ", player);
            player.save((err, doc) => {
                if (err) {
                    res.json({ msg: "Error" });
                } else {
                    team.players.push(doc);
                    team.save();
                    res.json({ msg: "Player Added with success" });
                }
                });
        }
        // 
    
    })
});

//  Busniss Logic : Edit Player
app.put("/players", (req, res) => {
    console.log("Here  into BL : Edit player");
    let newPlayer = req.body;
    // for (let i = 0; i < playersData.length; i++) {
    //     if (playersData[i].id== newPlayer.id) {
    //         playersData[i] = newPlayer;
    //         break; }
    // }
    Player.updateOne({ _id: req.body._id }, newPlayer).then((updateResponsePlayer) => {
        console.log("Here response after update Player ", updateResponsePlayer);
        if (updateResponsePlayer.nModified == 1) {
            res.json({ msg: "edit with successs" })
        } else {
            res.json({ msg: "edit failed " })
        }

    });

});

//  Busniss Logic : delete Player
app.delete("/players/:id", (req, res) => {
    console.log("Here  into BL : delete player");
    let playerId = req.params._id;
    // *********Statique ****************
    // for (let i = 0; i < playersData.length; i++) {
    //    if (playersData[i].id== playerId) {
    //     playersData.splice(i, 1);
    //     break;
    //    }      
    // }
    // res.json({msg: "Player deleted"});
    //  *********Suite à une base
    Player.deleteOne({ _id: playerId }).then((deletedResponse) => { console.log("Here respose after Delete", deletedResponse); })
    if (deletedResponse.deletedCount == 1) {
        res.json({ msg: "Player has been deleted" })
    } else {
        res.json({ msg: "Player not deleted" })
    }
});

// ***********************TEAM BUSNISS LOGIC ****************

//  Busniss Logic : Get All teams
app.get("/teams", (req, res) => {
    console.log("Here  into BL : Get All teams");
    // res.json({teams: teamsData});
    Team.find().populate("players").populate("stadium").then((docs) => { res.json({ teams: docs }) });
});

//  Busniss Logic : Get  team By Id
app.get("/teams/:id", (req, res) => {
    console.log("Here  into BL : Get  team By ID");
    // let teamId = req.params.id;
    // let findedTeam= teamsData.find((obj)=>{return obj.id==teamId});
    // res.json({team: findedTeam});
    Team.findById(req.params.id).then((doc) => { res.json({ team: doc }) });
});
//  Busniss Logic : Get  team By Id with players informations
app.get("/teams/:id/info", (req, res) => {
    console.log("Here  into BL Get  team By ID with players info");
    // let teamId = req.params.id;
    // let findedTeam= teamsData.find((obj)=>{return obj.id==teamId});
    // res.json({team: findedTeam});
    Team.findById(req.params.id).populate("players").then((docs) => {
        console.log("Here teams", docs);
        res.json({ TeamsWithPlayersInfo: docs })
    });
});
//  Busniss Logic : Add team
app.post("/teams", (req, res) => {
    console.log("Here  into BL : Add team");
       // ****************** Ajout Statique*************
    // console.log("Here  object from FE", team);
    // // ajouter l'objet in teamsData
    // playersData.push(team);
    // res.json({msg : "Added with successs"}); 

    // ************ Suite à une DBase******************
   Stadium.findById(req.body.sId).then(
    (stadium)=>{
        if (!stadium) {
            res.json({ msg:"stadium not Found "})
        } else {
           let team = new Team({
            teamName: req.body.teamName,
            teamOwner: req.body.teamOwner,
            teamFondation: req.body.teamFondation,
            stadium: stadium._id
           }) ;
           team.save((err,doc)=>{
            if (err) {
                res.json({ msg: "Error" });
            } else {
                stadium.team= doc._id;
                stadium.save();
                res.json({ msg: "Team Added with successs" });
            }
           })
        }
   })
   
   

});

//  Busniss Logic : Edit team
app.put("/teams", (req, res) => {
    console.log("Here  into BL : Edit Team");
    let newTeam = req.body;
    // ****************** Statique*************
    // for (let i = 0; i < teamsData.length; i++) {
    //     if (teamsData[i].id== newTeam.id) {
    //         teamsData[i] = newTeam;
    //         break; }
    // }
    // res.json({msg : "edit with successs"});
    // ************ Suite à une DBase******************
    Team.updateOne({ _id: req.body._id }, newTeam).then((updateResponse) => {
        console.log("Here response after update", updateResponse);
        if (updateResponse.nModified == 1) {
            res.json({ isUpdated: true });
        } else {
            res.json({ isUpdated: false });
        }
    })
});

//  Busniss Logic : delete team
app.delete("/teams/:id", (req, res) => {
    console.log("Here  into BL : delete team");
    let teamId = req.params._id;
    // *********Statique delete

    // for (let i = 0; i < teamsData.length; i++) {
    //    if (teamsData[i].id== teamId) {
    //     teamsData.splice(i, 1);
    //     break;
    //    }      
    // }
    // res.json({msg: "Player deleted"});
    //  *********Suite à une base
    Team.deleteOne({ _id: teamId }).then((deletedResponse) => { console.log("Here respose after Delete", deletedResponse); })
    if (deletedResponse.deletedCount == 1) {
        res.json({ msg: "team has been deleted" })
    } else {
        res.json({ msg: "team has not deleted" })
    }

});
// ***********************signup BUSNISS LOGIC ****************
//  Busniss Logic : signup
app.post("/users/signup", multer({ storage: storageConfig }).single("img"), (req, res) => {
    console.log("Here  into BL : signup ", req.body);
    // ************ Suite à une DBase****************

    bcrypt.hash(req.body.pwd, 8).then((cryptPwd) => {
        console.log("Here  crypted Pwd", cryptPwd);
        req.body.pwd = cryptPwd;
        req.body.avatar = `http//localhost:3000/images/${req.file.filename}`
        let user = new User(req.body);
        user.save((err, doc) => {
            if (err) {
                res.json({ msg: " Failed" });
            } else {
                res.json({ msg: " Added with successs" });
            }
        });

    });

    // ****************** Ajout Statique*************
    // // récupérer l'objet from request to added
    // let obj =  req.body;
    // console.log("Here  object from FE", obj);
    // // ajouter l'objet in matchesData
    // matchesData.push(obj);
    // res.json({msg : "Added with successs"});
});
//  Busniss Logic : Get All users
app.get("/users", (req, res) => {
    console.log("Here  into BL : Get All users");
    // res.json({teams: teamsData});
    User.find().then((users) => { res.json({ users: users }) });
});
// ***********************login BUSNISS LOGIC ****************
//  Busniss Logic : Login
app.post("/users/login", (req, res) => {

    // déclarer une variable pour sauvegatder un objet
    let result;
    console.log("Here  into BL : Login ", req.body);

    User.findOne({ email: req.body.email }).then(

        (doc) => {
            console.log("Here  is the object after searching it by email: ", doc);
            if (!doc) {
                res.json({ msg: "Please check your Email" });
            } else {
                result = doc;
                bcrypt.compare(req.body.pwd, doc.pwd).then((pwdCompare) => {
                    console.log("Here  is the result of pwdCompare : ", pwdCompare);
                    if (pwdCompare) {
                        // If the user is valid, generate a JWT token
                        const token = jwt.sign({ fName: result.firstName, lName: result.lastName, role: result.role, id: result._id }, secretKey, {
                            expiresIn:
                                '1h'
                        });

                        res.json({ msg: "welcome", token: token })

                    } else {
                        res.json({ msg: "Please check your Pwd" })
                    }
                })
            }
            //   affecter obj à une variable result pour l'afficher hors arrow function

        })
}); 
// ************************** Stadia BUSNISS LOGIC *******************
// Busniss Logic : Add stadia
app.post("/stadia", (req, res) => {
    console.log("Here  into BL : Add Stadium : ",req.body);

    let newStadia = new Stadium(req.body);
    newStadia.save((err, doc) => {
        if (err) {
            res.json({ msg: " Error " });
        } else {
            res.json({ msg: "Added with successs" });
        }

    });

});
// Busniss Logic : Get All Stadia 
app.get("/stadia", (req,res)=>{
    console.log("here into BL get all stadia  ");
    Stadium.find().populate("team").then((docs)=>{ res.json({stadiumsTab:docs })
    })
   
})
// *********************** BUSNISS Serch Weather ****************
app.post("/weather", (req, res) => {
    console.log("Here  into BL Search Weather ", req.body);
    let key = "62ee756a34835483299877a61961cafb";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key}`;
    axios.get(apiURL).then((response) => {
        console.log("Here API Response", response.data);
        let weather = {
            temperature: response.data.main.temp,
            pressure: response.data.main.pressure,
            humidity: response.data.main.humidity,
            windspeed: response.data.wind.speed,
            icone: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`

        }
        res.json({ result: weather })
    });
});




//make app importable from another files
module.exports = app; 