import React from 'react';
import {Container} from "@mui/material";
import {AppBar} from "./components/AppBar";
import {Route, Switch} from "react-router-dom";
import {HomePage} from "./components/pages/HomePage";
import {QuestionPage} from "./components/pages/QuestionPage";


function App() {
    return (
        <Container>
            <AppBar/>
            <Switch>
                <Route exact path={'/'} component={HomePage}/>
                <Route path={'/questions'} component={QuestionPage}/>
            </Switch>
        </Container>
    );
}

export default App;
