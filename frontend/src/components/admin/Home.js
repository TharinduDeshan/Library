import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

export default function Home() {

    return(
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card sx={{ maxWidth: 200, bgcolor:"#818181" }}>
                <CardContent>
                  <Typography
                    color="text.secondary"
                    gutterBottom
                    variant={"h6"}
                  >
                    Items
                  </Typography>
                  <Typography
                      variant={"h4"}
                  >
                    32
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ maxWidth: 200, bgcolor:"#335bf3" }}>
                <CardContent>
                  <Typography
                      variant={"h6"}
                    color="text.secondary"
                    gutterBottom
                  >
                    Customers
                  </Typography>
                  <Typography
                      variant={"h4"}
                  >
                    61
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ maxWidth: 200,  bgcolor:"#d3aa70" }}>
                <CardContent>
                  <Typography
                      variant={"h6"}
                    color="text.secondary"
                    gutterBottom
                  >
                    Staff Members
                  </Typography>
                  <Typography
                      variant={"h4"}
                  >
                    56
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ maxWidth: 200, bgcolor:"#1bff00" }}>
                <CardContent>
                  <Typography
                      variant={"h6"}
                    color="text.secondary"
                    gutterBottom
                  >
                    Issued Items
                  </Typography>
                  <Typography
                      variant={"h4"}
                  >
                    34
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
    )
}
