const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const ExitFeedbakModel = require("./models/ExitFeedback");
console.log(process.env.DB_URL);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/exit-feedback", async (req, res) => {
    const { body } = req;
    try {
        res.json({ message: "Feedback stored successfully" });
    } catch (err) {
        res.json({ message: "Failed to store feedback" });
    }
});

app.get("", (req, res) => {
    res.json({ message: "Hello world" });
});

mongoose
    .connect(process.env.DB_URL)
    .then(() => {
        console.log(`Database connected`);
        return app.listen(3010);
    })
    .then(() => console.log(`Server started at port 3010`));
