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
            imgUrl={"https://www.test.de/file/image/91/11/adf39d8b-d8db-4686-8f71-ed9e4f27f5ca-web/5766132_Blutdruckmessgeraete-t2009-5007166-0.jpg"}
            webUrl={"https://test.de"}
        />
    </Paper>
}