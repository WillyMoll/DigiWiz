import {Solution} from "../Solution";
import {Button, Paper, Typography} from "@mui/material";
import {useParams} from "react-router-dom";

export const UseCasePage = () => {
    const {usecase} = useParams<{ usecase: string }>()

    return <Paper>
        <Typography
            component={"h3"}
        >
            {usecase}
        </Typography>
        {/*TODO: top 3*/}
        <Button>Alle Anzeigen</Button>
        <Solution
            title={'TestSolution'}
            text={'TestSolutionText TestSolutionText TestSolutionText TestSolutionText '}
            url={"https://test.com"}
        />
    </Paper>
}