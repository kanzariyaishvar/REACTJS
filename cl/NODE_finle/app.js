const express = require("express");
const port = 8989;
const app = express();
const path = require("path");
const table = require("./model/schema");
const data=require("./config/data");
const userregi = require("./model/userregi");

app.use(express.json())

app.use(express.static(path.join(__dirname, "public")));


app.get('/',async (req,res)=>{
    let data = await userregi.find()
    res.send({data : data})
})

app.post("/register",async(req,res)=>{
    let data = await userregi.create(req.body);
    res.send({data : data})
})


app.post("/Login",async(req,res)=>{
    
})


app.listen(port, () => {
    console.log("Serever is Strated At port.." + port);
})