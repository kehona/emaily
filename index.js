const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys"); 
require("./models/User");
require("./services/passport");

const authRoutes = require("./routes/authRoutes");



mongoose.connect(keys.mongoURI, {
    useMongoClient: true
});

const app = express();

authRoutes(app);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("listening on port", PORT);
});