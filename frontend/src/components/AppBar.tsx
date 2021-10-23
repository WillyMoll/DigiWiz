import {AppBar as MuiAppBar, Box, Toolbar, Typography} from "@mui/material";
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