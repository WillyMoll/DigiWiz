import {Solution} from "../Solution";
import {Button, Card, CardActions, CardContent, CardHeader, Paper, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ApiService} from "../../service/ApiService";
import {useSnackbar} from "notistack";
import LoadingOverlay from "react-loading-overlay";

export const UseCasePage = () => {
    const {usecase} = useParams<{ usecase: string }>()
    const {enqueueSnackbar} = useSnackbar()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<any>()

    useEffect(() => {
        setLoading(true);
        ApiService.getUseCase(usecase)
            .then(setData)
            .catch(e => enqueueSnackbar('Fehler', {variant: 'error'}))
            .finally(() => setLoading(false))
    }, [])

    return <LoadingOverlay
        active={loading}
    >
        <Card>
            <CardHeader title={usecase}/>
            <CardContent>
                {/*TODO: top 3*/}
                <Solution
                    title={'TestSolution'}
                    text={'TestSolutionText TestSolutionText TestSolutionText TestSolutionText '}
                    imgUrl={"https://www.test.de/file/image/91/11/adf39d8b-d8db-4686-8f71-ed9e4f27f5ca-web/5766132_Blutdruckmessgeraete-t2009-5007166-0.jpg"}
                    webUrl={"https://test.de"}
                />
            </CardContent>
            <CardActions>
                <Button>Alle Anzeigen</Button>
            </CardActions>
        </Card>
    </LoadingOverlay>
}