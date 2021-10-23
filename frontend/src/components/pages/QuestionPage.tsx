import {Button, Grid, Paper, Typography} from "@mui/material";
import {Question} from "../Question";
import {useEffect, useMemo, useState} from "react";
import {ApiService} from "../../service/ApiService";
import {useSnackbar} from 'notistack';
import LoadingOverlay from 'react-loading-overlay';
import {useHistory, useParams} from "react-router-dom";

import img from "../../wiz.jpg"

export const QuestionPage = () => {
    const {id} = useParams<{ id: string }>()
    const h = useHistory()
    const [questionSet, setQuestionSet] = useState<any>({})
    const [loading, setLoading] = useState(false)
    const [answers, setAnswers] = useState<any[]>([])
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        if (loading) return;

        setLoading(true)
        ApiService.getQuestionSet(id)
            .then(setQuestionSet)
            .catch(e => enqueueSnackbar('Fehler', {variant: 'error'}))
            .finally(() => setLoading(false))
    }, [])

    function handleQuestionAnswer(answeredYes: boolean) {
        setAnswers(a => [...a, answeredYes])
    }

    const question = useMemo(() => {
        if (!questionSet.questions || questionSet.questions.length <= 0) return null

        return answers.length < questionSet.questions.length ? <Question
            title={"TestQuestion"}
            text={questionSet.questions[answers.length].description}
            callBack={handleQuestionAnswer}
        /> : <Paper>
            <Typography>Fertig! : )</Typography>
            <Button
                variant={'contained'}
                onClick={() => {
                    h.push('/usecase/1')
                }}
            >Vorschläge anzeigen</Button>
        </Paper>
    }, [questionSet, answers])

    return <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img
                src={img}
                style={{
                    maxWidth: '100%',
                    maxHeight: '80%'
                }}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <LoadingOverlay
                active={loading}
            >
                {question}
            </LoadingOverlay>
        </Grid>
    </Grid>
}