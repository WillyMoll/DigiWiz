
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import React from 'react';

interface QuestionProps {
    text: string,
    callBack: (answeredYes: boolean) => void
}

export const Question = (props: QuestionProps) => {
    return <Card>
        <CardContent>
            <Typography variant="h4" color="text.secondary" sx={{ margin: '10px' }}>
                {props.text}
            </Typography>
            <CardActions sx={{display: 'flex', justifyContent: 'space-around', marginTop: '30px'}}>
                <Button
                    fullWidth={true}
                    variant={'contained'}
                    color="success"
                    onClick={() => props.callBack(true)}
                >JA</Button>
                <Button
                    fullWidth={true}
                    variant={'contained'}
                    color="error"
                    onClick={() => props.callBack(false)}
                >NEIN</Button>
            </CardActions>
        </CardContent>
    </Card>
}
