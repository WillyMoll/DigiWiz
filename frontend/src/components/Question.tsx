import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import React from 'react';

interface QuestionProps {
    title: string,
    text: string,
    callBack: (answeredYes: boolean) => void
}

export const Question = (props: QuestionProps) => {
    const buttonProps = {
        sx: {
            paddingLeft: '30px',
            paddingRight: '30px',
            flexGrow: 1,
        },
    };

    return <Card sx={{marginTop: '100px'}}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.text}
            </Typography>
            <CardActions sx={{display: 'flex', justifyContent: 'space-around', marginTop: '30px'}}>
                <Button
                    {...buttonProps}
                    variant={'contained'}
                    color="success"
                    onClick={() => props.callBack(true)}
                >JA</Button>
                <Button
                    {...buttonProps}
                    variant={'contained'}
                    color="error"
                    onClick={() => props.callBack(false)}
                >NEIN</Button>
            </CardActions>
        </CardContent>
    </Card>
}
