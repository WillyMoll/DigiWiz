import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import React from 'react';
import {useThemeSettings} from "../config/theme";

interface QuestionProps {
    title: string,
    text: string,
    callBack: (answeredYes: boolean) => void
}

export const Question = (props:QuestionProps) => {
    return <Card>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.text}
            </Typography>
            <CardActions>
                <Button variant="contained" size="small" onClick={() => props.callBack(true)}>Yes</Button>
                <Button variant="contained" size="small" onClick={() => props.callBack(false)}>No</Button>
            </CardActions>
        </CardContent>
    </Card>
}
