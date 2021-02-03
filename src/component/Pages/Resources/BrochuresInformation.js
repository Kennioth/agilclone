import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Container,
  CardActions,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Banner1 from "./BrochureInformationPic/pids.jpg"
import Banner2 from "./BrochureInformationPic/bids.jpg"
import Banner3 from "./BrochureInformationPic/ipams-1.jpg"
import Banner4 from "./BrochureInformationPic/dass.jpg"
import Banner5 from "./BrochureInformationPic/wall-mount-pids.jpg"
import Banner6 from "./BrochureInformationPic/Perimeter-Protection-System.jpg"
import Banner7 from "./BrochureInformationPic/smart-airfield-solution.jpg"
import Banner8 from "./BrochureInformationPic/smart-prison-solutions_1.jpg"
import Banner9 from "./BrochureInformationPic/pipeline-protection-system-2.jpg"
import Banner10 from "./BrochureInformationPic/simply-smarter-eng-1.jpg"
import Banner11 from "./BrochureInformationPic/pat.jpg"

const useStyles = makeStyles((theme) => ({
  CardImage: {
    height: "100%",
    width: "100%",
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

  Button: {
    borderRadius: "20px",
    textAlign: "center",
    fontSize: "12px",
    width: "100%",

    "&:hover": {},
  },
}));

export default function BrochureInformation() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          {/* Perimeter Intrusion Detection System – Fence-Mount PIDS */}
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card}>
              <CardMedia>
                <img
                  src = {Banner1}
                  alt=''
                  className={classes.CardImage}
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant='body1'>
                  Perimeter Intrusion Detection System – Fence-Mount PIDS
                </Typography>
              </CardContent>
              <Divider light />
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/AGIL-Fence-Perimeter-Intrusion-Detection-System-English_SP.pdf'>
                      ENG
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/AGIL-Fence-Perimeter-Intrusion-Detection-System-Simplified-Chinese.pdf'>
                      CN
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/AGIL-Fence-Perimeter-Intrusion-Detection-System-Traditional-Chinese.pdf'>
                      TW
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      target='_blank'
                      className={classes.Button}
                      variant='outlined'
                      href='https://agilfence.com/media/AGIL-Fence-Perimeter-Intrusion-Detection-System-Arabic.pdf'>
                      AR
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/AGIL-Fence-Perimeter-Intrusion-Detection-System-Japanese_SP.pdf'>
                      JP
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/AGIL-Fence-Perimeter-Intrusion-Detection-System-Portuguese.pdf'>
                      PT
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/AGIL-Fence-Perimeter-Intrusion-Detection-System-Thai.pdf'>
                      TH
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/AGIL-Fence-Perimeter-Intrusion-Detection-System-Spanish_SP.pdf'>
                      ES
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>

          {/* Buried Intrusion Detection System for Border Security */}
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card}>
              <CardMedia>
                <img
                  src = {Banner2}
                  alt=''
                  className={classes.CardImage}
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant='body1'>
                  Buried Intrusion Detection System for Border Security
                </Typography>
              </CardContent>
              <Divider light />
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/AGIL-Fence-Buried-Intrusion-Detection-System-English.pdf'>
                      ENG
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/AGIL-Fence-Buried-Intrusion-Detection-System-Japanese.pdf'>
                      JP
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/AGIL-Fence-Buried-Intrusion-Detection-System-Spanish.pdf'>
                      ES
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>

          {/* Integrated Perimeter Alarm Management System */}
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card}>
              <CardMedia>
                <img
                  src = {Banner3}
                  alt=''
                  className={classes.CardImage}
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant='body1'>
                  Integrated Perimeter Alarm Management System
                </Typography>
              </CardContent>
              <Divider light />
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item md={3} lg={3} xs={12} sm={12}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/AGIL-Fence-Integrated-Perimeter-Alarm-Management-System.pdf'>
                      ENG
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>

          {/* Distributed Acoustic Sensing System  */}
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card}>
              <CardMedia>
                <img
                  src = {Banner4}
                  alt=''
                  className={classes.CardImage}
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant='body1'>
                  Distributed Acoustic Sensing System
                </Typography>
              </CardContent>
              <Divider light />
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/AGIL-Fence-Distributed-Acoustic-Sensing-System-(English).pdf'>
                      ENG
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/AGIL-Fence-Distributed-Acoustic-Sensing-System-(Japanese).pdf'>
                      JP
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>

          {/* Perimeter Intrusion Detection System – Wall-Mount PIDS  */}
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card}>
              <CardMedia>
                <img
                  src = {Banner5}
                  alt=''
                  className={classes.CardImage}
                  loading = "lazy"
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant='body1'>
                  Perimeter Intrusion Detection System – Wall-Mount PIDS
                </Typography>
              </CardContent>
              <Divider light />
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Wall-PIDS_English.pdf'>
                      ENG
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Wall-PIDS-(Chinese).pdf'>
                      CN
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Wall-PIDS-(Chinese).pdf'>
                      CN
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Wall-PIDS-(Chinese).pdf'>
                      CN
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>

          {/* Perimeter Protection System  */}
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card}>
              <CardMedia>
                <img
                  src = {Banner6}
                  alt=''
                  className={classes.CardImage}
                  loading = "lazy"
                />
              </CardMedia>
              <CardContent style={{ marginBottom: "24px" }}>
                <Typography gutterBottom variant='body1'>
                  Perimeter Protection System
                </Typography>
              </CardContent>
              <Divider light />
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Perimeter-Protection-System-(English).pdf'>
                      ENG
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Perimeter-Protection-System(Chinese).pdf'>
                      CN
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Perimeter-Protection-System(Spanish).pdf'>
                      ES
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Perimeter-Protection-System-(Portugese).pdf'>
                      PT
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>

          {/* Smart Airfield Solutions  */}
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card}>
              <CardMedia>
                <img
                  src = {Banner7}
                  alt=''
                  className={classes.CardImage}
                  loading = "lazy"
                />
              </CardMedia>
              <CardContent style={{ marginBottom: "24px" }}>
                <Typography gutterBottom variant='body1'>
                  Smart Airfield Solutions
                </Typography>
              </CardContent>
              <Divider light />
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Smart-Airfield-Solutions-Eng.pdf'>
                      ENG
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Smart-Airfield-Solutions_Chinese.pdf'>
                      CN
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Smart-Airfield-Solutions_Spanish.pdf'>
                      ES
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Smart-Airfield-Solutions_Portugese.pdf'>
                      PT
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>

          {/* Smart Prison Solutions  */}
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card}>
              <CardMedia>
                <img
                  src = {Banner8}
                  alt=''
                  className={classes.CardImage}
                  loading = "lazy"
                />
              </CardMedia>
              <CardContent style={{ marginBottom: "24px" }}>
                <Typography gutterBottom variant='body1'>
                  Smart Prison Solutions
                </Typography>
              </CardContent>
              <Divider light />
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Smart-Prison-Solutions(Eng).pdf'>
                      ENG
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Smart-Prison-Solutions-(Chinese).pdf'>
                      CN
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Smart-Prison-Solutions-(Spanish).pdf'>
                      ES
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Smart-Prison-Solutions-(Portugese).pdf'>
                      PT
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>

          {/* Pipeline Protection System   */}
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card}>
              <CardMedia>
                <img
                  src = {Banner9}
                  alt=''
                  className={classes.CardImage}
                  loading = "lazy"
                />
              </CardMedia>
              <CardContent style={{ marginBottom: "24px" }}>
                <Typography gutterBottom variant='body1'>
                  Pipeline Protection System
                </Typography>
              </CardContent>
              <Divider light />
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Pipeline-Protection-System-(Eng).pdf'>
                      ENG
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Pipeline-Protection-System-(Chinese).pdf'>
                      CN
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Pipeline-Protection-System_Spanish.pdf'>
                      ES
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Pipeline-Protection-System_Portugese.pdf'>
                      PT
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>

          {/* Simply Smarter  */}
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card}>
              <CardMedia>
                <img
                  src = {Banner10}
                  alt=''
                  className={classes.CardImage}
                  loading = "lazy"
                />
              </CardMedia>
              <CardContent style={{ marginBottom: "24px" }}>
                <Typography gutterBottom variant='body1'>
                  Simply Smarter
                </Typography>
              </CardContent>
              <Divider light />
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Simply-Smarter-ENG.pdf'>
                      ENG
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Simply-Smarter-Chinese.pdf'>
                      CN
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Simply-Smarter-(Spanish).pdf'>
                      ES
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Simply-Smarter-(French).pdf'>
                      PT
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>

          {/* SSmart Personnel & Asset Tracker   */}
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <Card className={classes.Card}>
              <CardMedia>
                <img
                  src = {Banner11}
                  alt=''
                  className={classes.CardImage}
                  loading = "lazy"
                />
              </CardMedia>
              <CardContent style={{ marginBottom: "24px" }}>
                <Typography gutterBottom variant='body1'>
                  Smart Personnel & Asset Tracker
                </Typography>
              </CardContent>
              <Divider light />
              <CardActions>
                <Grid container spacing={1}>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Personnel-Asset-Tracker-(Eng).pdf'>
                      ENG
                    </Button>
                  </Grid>
                  <Grid item md={3} lg={3} xs={6} sm={6}>
                    <Button
                      className={classes.Button}
                      target='_blank'
                      variant='outlined'
                      href='https://agilfence.com/media/Personnel-Asset-Tracker-Chinese.pdf'>
                      CN
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
