import {Card, CardContent, Grid} from "@mui/material";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {ApiService} from "../../service/ApiService";
import {useSnackbar} from "notistack";
import LoadingOverlay from "react-loading-overlay";
import {UseCase} from "./UseCase";
import {Typography} from "@mui/material";
import {CardMedia} from "@mui/material";
import img from "../../PixilDerGrosseZauberer.png";
import Box from "@mui/material/Box";

export const UseCasePage = () => {
    const location = useLocation();
    const {enqueueSnackbar} = useSnackbar()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        if (enqueueSnackbar) {
            setLoading(true);
            const ids = new URLSearchParams(location.search).getAll('ids').map(i => parseInt(i))
            ApiService.getUseCases(ids)
                .then(setData)
                .catch(e => enqueueSnackbar('Fehler, bitte versuchen Sie es später erneut', {variant: 'error'}))
                .finally(() => setLoading(false))
        }
    }, [enqueueSnackbar, location.search])

    return <LoadingOverlay
        active={loading}
        spinner
    >
        {!loading ? (data.length > 0 ? <Grid container spacing={3}>
                <Grid
                    item xs={12}>
                    <Card sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column', sm: 'row'},
                        justifyContent: 'space-between'
                    }}>
                        <CardMedia
                            component="img"
                            image={img}
                            sx={{width: 300, objectFit: 'contain', display: {xs: 'block', sm: 'block'}}}
                        />
                        <CardContent>
                            <Typography variant="h6" component="div">
                                Abrakadabra, ihre Lösungen sind da!
                            </Typography>
                            <Box sx={{height: 10}}/>
                            <Typography variant="body2" color="text.secondary">
                                Hier sind lösungen die ich aus ihren antworten zusammengezaubert habe.
                                Dabei finden sie für jede Lösung eine kurze Beschreibung sowie ihnen Link auf die Webseite des jeweiligen Anbieter.
                            </Typography>
                            <Box sx={{height: 10}}/>
                            <Typography variant="body2" color="text.secondary">
                                Viel Spass beim Entdecken von neuen Lösungen!
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {data.map(u => <Grid item xs={12} key={u.id}><UseCase {...u}/></Grid>)}</Grid> : <Grid
                item xs={12}>
                <Card sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', sm: 'row'},
                    justifyContent: 'space-between'
                }}>
                    <CardMedia
                        component="img"
                        image={img}
                        sx={{width: 300, objectFit: 'contain', display: {xs: 'block', sm: 'block'}}}
                    />
                    <CardContent>
                        <Typography variant="h6" component="div">
                            Huch!
                        </Typography>
                        <Box sx={{height: 10}}/>
                        <Typography variant="body2" color="text.secondary">
                            Sieht aus als wären sie schon digitalisiert. Ich kannn da leider nichts mehr anbieten.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>) :
            <Card>
                <CardContent>Laden...</CardContent>
            </Card>}
    </LoadingOverlay>
}

