import {Solution} from "../Solution";
import {Button, Card, CardActions, CardContent, CardHeader} from "@mui/material";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {ApiService} from "../../service/ApiService";
import {useSnackbar} from "notistack";
import LoadingOverlay from "react-loading-overlay";

export const UseCasePage = () => {
    const location = useLocation();
    const {enqueueSnackbar} = useSnackbar()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        setLoading(true);
        const ids = new URLSearchParams(location.search).getAll('ids').map(i => parseInt(i))
        ApiService.getUseCases(ids)
            .then(setData)
            .catch(e => enqueueSnackbar('Fehler', {variant: 'error'}))
            .finally(() => setLoading(false))
    }, [])

    //TODO: add show all functionality
    return <LoadingOverlay
        active={loading}
    >
        {data.length > 0 ? data.map(u => <Card>
            <CardHeader title={u.name}/>
            <CardContent style={{backgroundColor: ''}}>
                {u.solutions.slice(0, 3).map((s: any) => <Solution
                    title={s.name}
                    text={s.description}
                    imgUrl={s.image}
                    webUrl={s.website}
                />)}
            </CardContent>
            <CardActions>
                <Button>Alle Anzeigen</Button>
            </CardActions>
        </Card>) : <Card>
            <CardContent>So wie es aussieht sind Sie schon perfekt digitalisiert.</CardContent>
        </Card>}
    </LoadingOverlay>
}