import {makeStyles} from "@mui/styles";
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link, useHistory, useLocation} from "react-router-dom";
import {Avatar, Grid, InputBase} from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 270
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    height: "100px",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    height: "100px",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);
const useStyles = makeStyles((theme) => {
    return {
        appBar: {
            transform: "translateZ(500px)",
            backgroundColor: "transparent",
            boxShadow: "none",
            transition: " 0.5s ease",
        },
        setAppBar: {
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
            transform: "translateZ(-500px)",
            background:"#F2F3F2",
            transition: " 0.5s ease",
        },
        text:{
            color: "#1FA394"
        },
        setText:{
            color: "#ffffff"
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            minHeight: '100px',
            ...theme.mixins.toolbar,
        },
        footer: {
            position: "relative",
            left: 0,
            bottom: 0,
            width: "100%",
            textAlign: "center",
        },
        bodyCus: {
            minHeight: "80vh"
        }
    }
})


const DashboardLayout = (props) => {
    const {children} = props;
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [valueCheck, setValueCheck] = useState(false);
    const [headerBackground, setHeaderBackground] = useState("appBar");
    const [text, setText] = useState("text");

    const headerBackgroundRef = React.useRef();
    headerBackgroundRef.current = headerBackground;

    const textRef = React.useRef();
    textRef.current = text;
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const onChange = (value) => {
        console.log(value);
        if (value){
            setValueCheck(true);

        }else {
            setValueCheck(false);
        }
    };

    const menuItems = [
        {
            text: 'Dashboard',
            secondaryText: "",
            icon: <DashboardTwoToneIcon/>,
            path: '/',
            title: 'Dashboard'
        },
        // {
        //     text: 'Category',
        //     secondaryText: "",
        //     icon: <TableChartTwoToneIcon/>,
        //     path: '/category',
        //     title: 'Category'
        // },
        {
            text: 'Issued Books',
            secondaryText: "",
            icon: <BarChartRoundedIcon/>,
            path: '/issuedBooks',
            title: 'Issued Books'
        },
        {
            text: 'Staff Members',
            secondaryText: "",
            icon: <BarChartRoundedIcon/>,
            path: '/staffMemberDetails',
            title: 'Staff Members'
        },
        // {
        //     text: 'Add Staff Members',
        //     secondaryText: "",
        //     icon: <BarChartRoundedIcon/>,
        //     path: '/addStaffMember',
        //     title: 'Add Staff Member'
        // },
        {
            text: 'Staff Requests',
            secondaryText: "",
            icon: <BarChartRoundedIcon/>,
            path: '/staffMemberRequest',
            title: 'Staff Requests'
        },
        {
            text: 'Customers',
            secondaryText: "",
            icon: <BarChartRoundedIcon/>,
            path: '/customerDetails',
            title: 'Customers'
        },
        {
            text: 'Customer Message',
            secondaryText: "",
            icon: <BarChartRoundedIcon/>,
            path: '/customerMessage',
            title: 'Customer Message'
        },
        // {
        //     text: 'Contact Us',
        //     secondaryText: "",
        //     icon: <BarChartRoundedIcon/>,
        //     path: '/contactUs',
        //     title: 'Contact Us'
        // },
    ];


    useEffect(() => {

        const handleScroll = () => {
            const show = window.scrollY > 0;
            if (show) {
                setHeaderBackground("setAppBar");
                // setText("setText");
                console.log(show)
            } else {
                setHeaderBackground("appBar");
                setText("text");
                console.log(show)
            }


        }
        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>

            <AppBar position="fixed" open={open} >
                <Toolbar sx={{eight: "100px"}} className={classes[headerBackgroundRef.current]}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(open && {display: 'none'}),
                        }}
                    >
                        <MenuRoundedIcon sx={{color:window.scrollY > 0? "#1FA394":"#cbd4e8"}}/>
                    </IconButton>
                    <Grid direction={"column"}
                          sx={{flexGrow: 1, p: {sm: 2, md: 5}, display: {xs: 'none', sm: 'block'}}}>
                        <Typography variant={"caption"} noWrap component="div" sx={{color: "#111"}}>
                            Hello Admin, Welcome back!
                        </Typography>
                        {menuItems.map((item) => (
                            (location.pathname === item.path) ?
                                <Typography variant={"h4"} noWrap component="div" className={classes[textRef.current]}>
                                    {item.title}
                                </Typography> : ""
                        ))}

                    </Grid>
                </Toolbar>
            </AppBar>


            <Drawer variant="permanent" open={open}>
                <DrawerHeader sx={{justifyContent: "space-around"}}>
                    {open && <IconButton sx={{backgroundColor: "rgba(255,255,255,0.24)", color:"#cbd4e8"}} onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>}
                </DrawerHeader>
                {/*<Divider/>*/}
                <List>
                    <Grid sx={{paddingTop: "20%"}}>
                        {menuItems.map((item) => (
                            <ListItem
                                button
                                key={item.text}
                                onClick={() => {
                                    history.push(item.path);
                                    console.log("click : ", children);
                                }}
                                sx={{
                                    borderRadius: "10px",
                                    marginY: "10px",
                                    backgroundColor: location.pathname === item.path ? "rgba(255,255,255,0.24)" : "transparent",
                                    "&:hover": {
                                        backgroundColor: "rgba(0,0,0,0.24)",
                                    }
                                }}
                            >
                                <ListItemIcon sx={{color:"#cbd4e8"}}>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} secondary={item.secondaryText}/>
                            </ListItem>
                        ))}
                    </Grid>

                </List>
            </Drawer>
            <Box component="main" sx={{flexGrow: 1, p: 5, bgcolor:"#F2F3F2"}}>
                {/*<div className={classes.toolbar}/>*/}
                <DrawerHeader/>
                <div className={classes.bodyCus}>
                    {children}
                </div>
            </Box>
        </Box>
    );
};


export default DashboardLayout;
