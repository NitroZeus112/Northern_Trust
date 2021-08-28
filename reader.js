const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.urlencoded({extended: true}));

app.post("/", function(req,res) {
    console.log(req.body.stockName);
});