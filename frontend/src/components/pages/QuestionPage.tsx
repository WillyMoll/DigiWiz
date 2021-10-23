import {Grid} from "@mui/material";
import {Question} from "../Question";
import {useEffect, useState} from "react";
import {ApiService} from "../../service/ApiService";
import {useSnackbar} from 'notistack';

export const QuestionPage = () => {
    const [question, setQuestion] = useState<any>()
    const [loading, setLoading] = useState(false)
    const {enqueueSnackbar} = useSnackbar();

    const loadQuestion = () => {
        if (loading) return;
        setLoading(true)
        ApiService.getQuestion()
            .then(setQuestion)
            .catch(e => enqueueSnackbar('Fehler', {variant: 'error'}))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        loadQuestion();
    }, [])

    function handleQuestionAnswer(answeredYes: boolean) {
        console.log(answeredYes);
        loadQuestion()
    }

    return <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img
                src={"https://clipground.com/images/a-person-clipart-7.jpg"}
                style={{
                    maxWidth: '100%',
                }}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            {question && <Question
                title={"TestQuestion"}
                text={question.description}
                callBack={handleQuestionAnswer}
            />}
        </Grid>
    </Grid>
}