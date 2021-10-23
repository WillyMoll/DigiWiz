import {
    alpha,
    AppBar as MuiAppBar,
    Autocomplete as MuiAutocomplete,
    Box,
    InputBase,
    styled,
    TextField,
    Toolbar,
    Typography
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import {useHistory} from "react-router-dom";
import {SettingsMenu} from "./SettingsMenu";

export const AppBar = () => {
    const h = useHistory();

    return <MuiAppBar position="static">
        <Toolbar>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{display: {xs: 'none', sm: 'block'}, cursor: 'pointer'}}
                onClick={() => h.push('/')}
            >
                DigiWiz
            </Typography>
            <Box sx={{flexGrow: 1}}/>
            <SettingsMenu/>
        </Toolbar>
    </MuiAppBar>
}