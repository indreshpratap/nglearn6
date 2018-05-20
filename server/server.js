var express = require("express"),
    cors = require('cors'),
    bodyParser = require("body-parser");

 var mountApiRoutes = require("./routes");
var app = express();


app.use(cors());
app.use(bodyParser.json());
mountApiRoutes(app);

app.get("/",(req,res)=>{
    res.send("Yes up and running");
});

app.listen(3000,()=>{
    console.log("Express server running at port 3000");
});