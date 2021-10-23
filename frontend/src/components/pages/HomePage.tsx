import {Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography} from "@mui/material";
import {FontSwitcher} from "../FontSwitcher";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {ApiService} from "../../service/ApiService";

export const HomePage = () => {
    const [questionSets, setQuestionSets] = useState<any>([])
    const h = useHistory()
    const startQuiz = () => {
        h.push('/questions')
    }

    useEffect(() => {
        ApiService.getQuestionSets()
            .then(setQuestionSets)
        //TODO: error + loading
    }, [])

    return <Box>
        <Card>
            <CardContent>
                <Typography variant="h3" component="div">
                    DigiWiz
                </Typography>
                <Box sx={{height: 20}}/>
                <Typography variant="body2" color="text.secondary">
                    Beschreibung von Digiwiz. Beschreibung von Digiwiz.Beschreibung von Digiwiz.Beschreibung von Digiwiz.Beschreibung von Digiwiz.Beschreibung von Digiwiz.
                    Beschreibung von Digiwiz. Beschreibung von Digiwiz.Beschreibung von Digiwiz.Beschreibung von Digiwiz.Beschreibung von Digiwiz.Beschreibung von Digiwiz.
                </Typography>
                <Box sx={{height: 20}}/>
                <Typography variant="h6" component="div">
                    Anleitung
                </Typography>
                <Box sx={{height: 10}}/>
                <Typography variant="body2" color="text.secondary">
                    Anleitung von Digiwiz. Anleitung von Digiwiz.Anleitung von Digiwiz.Anleitung von Digiwiz.Anleitung von Digiwiz.Anleitung von Digiwiz.
                </Typography>
            </CardContent>
        </Card>
        <Box sx={{height: 20}}/>
        <Grid  container spacing={3}
               >
            {questionSets.map((q: any) => <Grid item sm={4} xs={12}>
                <Card >
                    <CardHeader title={q.name}/>
                    <CardMedia

                        component="img"
                        height="194"
                        image={q.icon}
                        alt="Fragebogen symbolbild"
                    />
                    <CardActions style={{justifyContent: "center"}}>
                        <Button
                            variant={'contained'}
                            onClick={() => {
                                h.push(`/questions/${q.id}`)
                            }}
                        >Auswählen</Button>
                    </CardActions>
                </Card>
            </Grid>)}
        </Grid>
    </Box>
}
