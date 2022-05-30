const express = require("express");
const app = express();
const body_parser =require("body-parser");
app.use(body_parser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html");
});
app.post("/", function (req, res) {
    var add1 = Number(req.body.num1);
    var add2 = Number(req.body.num2);
    var result = add1 + add2;
    res.send("Addition of number is equal to: "+ result);
});
app.listen(3000, function () {
    console.log("server started");
});