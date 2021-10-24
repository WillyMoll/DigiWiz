import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Paper,
    TextField,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {ApiService} from "../../service/ApiService";
import {useSnackbar} from "notistack";
import LoadingOverlay from "react-loading-overlay";
import img from "../../PixilDerGrosseZauberer.png";

export const HomePage = () => {
    const [questionSets, setQuestionSets] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState('')
    const h = useHistory()
    const {enqueueSnackbar} = useSnackbar()

    useEffect(() => {
        setLoading(true)
        ApiService.getQuestionSets()
            .then(setQuestionSets)
            .catch(e => enqueueSnackbar('Fehler, bitte versuchen Sie es später erneut', {variant: 'error'}))
            .finally(() => setLoading(false))
    }, [])

    return <>
        <Card sx={{
            display: 'flex',
            flexDirection: {xs: 'column', sm: 'row'},
            justifyContent: 'space-between'
        }}>
            <CardMedia
                component="img"
                image={img}
                sx={{width: 300, objectFit: 'contain', display: {xs: 'block', sm: 'block'}}}
            />
            <CardContent>
                <Typography variant="h3" component="div">
                    Hallo, Ich bin Digiwiz
                </Typography>
                <Box sx={{height: 20}}/>
                <Typography variant="body2" color="text.secondary">
                    Ihr online Assistent um Digitale Lösungen für ihr Unternehmen zu finden.
                </Typography>
                <Box sx={{height: 20}}/>
                <Typography variant="h6" component="div">
                    Anleitung
                </Typography>
                <Box sx={{height: 10}}/>
                <Typography variant="body2" color="text.secondary">
                    Wählen sie die Branche in welcher sie tätig sind und beantworten sie die geschlossenen Fragen die ich für sie zusammenstellen werde.
                    Aufgrund ihrer Wahlen werde ich ihnen danach digitale Lösungen angezeigen, welche die Produktivität und Digitalisierung ihres
                    Unternehmens steigern könnten.
                </Typography>
            </CardContent>
        </Card>
        <Box sx={{height: 20}}/>
        <LoadingOverlay
            active={loading}
            spinner
        >
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
                    .map((q: any) => <Grid item lg={4} sm={6} xs={12}>
                        <Card>
                            <CardHeader title={q.name}/>
                            <CardMedia
                                component="img"
                                height="194"
                                image={q.icon}
                                alt="Fragebogen symbolbild"
                                sx={{objectFit: 'contain'}}
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
        </LoadingOverlay>
    </>
}
