import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link1 from "./ProductPic/cag.jpg"
import Link2 from "./ProductPic/highlight-7.jpg"
import Link3 from "./ProductPic/highlight_1.jpg"
import Link4 from "./ProductPic/highlight2.jpg"

const useStyles = makeStyles((theme) => ({
  relatedCard: {
    height: "100%",
    borderRadius: 5,
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

  relatedContent: {
    height: "70px",
  },

  relatedCardImage: {
    height: "100%",
    width: "100%",
  },

  relatedCardTittle: {
    color: "black",

    "&:hover": {
      color: "blue",
    },
  },

  emptyspace: {
    margin: 40,
  },
}));

export default function RelatedLink() {
  const classes = useStyles();

  return (
    <>
      <Typography
        className={classes.Padding}
        variant='h6'
        style={{ marginTop: "30px", marginBottom: "10px" }}>
        Related Links
      </Typography>
      <Divider style={{ marginBottom: "30px" }} />
      <Grid container spacing={2}>
        <Grid item md={3} lg={3} xs={12} sm={12}>
          <Card className={classes.relatedCard}>
            <CardMedia>
              <img
                src= {Link1}
                alt=''
                className={classes.relatedCardImage}
              />
            </CardMedia>
            <CardContent className={classes.relatedContent}>
              <Typography gutterBottom variant='subtitle2'>
                <a
                  href='https://agilfence.com/media/AGIL-Fence-Military-Airfield-Case-Study.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={classes.relatedCardTittle}>
                  Achieving the Highest Standard of Perimeter
                </a>
              </Typography>
            </CardContent>

            <CardContent>
              <Typography
                align='justify'
                variant='caption'
                color='textSecondary'
                component='p'>
                Case Study
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={3} lg={3} xs={12} sm={12}>
          <Card className={classes.relatedCard}>
            <CardMedia>
              <img
                src= {Link2}
                alt=''
                className={classes.relatedCardImage}
              />
            </CardMedia>
            <CardContent className={classes.relatedContent}>
              <Typography gutterBottom variant='subtitle2'>
                <a
                  href='https://agilfence.com/media/AGIL-Fence-Changi-Airport-Case-Study.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={classes.relatedCardTittle}>
                  Perimeter Protection System For World-Class Airport
                </a>
              </Typography>
            </CardContent>

            <CardContent>
              <Typography
                align='justify'
                variant='caption'
                color='textSecondary'
                component='p'>
                Case Study
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={3} lg={3} xs={12} sm={12}>
          <Card className={classes.relatedCard}>
            <CardMedia>
              <img
                src= {Link3}
                alt=''
                className={classes.relatedCardImage}
              />
            </CardMedia>
            <CardContent className={classes.relatedContent}>
              <Typography gutterBottom variant='subtitle2'>
                <a
                  href='https://agilblog.com/webinar/public-safety-security/introducing-the-next-generation-of-fiber-optic-intrusion-detection-system-for-critical-infrastructure-1/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={classes.relatedCardTittle}>
                  Introducing the Next Generation of Fibire Optic Intrusion
                  Detection System for Critical Infrastructure
                </a>
              </Typography>
            </CardContent>

            <CardContent>
              <Typography
                align='justify'
                variant='caption'
                color='textSecondary'
                component='p'>
                Webinar
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={3} lg={3} xs={12} sm={12}>
          <Card className={classes.relatedCard}>
            <CardMedia>
              <img
                src= {Link4}
                alt=''
                className={classes.relatedCardImage}
              />
            </CardMedia>
            <CardContent className={classes.relatedContent}>
              <Typography gutterBottom variant='subtitle2'>
                <a
                  href='https://agilblog.com/tech-views/public-safety-security/intruder-alert-pioneering-the-next-generation-of-perimeter-intrusion-detection-systems/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={classes.relatedCardTittle}>
                  Intruder Alert: Pioneering the Next Generation of Perimeter
                  Intrusion Detection Systems
                </a>
              </Typography>
            </CardContent>

            <CardContent>
              <Typography
                align='justify'
                variant='caption'
                color='textSecondary'
                component='p'>
                Article
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div className={classes.emptyspace} />
    </>
  );
}
