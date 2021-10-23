import React from "react";
import {Box, Button, IconButton, Menu, MenuItem} from "@mui/material";
import {FontSwitcher} from "./FontSwitcher";
import SettingsIcon from '@mui/icons-material/Settings';

export const SettingsMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <Button
                id="basic-button"
                sx={{display: {xs: 'none', sm: 'block'}}}
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                color={'inherit'}
                onClick={handleClick}
            >
                Einstellungen
            </Button>
            <IconButton
                sx={{display: {xs: 'block', sm: 'none'}}}
                aria-expanded={open ? 'true' : undefined}
                color={'inherit'}
                onClick={handleClick}
            >
                <SettingsIcon/>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <FontSwitcher/>
                </MenuItem>
            </Menu>
        </Box>
    );
}