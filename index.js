import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;
const API_URL = "https://meowfacts.herokuapp.com/";


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        const fact = response.data.data[0];
        res.render("index.ejs", { data: fact });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs");
    }
});

app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
});
