import React, {useState} from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
  Button,
  Box,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core/styles";
import HomepageCarousel from "./HomepageCarousel";
import ReactPlayer from 'react-player/lazy';
import Highlight1 from './HomepagePic/highlight_1.jpg'
import Highlight2 from './HomepagePic/highlight2.jpg'
import Highlight3 from './HomepagePic/highlight_2.jpg'
import Highlight4 from './HomepagePic/were-agil.jpg'
import Highlight5 from './HomepagePic/highlight5.jpg'
import Highlight6 from './HomepagePic/highlight6.jpg'
import Highlight7 from './HomepagePic/highlight-7.jpg'
import Highlight8 from './HomepagePic/intersec.jpg'
import BIDSImage from './HomepagePic/buried-instrusion-detection-system.jpg'
import IPAMSImage from './HomepagePic/ipams.jpg'
import ContactImage from './HomepagePic/contact-us-1.jpg'


const useStyles = makeStyles((theme) => ({
  Image: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },

  Card: {
    height: "100%",
    width: "100%",
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

  CardTittle: {
    color: "black",

    "&:hover": {
      color: "blue",
    },
  },

  Tittle: {
    height: "75px",
  },

  BIDSCard: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
		url(${BIDSImage})`,
    height: "350px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    color: "#fff",
    fontSize: "4rem",
    borderRadius: "5px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transitions: "all 0.3s cubic-bezier(.25,.8,.25,1)",
  },

  IPAMSCard: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
		url(${IPAMSImage})`,
    height: "350px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    color: "#fff",
    fontSize: "4rem",
    borderRadius: "5px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transitions: "all 0.3s cubic-bezier(.25,.8,.25,1)",
  },

  ContactCard: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
		url(${ContactImage})`,
    height: "250px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transitions: "all 0.3s cubic-bezier(.25,.8,.25,1)",
  },

  ContactButton: {
    borderColor: "white",
    color: "white",

    "&:hover": {
      backgroundColor: "white",
      color: "#181818",
    },
  },

  Padding: {
    marginTop: "20px",
    marginBottom: "20px",
  },
}));

export default function Hompage() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <HomepageCarousel />
      <Container style = {{marginBottom: "20px"}}>
        <Grid
          container
          spacing={0}
          direction='row'
          alignItems='center'
          justify='center'>
          <Typography
            className={classes.Padding}
            variant='h5'
            style={{
              fontWeight: "bold",
              marginTop: "40px",
              marginBottom: "40px",
            }}>
            Top Highlights
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card} variant='outlined'>
              <CardMedia>
                <img
                  src= {Highlight1}
                  alt=''
                  className={classes.Image}
                />
              </CardMedia>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='subtitle2'
                  className={classes.Tittle}
                  display='block'>
                  <a
                    href='https://agilfence.com/media/AGIL-Fence-Military-Airfield-Case-Study.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.CardTittle}>
                    Introducing the Next Generation of Fibre Optic Intrusion
                    Detection System for Critical Infrastructure
                  </a>
                </Typography>
                <Typography
                  gutterBottom
                  variant='caption'
                  color='textSecondary'>
                  Webinar
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card} variant='outlined'>
              <CardMedia>
                <img
                  src= {Highlight2}
                  alt=''
                  className={classes.Image}
                />
              </CardMedia>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='subtitle2'
                  className={classes.Tittle}>
                  <a
                    href='https://agilblog.com/tech-views/public-safety-security/intruder-alert-pioneering-the-next-generation-of-perimeter-intrusion-detection-systems/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.CardTittle}>
                    Intruder Alert: Pioneering the Next Generation of Perimeter
                    Intrusion Detection Systems
                  </a>
                </Typography>
                <Typography
                  gutterBottom
                  variant='caption'
                  color='textSecondary'>
                  Article
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card} variant='outlined'>
              <CardMedia>
                <img
                  src= {Highlight3}
                  alt=''
                  className={classes.Image}
                />
              </CardMedia>
              <CardContent>

                <Typography
                  gutterBottom
                  variant='subtitle2'
                  className={classes.Tittle}
                  onClick={handleClickOpen}
                  style={{cursor:'pointer'}}>
                    <div  className={classes.CardTittle}>
                      Implementing the Highly Innovative FBG-based Perimeter
                      Intrusion Detection System
                    </div>
                </Typography>
                <Dialog open={open} onClose={handleClose} 
                >
                <ReactPlayer
              url="https://youtu.be/RVu-n4WRy5E"
              height="450px"
							width="450px"
						/>
                </Dialog>
                <Typography
                  gutterBottom
                  variant='caption'
                  color='textSecondary'>
                  Video
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card} variant='outlined'>
              <CardMedia>
                <img
                  src= {Highlight4}
                  alt=''
                  className={classes.Image}
                />
              </CardMedia>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='subtitle2'
                  className={classes.Tittle}>
                  <a
                    href='/about'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.CardTittle}>
                    Hi, We Are AGIL™
                  </a>
                </Typography>
                <Typography
                  gutterBottom
                  variant='caption'
                  color='textSecondary'>
                  Announcement
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card} variant='outlined'>
              <CardMedia>
                <img
                  src={Highlight5}
                  alt=''
                  className={classes.Image}
                />
              </CardMedia>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='subtitle2'
                  className={classes.Tittle}>
                  <a
                    href='https://agilfence.com/media/AGIL-Fence-Military-Airfield-Case-Study.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.CardTittle}>
                    Achieving the Highest Standards of Perimeter Protection in
                    Military Environment
                  </a>
                </Typography>
                <Typography
                  gutterBottom
                  variant='caption'
                  color='textSecondary'>
                  Case Study
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card} variant='outlined'>
              <CardMedia>
                <img
                  src={Highlight6}
                  alt=''
                  className={classes.Image}
                />
              </CardMedia>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='subtitle2'
                  className={classes.Tittle}>
                  <a
                    href='https://agilblog.com/tech-in-action/public-safety-security/keeping-perimeters-safe-and-sound-with-perimeter-intrusion-detection-system/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.CardTittle}>
                    Keeping Perimeters Safe and Sound with Perimeter Intrusion
                    Detection System
                  </a>
                </Typography>
                <Typography
                  gutterBottom
                  variant='caption'
                  color='textSecondary'>
                  Article
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card} variant='outlined'>
              <CardMedia>
                <img
                    src= {Highlight7}
                  alt=''
                  className={classes.Image}
                />
              </CardMedia>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='subtitle2'
                  className={classes.Tittle}>
                  <a
                    href='https://agilfence.com/wp-content/uploads/2020/11/AGIL-Fence-Changi-Airport-Case-Study.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.CardTittle}>
                    Perimeter Protection System For World-Class Airport
                  </a>
                </Typography>
                <Typography
                  gutterBottom
                  variant='caption'
                  color='textSecondary'>
                  Case Study
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card} variant='outlined'>
              <CardMedia>
                <img
                    src= {Highlight8}
                  alt=''
                  className={classes.Image}
                />
              </CardMedia>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='subtitle2'
                  className={classes.Tittle}>
                  <a
                    href='https://agilfence.com/announcement'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.CardTittle}>
                    Intersec 2020
                  </a>
                </Typography>
                <Typography
                  gutterBottom
                  variant='caption'
                  color='textSecondary'>
                  Announcement
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </Container>
        <Box style = {{backgroundColor: "#f5f4f3"}}>
        <Container >
        <Grid
          container
          spacing={0}
          direction='row'
          alignItems='center'
          justify='center'>
          <Typography
            className={classes.Padding}
            variant='h5'
            style={{ fontWeight: "bold", marginTop: "40px" }}>
            Featured Products
          </Typography>
        </Grid>
        <Grid container spacing={2} className={classes.Padding}>
          <Grid item md={6} lg={6} xs={12} sm={12}>
            <Box className={classes.BIDSCard}>
              <Box style={{ marginLeft: "30px", marginRight: "30px", marginTop: "10px" }}>
                <Typography variant='h6'>
                  Buried Intrusion Detection System
                </Typography>

                <Typography variant='subtitle2'>
                  Safeguarding open boundary and borders with AGIL Fence
                </Typography>
                <a
                  href='/bids'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: "white" }}>
                  <Typography
                    variant='body1'
                    align='justify'
                    style={{ marginTop: "10px", marginBottom: "40px" }}>
                    Discover the World’s First FBG-based Buried Intrusion
                    Detection Solution for Perimeter Security, providing
                    instantaneous and accurate detection of footsteps that cross
                    unfenced boundary lines.
                  </Typography>
                </a>
              </Box>
            </Box>
          </Grid>

          <Grid item md={6} lg={6} xs={12} sm={12}>
            <Box className={classes.IPAMSCard}>
              <Box style={{ marginLeft: "30px", marginRight: "30px", marginTop: "10px" }}>
                <Typography variant='h6'>
                  Integrated Alarm Management System
                </Typography>

                <Typography variant='subtitle2'>
                  Advancing into The Future of Alarm Management with AGIL Fence
                </Typography>
                <a
                  href='/ipams'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: "white"}}>
                  <Typography
                    variant='body1'
                    align='justify'
                    style={{ marginTop: "10px", marginBottom: "40px"}}>
                    Learn how you can achieve complete control and remote
                    monitoring of all intrusion detection and surveillance
                    systems across multiple sites on a unified platform.
                  </Typography>
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
        </Container>

        <Box
          className={classes.ContactCard}
          style={{ marginTop: "20px" }}>
          <Box>
            <Button
              target='_blank'
              href='/contact'
              variant='outlined'
              className={classes.ContactButton}>
              Contact us now
            </Button>
          </Box>
        </Box>

      </Box>
    </>
  );
}
