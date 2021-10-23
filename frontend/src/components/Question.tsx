import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import React from 'react';

interface QuestionProps {
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
            <Typography variant="body2" color="text.secondary" sx={{ margin: '10px' }}>
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
