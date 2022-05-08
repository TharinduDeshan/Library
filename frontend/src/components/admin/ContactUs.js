import React from 'react';
import {Box, Container, TextField, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Grid from "@mui/material/Grid";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FaxOutlinedIcon from '@mui/icons-material/FaxOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import Button from "@mui/material/Button";
import {useState} from 'react';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        // backgroundColor: "#123421",
    },
    image: {
        width: 100,
        objectFit: "contain"
    },
    flexColScroll: {
        flexGrow: 1,
        overflow: "auto",
        minHeight: "100%"
    }
}))


const ContactUs = () => {
    const classes = useStyles()

    const url = "http://localhost:9000/persons"

    const [data, setData] = useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message

        })
            .then(res => {
                console.log(res.data);
            })
    }

    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    return (

        <Container className={classes.root}>
             <form onSubmit = {(e) => submit(e)}>
            <Grid container direction={"row"} justifyContent="center" marginTop={5}
                  alignItems={"center"}
            >
                <Typography variant={"h6"}>
                    "A Reader lives a thousand lives before he dies.. the man who never reads lives only one"
                </Typography>
            </Grid>
            <Grid container direction={"row"} justifyContent="center" marginTop={5}
                  alignItems={"flex-start"}
            >
                <Grid direction="column" justifyContent="center" alignItems="center" item lg={6} md={5} xs={5}
                >
                    <Grid container direction={"row"} justifyContent="center"
                          alignItems={"center"}
                    >
                        <Typography variant={"h4"}>
                            Leave a Message
                        </Typography>
                    </Grid>
                    
                    <Grid container direction={"row"} justifyContent={"space-around"} marginTop={5}
                          alignItems={"center"}
                    >
                        <TextField onChange = {(e) => handle(e)} value = {data.name} id="name" label="Name" variant="outlined"/>
                        <TextField onChange = {(e) => handle(e)} value = {data.email} id="email" label="Email" variant="outlined"/>
                    </Grid>
                    <Grid container direction={"row"} justifyContent={"space-around"} marginTop={3} paddingX={5}
                          alignItems={"center"}
                    >
                        <TextField  onChange = {(e) => handle(e)} value = {data.subject} id="subject" label="Subject" variant="outlined" fullWidth/>
                    </Grid>
                    <Grid container direction={"row"} justifyContent={"space-around"} marginTop={3} paddingX={5}
                          alignItems={"center"}
                    >
                        <TextField  onChange = {(e) => handle(e)} value = {data.message} rows={6} rowsMax={8} multiline id="message" label="Message" variant="outlined"
                                   fullWidth/>
                    </Grid>
                    <Grid container direction={"row"} justifyContent={"space-around"} marginTop={3} paddingX={5}
                          alignItems={"center"}
                    >
                        <Button type = "submit" variant="contained">Submit</Button>
                    </Grid>
                </Grid>

                <Grid direction="column" justifyContent={"space-between"} alignItems="center" item lg={6} md={5} xs={5}
                >
                    <Grid container direction={"row"} justifyContent="center"
                          alignItems={"center"}
                    >
                        <Typography variant={"h4"}>
                            Contact Us
                        </Typography>
                    </Grid>
                    <Grid container direction={"row"} justifyContent={"flex-start"} marginTop={3} paddingX={5}
                          alignItems={"center"}
                    >
                        <Typography variant={"h6"}>
                            <LocationOnOutlinedIcon fontSize={"medium"}/>
                        </Typography>
                        <Box width={15}/>
                        <Typography variant={"h6"}>
                            SLIIT Malabe Campus, New Kandy Rd, Malabe.
                        </Typography>
                    </Grid>
                    <Grid container direction={"row"} justifyContent={"flex-start"} marginTop={3} paddingX={5}
                          alignItems={"center"}
                    >
                        <Typography variant={"h6"}>
                            <MailOutlinedIcon fontSize={"medium"}/>
                        </Typography>
                        <Box width={15}/>
                        <Typography variant={"h6"}>
                            Wonderfulreading@gmail.com
                        </Typography>
                    </Grid>
                    <Grid container direction={"row"} justifyContent={"flex-start"} marginTop={3} paddingX={5}
                          alignItems={"center"}
                    >
                        <Typography variant={"h6"}>
                            <FaxOutlinedIcon fontSize={"medium"}/>
                        </Typography>
                        <Box width={15}/>
                        <Grid direction="column" justifyContent="center" alignItems="center" item lg={6} md={5} xs={5}
                        >
                            <Typography variant={"subtitle1"}>
                                Fax ID
                            </Typography>
                            <Typography variant={"h6"}>
                                +1(345)567-098
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction={"row"} justifyContent={"flex-start"} marginTop={3} paddingX={5}
                          alignItems={"center"}
                    >
                        <Typography variant={"h6"}>
                            <PhoneInTalkOutlinedIcon fontSize={"medium"}/>
                        </Typography>
                        <Box width={15}/>
                        <Grid direction="column" justifyContent="center" alignItems="center" item lg={6} md={5} xs={5}
                        >
                            <Typography variant={"subtitle1"}>
                                Contact Number
                            </Typography>
                            <Typography variant={"h6"}>
                                0112786175,077916890
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </form>
        </Container>
    );
};

export default ContactUs;
