import {createTheme} from "@mui/material";

const defaultTheme = createTheme()
const theme = createTheme({
    palette: {
        primary: {
            main: "#1976D2",
        },
        secondary: {
            main: "#ffffff",
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {

                    '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                            borderColor: '#1976D2',
                        },
                        // borderColor: '#a407ff',
                        // backgroundColor: "transparent",
                        // color: "#111",
                        borderRadius: "10px",
                        // height: "50px",
                        // fontFamily: "NexaRegular, sans-serif",

                    },
                    '& fieldset': {
                        // borderColor: 'transparent',
                        // backgroundColor: "#ffffff",
                        // color: "#111"
                    },
                }
            }
        },
        MuiCheckbox:{
            styleOverrides:{
                root:{
                    // backgroundColor: "#123",
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    height: "50px",
                    borderRadius: "10px",
                    // background: "linear-gradient(270deg, rgba(0,156,255,1) 0%, rgba(69,3,192,1) 100%)",
                    // backgroundColor:"#0E7EF3",
                    color: "#fff",
                },
                outlinedPrimary: {
                    height: "50px",
                    borderRadius: "10px",
                    color: "#009cff",
                    borderColor: "rgba(0,156,255,1)",
                    borderWidth: 2,
                    "&:hover": {
                        borderWidth: 2,
                        borderColor: "#009cff",
                        background: "rgba(0,156,255,0.2)",
                    }
                }
            }
        },
        MuiDrawer:{
            styleOverrides:{
                paper:{
                    // background: "linear-gradient(-90deg, rgba(66,8,166,1) 0%, rgba(0,45,146,1) 100%)",
                    background: "#2C3F54",
                    color: "#fff",
                    [defaultTheme.breakpoints.up('sm')]: {
                        padding: "0 7px"
                    }
                }
            }
        },
        MuiListItemIcon:{
            // styleOverrides:{
                defaultProps:{
                    color: "#444"
                }
            // }
        },
        MuiSvgIcon:{
            styleOverrides:{
                root:{
                    // color: "#ffffff"
                }
            }
        },
        MuiAppBar:{
            styleOverrides:{
                root:{
                    backgroundColor: "transparent",
                }
            }
        },
        MuiPaper: {
            styleOverrides:{
                root: {
                    backgroundColor: "#ffffff",
                },
                elevation1: {
                    // boxShadow: "3px 3px 5px #cfcfcf,-3px -3px 5px #ffffff",
                },
                elevation2: {
                    // boxShadow: "3px 3px 5px #cfcfcf,-3px -3px 5px #ffffff",
                },
                elevation4:{
                    boxShadow: "none"   //app bar shadow
                }
            }

        },
    }
});

theme.typography.h4 = {
    fontSize: '1.2rem',
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.4rem',
    },
};
export default theme
