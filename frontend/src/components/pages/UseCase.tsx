import {useState} from "react";
import {Button, Card, CardActions, CardContent, CardHeader} from "@mui/material";
import {Solution} from "../Solution";

export const UseCase = (props: any, key: any) => {
    const [showMore, setShowMore] = useState(false)

    return <Card key={key}>
        <CardHeader title={props.name}/>
        <CardContent>
            {props.solutions.slice(0, showMore ? props.solutions.length : 3).map((s: any) => <Solution
                title={s.name}
                text={s.description}
                imgUrl={s.image}
                webUrl={s.website}
            />)}
        </CardContent>
        {props.solutions.length > 3 &&
        <CardActions>
            <Button
                onClick={() => setShowMore(v => !v)}
            >{showMore ? 'Weniger' : 'Alle'} anzeigen</Button>
        </CardActions>}
    </Card>
}