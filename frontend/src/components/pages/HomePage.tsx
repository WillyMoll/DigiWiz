import {Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {ApiService} from "../../service/ApiService";

export const HomePage = () => {
    const [questionSets, setQuestionSets] = useState<any>([])
    const h = useHistory()

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
                    DigiWitz ist ihr online Assistent um Digitale Lösungen für ihre Firma zu finden.
                    Die Mitarbeiter von DigiWitz versuchen die Digitalisierung voranzutreiben indem wir
                    Firmen auf schon existierende Software aufmerksam zu machen welche ihnen viel Zeit und Geld sparen
                    können.
                </Typography>
                <Box sx={{height: 20}}/>
                <Typography variant="h6" component="div">
                    Anleitung
                </Typography>
                <Box sx={{height: 10}}/>
                <Typography variant="body2" color="text.secondary">
                    Wählen sie die Branche in welcher sie tätig sind und beantworten sie die geschlossenen Fragen des Programmes.
                    Aufgrund ihrer Wahl werden ihnen danach digitale Lösungen angezeigt, welche die Produktivität ihres
                    Unternehmens steigern könnten.
                </Typography>
            </CardContent>
        </Card>
        <Box sx={{height: 20}}/>
        <Grid container spacing={3}>
            {questionSets.map((q: any) => <Grid item sm={4} xs={12}>
                <Card>
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
