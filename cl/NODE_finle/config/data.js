// const mongoose=require("mongoose");
// mongoose.connect("mongodb+srv://ishan:kanzariya@cluster0.80esk8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
// const check=mongoose.connection;

// check.on("connected",()=>{
//     console.log("Database is Connected...");
// });

// module.exports=check;

const mongoose = require("mongoose");

// Replace the connection string with your own MongoDB URI
const uri = "mongodb+srv://ishan:kanzariya@cluster0.80esk8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Database is connected...");
});

db.on("error", (err) => {
  console.error("Database connection error:", err);
});

db.on("disconnected", () => {
  console.log("Database is disconnected...");
});

module.exports = db;