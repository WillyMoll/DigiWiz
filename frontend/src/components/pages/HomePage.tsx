import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid, Paper,
    TextField,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {ApiService} from "../../service/ApiService";

export const HomePage = () => {
    const [questionSets, setQuestionSets] = useState<any>([])
    const [filter, setFilter] = useState('')
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
                    DigiWiz ist ihr online Assistent um Digitale Lösungen für ihre Firma zu finden.
                </Typography>
                <Box sx={{height: 20}}/>
                <Typography variant="h6" component="div">
                    Anleitung
                </Typography>
                <Box sx={{height: 10}}/>
                <Typography variant="body2" color="text.secondary">
                    Wählen sie die Branche in welcher sie tätig sind und beantworten sie die geschlossenen Fragen des
                    Programmes.
                    Aufgrund ihrer Wahl werden ihnen danach digitale Lösungen angezeigt, welche die Produktivität ihres
                    Unternehmens steigern werden.
                </Typography>
            </CardContent>
        </Card>
        <Box sx={{height: 20}}/>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper>
                    <TextField
                        label={'Filter'}
                        fullWidth={true}
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </Paper>
            </Grid>
            {questionSets
                .filter((q: any) =>
                    filter === ''
                    || q.name.toLowerCase().includes(filter.toLowerCase()))
                .map((q: any) => <Grid item sm={4} xs={12}>
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
                            >Quiz starten</Button>
                        </CardActions>
                    </Card>
                </Grid>)}
        </Grid>
    </Box>
}
