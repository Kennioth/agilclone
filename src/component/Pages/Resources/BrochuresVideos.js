import React from "react";
import {
  Typography,
  Grid,
  Container,
  Button,
  CardContent,
  Card,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  Button: {
    borderRadius: "20px",
    textAlign: "center",
    fontSize: "12px",
    width: "100%",

    "&:hover": {},
  },

  Video: {
    marginTop: "20px",
    marginBottom: "20px",
  },

  VideoTittle: {
    marginTop: "10px",
    marginBottom: "10px",
    fontWeight: "bold",
  },

  Card: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transitions: "all 0.3s cubic-bezier(.25,.8,.25,1)",
		[theme.breakpoints.up("md")]: {
			"&:hover": {
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        transform: 'scale(1.1)'
			},
		  },
	  
		  [theme.breakpoints.down("md")]: {
			transform: 'scale(0.9)'
		  },
  },
}));

export default function BrochuresVideo() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6} lg={6} xs={12} sm={12} className={classes.Video}>
            <Card className={classes.Card}>
              <ReactPlayer
                url='https://youtu.be/RVu-n4WRy5E'
                height='300px'
                width='100%'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='subtitle1'
                  className={classes.VideoTittle}>
                  Perimeter Protection System
                </Typography>
                <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
                <Grid container spacing={2} item md={6} lg={6} xs={12} sm={12}>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://www.youtube.com/watch?v=mpJemfJkClw'>
                      PT
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://www.youtube.com/watch?v=g0CwhxdeuMQ'>
                      FR
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://www.youtube.com/watch?v=5hE_qWx2swc'>
                      ES
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://www.youtube.com/watch?v=hg9oVPq-Tt0'>
                      CN
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={6} lg={6} xs={12} sm={12} className={classes.Video}>
            <Card Card className={classes.Card}>
              <ReactPlayer
                url='https://www.youtube.com/watch?v=VofX-FOLQeA&feature=emb_logo'
                height='300px'
                width='100%'
              />

              <CardContent>
                <Typography
                  gutterBottom
                  variant='subtitle1'
                  className={classes.VideoTittle}>
                  Changi Airport To Enhance Security Around Airfield
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={6} lg={6} xs={12} sm={12} className={classes.Video}>
            <Card Card className={classes.Card}>
              <ReactPlayer
                url='https://www.youtube.com/watch?v=unFUJj4wIxU&feature=emb_logo'
                height='300px'
                width='100%'
              />

              <CardContent>
                <Typography
                  gutterBottom
                  variant='subtitle1'
                  className={classes.VideoTittle}>
                  AgilFence Airport POC Case Study Video
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={6} lg={6} xs={12} sm={12} className={classes.Video}>
            <Card Card className={classes.Card}>
              <ReactPlayer
                url='https://www.youtube.com/watch?v=tWIj6xn9dkc&feature=youtu.be'
                height='300px'
                width='100%'
              />

              <CardContent>
                <Typography
                  gutterBottom
                  variant='subtitle1'
                  className={classes.VideoTittle}>
                  Perimeter Intrusion Detection System Scenario Clip
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
