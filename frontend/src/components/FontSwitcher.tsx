import {Grid, InputLabel, MenuItem, Select, Slider, Typography} from "@mui/material";
import React from "react";
import {useThemeSettings} from "../config/theme";

export const FontSwitcher = () => {
    const {fontSize, setFontSize, font, setFont} = useThemeSettings()
    return <Grid container spacing={3}>
        <Grid item xs={12}>
            <InputLabel id="font-label">Schriftart</InputLabel>
            <Select
                labelId="font-label"
                value={font}
                onChange={(e) => setFont(e.target.value)}
                fullWidth={true}
            >
                <MenuItem value={'Arial'}>Arial</MenuItem>
                <MenuItem value={'Helvetica'}>Helvetica</MenuItem>
                <MenuItem value={'OpenDyslexic'}>OpenDyslexic</MenuItem>
                <MenuItem value={'ComicSans'}>ComicSans</MenuItem>
            </Select>
        </Grid>
        <Grid item xs={12}>
            <Typography id="input-slider" gutterBottom>
                Schriftgrösse
            </Typography>
            <Slider
                aria-labelledby="input-slider"
                min={16}
                max={48}
                value={fontSize}
                onChange={(_, v) => setFontSize(Array.isArray(v) ? v[0] : v)}
            />
        </Grid>
    </Grid>
}
