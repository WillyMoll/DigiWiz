import {Box, Button, Card, CardContent, Toolbar} from "@mui/material";
import {FontSwitcher} from "../FontSwitcher";
import React from "react";
import {useHistory} from "react-router-dom";

export const HomePage = () => {
    const h = useHistory()
    const startQuiz = () => {
        h.push('/questions')
    }

    return <Box>
        <Toolbar/>
        <Card>
            <CardContent>
                <FontSwitcher/>
            </CardContent>
            <CardContent>
                Lorem Ipsum dolor sit amet.
            </CardContent>
            <CardContent>
                <Button
                    onClick={startQuiz}
                >Start Quiz</Button>
            </CardContent>
        </Card>
    </Box>
}