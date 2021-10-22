import React from 'react';
import {
    alpha,
    AppBar,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    InputBase, MenuItem, Select, Slider,
    styled,
    Toolbar,
    Typography
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


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

function App() {
    return (
        <Container>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{display: {xs: 'none', sm: 'block'}}}
                        >
                            MUI
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{'aria-label': 'search'}}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box>
                <Toolbar/>
                <Card>
                    <CardContent>
                        <Select>
                            <MenuItem>Arial</MenuItem>
                            <MenuItem>Helvetica</MenuItem>
                            <MenuItem>OpenDyslexic</MenuItem>
                        </Select>
                        <Slider min={12} max={24}/>
                    </CardContent>
                    <CardContent>
                        Lorem Ipsum dolor sit amet.
                    </CardContent>
                    <CardContent>
                        <Button>Start Quiz</Button>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}

export default App;
