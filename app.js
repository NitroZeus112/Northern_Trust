const express = require("express");

const app = express();






app.listen(process.env.PORT || 3000, function() {
    console.log("Server up and running");
})