import {Grid} from "@mui/material";
import {Question} from "../Question";

export const QuestionPage = () => {
    // TODO: question logic to retrieve and send results

    function handleQuestionAnswer(answeredYes:boolean){
        console.log(answeredYes);
    }

    return <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img
                src={"https://clipground.com/images/a-person-clipart-7.jpg"}
                style={{
                    maxWidth: '100%'
                }}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <Question title={"TestQuestion"} text={"TestQuestion Text TestQuestion Text TestQuestion Text TestQuestion TextTestQuestion Text"} callBack={handleQuestionAnswer}/>
        </Grid>
    </Grid>
}