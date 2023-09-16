import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

const API = "https://bored-api.appbrewery.com/random";


app.use(express.static("public"))

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random")
        res.render("index.ejs", {
            secret: result.data.secret,
            user: result.data.username,
        });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
            error: error.message,
        });
    }
});


app.listen(port, () => {
    console.log(`listening on the port ${port}`)
})
