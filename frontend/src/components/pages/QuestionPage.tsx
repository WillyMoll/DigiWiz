import {Box, Grid, LinearProgress} from "@mui/material";
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

        if (answers.length >= questionSet.questions.length) {
            const ids = []
            for (let k in answers) {
                if ((answers[k] ^ questionSet.questions[k].invert) === 1) {
                    ids.push(questionSet.questions[k].id)
                }
            }

            h.push(`/usecases?${ids.map(i => `ids=${i}`).join('&')}`)

            return null;
        }

        return <Question
            text={questionSet.questions[answers.length].description}
            callBack={handleQuestionAnswer}/>
    }, [questionSet, answers]);


    const progress = useMemo(() => {
        return Math.round((answers.length / questionSet.questions?.length ?? 1) * 100);
    }, [questionSet, answers])

    return <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img
                src={img}
                style={{
                    maxHeight: 'calc(80vh -84px)',
                    maxWidth: '100%',
                }}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <LoadingOverlay
                active={loading}
            >
                {question}
            </LoadingOverlay>
            <Box sx={{height: 15}}/>
            <LinearProgress
                value={progress}
                variant="determinate"
            />
            {answers.length}/{questionSet.questions?.length ?? 1}
        </Grid>
    </Grid>
}