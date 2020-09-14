let mongoose = require('mongoose');

let BlockChainModel = require("./model");

//connect to db
mongoose.connect("mongodb://localhost:27017/blockChain", (err) => {
    if (err)
        return console.log("Cannot connect to DB");
    //Success Message 
    console.log("Database is Connected");
    //Run callback registered onConnect
    connectionCallback();
});
//This is going to run when DB is successfully connected 
let connectionCallback = () => {};
//onConnect is going to be used outside this module to assign the connection callback
module.exports.onConnect = (callback) => {
   //Set custom Callback as the Global Callback to be run when connected to DB
   connectionCallback = callback;
}