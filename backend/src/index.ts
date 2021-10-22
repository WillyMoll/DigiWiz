import express from "express";
import config from "./config/config.json";
const app = express();
const port = config.port; // default port to listen

app.get("/questions", (req, res) => {
    res.send("ok");
})

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
