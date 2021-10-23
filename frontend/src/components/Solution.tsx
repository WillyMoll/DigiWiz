import React from 'react';
import {Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";

interface SolutionProps {
    title: string,
    text: string,
    imgUrl: string,
    webUrl: string,
}

export const Solution = (props: SolutionProps) => {
    return <Card sx={{margin: '20px', display: 'flex', flexDirection: {xs: 'column', sm: 'row'}}}>
        <Box style={{flexGrow: 1}}>
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
                <CardActions>
                    <Button sx={{paddingLeft: '30px', paddingRight: '30px'}} variant="contained" size="small"
                            onClick={() => {
                                window.open(props.webUrl)
                            }}>Webseite</Button>
                </CardActions>
            </CardContent>
        </Box>
        <CardMedia
            component="img"
            sx={{display: {xs: "none", sm: 'block'}, float: "right", width: "20%"}}
            image={props.imgUrl}
        />
    </Card>
}
