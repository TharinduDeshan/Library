import React, {useState} from 'react';
import {styled, alpha} from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import {Container, InputBase, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import book1 from "./assets/book1.jpg";
import book2 from "./assets/book2.jpg";
import book3 from "./assets/book3.jpg";
import book4 from "./assets/book4.jpg";
import book5 from "./assets/book5.jpg";
import book6 from "./assets/book6.jpg";

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

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: "2px solid #222",
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
            width: '100%',
            margin: '0 auto',
        },
    },
}));

const IssuedBooks = () => {
    const classes = useStyles()

    const [selectedBook, setSelectedBook] = useState({
        book: "-",
        bookName: "-",
        customerName: "-",
        date: "-",
        description: "-"
    });


    const data = [
        {"book": book1, "bookName": "Book 01", "customerName": "Lahiru", "date": "16/04/2022", "description": "none"},
        {"book": book2, "bookName": "Book 02", "customerName": "Lakshan", "date": "15/01/2022", "description": "none"},
        {"book": book3, "bookName": "Book 03", "customerName": "Tissera", "date": "14/02/2022", "description": "none"},
        {"book": book4, "bookName": "Book 04", "customerName": "Dilshan", "date": "12/01/2022", "description": "none"},
        {"book": book5, "bookName": "Book 05", "customerName": "Ahamed", "date": "08/03/2022", "description": "none"},
        {"book": book6, "bookName": "Book 06", "customerName": "Naveen", "date": "05/03/2022", "description": "none"}
    ];
    // const listItems =

    // function selectBook(e) {
    //     console.log("adaefd", e)
    //     setSelectedBook()
    // }

    function selectBook(e) {
        console.log(e)
        return setSelectedBook({
            book: e.book,
            bookName: e.bookName,
            customerName: e.customerName,
            date: e.date,
            description: e.description
        });
    }

    return (
        <Container className={classes.root}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase
                    fullWidth
                    placeholder="Search…"
                    inputProps={{'aria-label': 'search'}}
                />
            </Search>
            <Grid container direction={"row"} justifyContent="space-between" marginTop={5}
                  alignItems={"flex-start"}
            >
                <Grid direction="column" justifyContent="center" alignItems="center" item lg={5} md={5} xs={5}
                      padding={1}
                    className={classes.flexColScroll}
                      sx={{height: "500px"}}
                      // component={Paper}
                >
                    {data.map((d) =>
                        <Grid key={d.name} container direction={"row"} marginTop={5}
                              onClick={() => selectBook(d)}
                        >
                            <Grid direction="column" justifyContent="center" alignItems="center" item lg={5} md={5}
                                  xs={5}
                                // className={classes.paper}

                            >
                                <img className={classes.image} src={d.book}/>
                            </Grid>
                            <Grid direction="column" item lg={5} md={5} xs={5}
                                // className={classes.paper}

                            >
                                <Typography variant={"h6"}>
                                    {d.bookName}
                                </Typography>
                                <Typography variant={"body2"}>
                                    {d.customerName}
                                </Typography>
                                <Typography variant={"caption"}>
                                    {d.date}
                                </Typography>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
                <Grid direction="column" justifyContent="center" alignItems="center" item lg={5} md={5} xs={5}
                    // className={classes.paper}
                    //   component={Paper}
                      sx={{height: "500px"}}
                >
                    <Grid container direction={"row"} justifyContent="center" marginTop={5}
                          alignItems="center"
                    >
                        <img className={classes.image} src={selectedBook.book}/>
                    </Grid>
                    <Grid container direction={"row"} justifyContent={"flex-start"} marginTop={5} marginLeft={20} lg={5}
                          alignItems="center"
                    >
                        <Typography variant={"subtitle2"}>
                            Book Name : {selectedBook.bookName}
                        </Typography>
                    </Grid>
                    <Grid container direction={"row"} justifyContent={"flex-start"} marginTop={2} marginLeft={20} lg={5}
                          alignItems="center"
                    >
                        <Typography variant={"subtitle2"}>
                            Customer Name : {selectedBook.customerName}
                        </Typography>
                    </Grid>
                    <Grid container direction={"row"} justifyContent={"flex-start"} marginTop={2} marginLeft={20} lg={5}
                          alignItems="center"
                    >
                        <Typography variant={"subtitle2"}>
                            Date : {selectedBook.date}
                        </Typography>
                    </Grid>
                    <Grid container direction={"row"} justifyContent={"flex-start"} marginTop={2} marginLeft={20} lg={5}
                          alignItems="center"
                    >
                        <Typography variant={"subtitle2"}>
                            Description : {selectedBook.description}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default IssuedBooks;
