import React from 'react';
import {Box, Container} from "@mui/material";
import {AppBar} from "./components/AppBar";
import {Route, Switch} from "react-router-dom";
import {HomePage} from "./components/pages/HomePage";
import {QuestionPage} from "./components/pages/QuestionPage";
import {UseCasePage} from "./components/pages/UseCasePage";


function App() {
    return (
        <Container>
            <AppBar/>
            <Box sx={{height: 20}}/>
            <Switch>
                <Route exact path={'/'} component={HomePage}/>
                <Route path={'/questions/:id'} component={QuestionPage}/>
                <Route path={'/usecases'} component={UseCasePage}/>
            </Switch>
            <Paper style={{padding: "5px", marginTop: "20px"}}>
                &#169; Familie Moll
            </Paper>
        </Container>
    );
}

export default App;
