import React from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

interface SolutionProps {
    title: string,
    text: string,
    imgUrl: string,
    webUrl: string,
}

export const Solution = (props:SolutionProps) => {
    return <Card sx={{ margin: '20px', display:'flex' }}>
        <Box sx={{  width: '80%' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.text}
                </Typography>
                <CardActions>
                    <Button sx={{ paddingLeft: '30px', paddingRight: '30px' }} variant="contained" size="small" onClick={() => {window.open(props.webUrl)}}>Webseite</Button>
                </CardActions>
            </CardContent>
        </Box>
        <CardMedia
            component="img"
            sx={{ width: '20%' }}
            image={props.imgUrl}
        />
    </Card>
}