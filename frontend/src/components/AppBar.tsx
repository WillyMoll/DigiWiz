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

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const StyledTextField = styled(TextField)(({theme}) => ({
    '& .MuiInputLabel-root': {
        color: 'inherit',
    },
    '& .MuiFilledInput-root': {
        borderColor: 'red !important',

        '& :before': {
            borderColor: 'yellow !important',
        },
    },
}))

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
            <Search>
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Suche…"
                    inputProps={{'aria-label': 'search'}}
                />
            </Search>
            <Box>
                <MuiAutocomplete
                    disablePortal
                    options={[]}
                    sx={{width: 300}}
                    color={'inherit'}
                    renderInput={(params) => <StyledTextField {...params} size={'small'} label="Suche" variant={'filled'}/>}
                />
            </Box>
            <Box sx={{flexGrow: 1}}/>
            <SettingsMenu/>
        </Toolbar>
    </MuiAppBar>
}