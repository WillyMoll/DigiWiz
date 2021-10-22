import React from 'react';
import {Box, Button, Card, CardContent, Container, Toolbar} from "@mui/material";
import {AppBar} from "./components/AppBar";
import {FontSwitcher} from "./components/FontSwitcher";


function App() {
    return (
        <Container>
            <AppBar/>
            <Box>
                <Toolbar/>
                <Card>
                    <CardContent>
                        <FontSwitcher/>
                    </CardContent>
                    <CardContent>
                        Lorem Ipsum dolor sit amet.
                    </CardContent>
                    <CardContent>
                        <Button>Start Quiz</Button>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}

export default App;
