import {Button, Paper} from "@mui/material";
import {Solution} from "../Solution";

export const UseCasePage = () => {
    return <Paper>
        {/*TODO: top 3*/}
        <Button>Alle Anzeigen</Button>
        <Solution
            title={'TestSolution'}
            text={'TestSolutionText TestSolutionText TestSolutionText TestSolutionText '}
            url={"https://test.com"}
        />
    </Paper>
}