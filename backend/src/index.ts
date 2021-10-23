import express from "express";
import config from "./config/config.json";
import {DBMock} from "./models/DBMock";
import cors from "cors";

const app = express();
const port = config.port; // default port to listen
const db = new DBMock();

app.use(cors());

app.get("/questions", (req, res) => {
    res.send({
        payload: db.getQuestions()
    });
});

app.get("/usecases", (req, res) => {

    res.send({
        payload: db.getUseCases()
    })
});

app.get("/solutions", (req, res) => {

    res.send({
        payload: db.getSolutions()
    })
});

app.get("/companies", (req, res) => {

    res.send({
        payload: db.getCompanies()
    })
});

// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
