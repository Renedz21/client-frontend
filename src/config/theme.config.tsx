import React from 'react'
import { ThemeProp } from '../interfaces/ThemeProp.interface'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'

export enum PaletteMode {
    WHITE = "#ffffff",
    BLUE_GRAY = "#393d46",
    LIGHT_GRAY = "#f6f6f6",
    GRAY = "#6e6e6e",
    DARK_GREEN = "#003e29",
    LIGHT_GREEN = "#20a022",
    LIGHT_ORANGE = "#eea463",
    DARK_ORANGE = "#f87411",
    BLACK = "#353535",
    TEXT_FIELD_SIZE = "sm",
    FONT_GLOBAL = "'Poppins', sans-serif",
}


const theme = createTheme({
    palette: {
        background: {
            default: PaletteMode.WHITE,
        },
        // primary: {
        //     main: PaletteMode.WHITE
        // }
    },
    typography: {
        fontFamily: PaletteMode.FONT_GLOBAL
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                style: {
                    backgroundColor: PaletteMode.WHITE,
                }
            }
        },
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: 'none',
                }
            },
            variants: [
                {
                    props: { variant: 'outlined' },
                    style: {
                        borderColor: PaletteMode.DARK_GREEN,
                    }
                },
            ]
        },
        MuiLink: {
            defaultProps: {
                style: {
                    color: PaletteMode.BLACK,
                }
            }
        },
        MuiCardMedia: {
            defaultProps: {
                style: {
                    backgroundColor: PaletteMode.LIGHT_GRAY,
                    boxShadow: 'none',
                    borderRadius: '16px',
                }
            }
        },
        MuiCard: {
            defaultProps: {
                style: {
                    background: 'transparent',
                    boxShadow: 'none',
                }
            }
        },
        MuiRadio: {
            defaultProps: {
                style: {
                    color: PaletteMode.DARK_GREEN,
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    width: '35%',
                }
            }
        }
    }
})


export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}