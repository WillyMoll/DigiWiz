import React from 'react';
import {Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";

interface SolutionProps {
    title: string,
    text: string,
    imgUrl: string,
    webUrl: string,
}

export const Solution = (props: SolutionProps) => {
    return <Card sx={{
        margin: '10px',
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'},
        justifyContent: 'space-between'
    }}>
        <Box>
            <CardHeader title={props.title}/>
            <CardMedia
                component="img"
                sx={{display: {xs: "block", sm: 'none'}}}
                image={props.imgUrl}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.text}
                </Typography>
                <CardActions sx={{paddingTop: '10px', paddingLeft: '0px'}}>
                    <Button sx={{paddingLeft: '30px', paddingRight: '30px'}} variant="contained" size="small"
                            onClick={() => {
                                window.open(props.webUrl)
                            }}>Anleitung</Button>
                </CardActions>
            </CardContent>
        </Box>
        <CardMedia
            component="img"
            image={props.imgUrl}
            sx={{width: 250, objectFit: 'contain'}}
        />
    </Card>
}
