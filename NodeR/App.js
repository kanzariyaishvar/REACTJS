const express = require("express");
const path = require("path");
const port = 8989;
const app = express();


app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get("/Sign",(req,res)=>{
    res.render("sign.ejs")
})


app.listen(port, () => {
    console.log("Server is started at port " + port);
});
