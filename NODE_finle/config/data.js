const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://ishvarkanzariya2:12345@cluster0.shzm9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const check=mongoose.connection;

check.on("connected",()=>{
    console.log("Database is Connected...");
});

module.exports=check;