import express from "express";
import config from "./config/config.json";
import {DBMock} from "./models/DBMock";

const app = express();
const port = config.port; // default port to listen
const db = new DBMock();

app.get("/questions", (req, res) => {
    res.send({
        success: true,
        payload: db.getQuestions()
    });
});

app.get("/usecases", (req, res) => {
    res.send({
        success: true,
        payload: db.getUseCases()
    })
});

// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
