import React from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";

interface SolutionProps {
    title: string,
    text: string,
    url: string,
}

export const Solution = (props:SolutionProps) => {
    return <Card sx={{ margin: '20px' }}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.text}
            </Typography>
            <CardActions>
                <Button sx={{ paddingLeft: '30px', paddingRight: '30px' }} variant="contained" size="small" onClick={() => {window.open(props.url)}}>Webseite</Button>
            </CardActions>
        </CardContent>
    </Card>
}