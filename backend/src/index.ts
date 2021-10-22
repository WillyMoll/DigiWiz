import express from "express";
import config from "./config/config.json";

const app = express();
const port = config.port; // default port to listen
const db = new DBMock();

app.get("/questions", (req, res) => {
    res.send({
        success: true,
        payload: db.getQuestions()
    });
})

// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
