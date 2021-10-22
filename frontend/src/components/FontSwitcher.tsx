import {MenuItem, Select, Slider} from "@mui/material";
import React from "react";
import {useThemeSettings} from "../config/theme";

export const FontSwitcher = () => {
    const {fontSize, setFontSize, font, setFont} = useThemeSettings()
    return <>
        <Select
            value={font}
            onChange={(e) => setFont(e.target.value)}
        >
            <MenuItem value={'Arial'}>Arial</MenuItem>
            <MenuItem value={'Helvetica'}>Helvetica</MenuItem>
            <MenuItem value={'OpenDyslexic'}>OpenDyslexic</MenuItem>
        </Select>
        <Slider
            min={16}
            max={48}
            value={fontSize}
            onChange={(_, v) => setFontSize(Array.isArray(v) ? v[0] : v)}
        />
    </>
}