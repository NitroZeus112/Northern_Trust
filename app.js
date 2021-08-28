const express = require("express");
const fs = require("fs");
const r = require("redis");
const client = r.createClient();
// console.log(client);

const app = express();

var jsonList = [];
fs.readFileSync("Stock List.json", "UTF-8", function(err,data) {
    // console.log(data);
    for(var i=0;i<data.length;i++)
    {
        client.lpush("jsonList", "data[i].symbol");
    }
});




app.listen(process.env.PORT || 3000, function() {
    console.log("Server up and running");
});