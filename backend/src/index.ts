import express from "express";
import config from "./config/config.json";
import {DBMock} from "./models/DBMock";
import cors from "cors";

const app = express();
const port = config.port; // default port to listen
const db = new DBMock();


app.use(cors());

app.get("/questionsets", (req, res) => {
    res.send(db.getQuestionSets());
});

app.get("/questionsets/:id", (req, res) => {
    res.send(db.getQuestionSet(req.params.id));
});

app.get("/questions", (req, res) => {
    res.send(db.getQuestions());
});

app.get("/usecases", (req, res) => {

    res.send(db.getUseCases())
});
app.get("/usecases/:id", (req, res) => {
    res.send(db.getUseCase(req.params.id))
});

app.get("/solutions", (req, res) => {

    res.send(db.getSolutions())
});

app.get("/companies", (req, res) => {

    res.send(db.getCompanies())
});

app.post("/solutions", (req, res) => {
    res.send(db.getSolutionsByIDs(req.body));

});

// start the express server
app.listen(process.env.PORT || port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
