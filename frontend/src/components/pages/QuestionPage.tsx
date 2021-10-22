import {Grid} from "@mui/material";

export const QuestionPage = () => {
    // TODO: question logic to retrieve and send results

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
            {/* TODO: insert component of lukas*/}
        </Grid>
    </Grid>
}