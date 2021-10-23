import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import { green,  } from '@mui/material/colors';
import React, {createContext, Dispatch, SetStateAction, useContext, useMemo, useState} from "react";

export const theme = createTheme({});

type ThemeContextProps = {
    fontSize: number
    setFontSize: Dispatch<SetStateAction<number>>
    font: string
    setFont: Dispatch<SetStateAction<string>>
}

const ThemeContext = createContext<ThemeContextProps>({} as any)

export const ThemeContextProvider = (props: { children: any }) => {
    const [fontSize, setFontSize] = useState(18)
    const [font, setFont] = useState('Arial')

    const theme = useMemo(() => createTheme({
        typography: {
            fontFamily: font,
            fontSize: fontSize,
        },
        palette: {
            primary: {
                main: '#3f50b5',
            },
        },
    }), [font, fontSize])

    return <ThemeContext.Provider
        value={{
            fontSize,
            setFontSize,
            font,
            setFont,
        }}
    >
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {props.children}
        </ThemeProvider>
    </ThemeContext.Provider>
}

export const useThemeSettings = () => useContext(ThemeContext)