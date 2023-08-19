const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/?directConnection=true";
// const dotenv = require('dotenv');

const connectToMongo = async()=>{
     
 mongoose.connect(mongoURI,()=>{
    console.log("connected to mongo succesfully");
 })
   
}

module.exports = connectToMongo;