import {Card, CardContent, Grid} from "@mui/material";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {ApiService} from "../../service/ApiService";
import {useSnackbar} from "notistack";
import LoadingOverlay from "react-loading-overlay";
import {UseCase} from "./UseCase";

export const UseCasePage = () => {
    const location = useLocation();
    const {enqueueSnackbar} = useSnackbar()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        if(enqueueSnackbar) {
            setLoading(true);
            const ids = new URLSearchParams(location.search).getAll('ids').map(i => parseInt(i))
            ApiService.getUseCases(ids)
                .then(setData)
                .catch(e => enqueueSnackbar('Fehler', {variant: 'error'}))
                .finally(() => setLoading(false))
        }
    }, [enqueueSnackbar, location.search])

    return <LoadingOverlay
        active={loading}
    >
        {data.length > 0 ? <Grid container spacing={3}>
            {data.map(u => <Grid item xs={12} key={u.id}><UseCase {...u}/></Grid>)}</Grid> : <Card>
            <CardContent>So wie es aussieht sind Sie schon perfekt digitalisiert.</CardContent>
        </Card>}
    </LoadingOverlay>
}

