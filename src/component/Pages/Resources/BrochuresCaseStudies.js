import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Banner1 from "./CaseStudiesPic/airfield.jpg"
import Banner2 from "./CaseStudiesPic/changi-airport.jpg"
import Banner3 from "./CaseStudiesPic/case-studies-3.jpg"
import Banner4 from "./CaseStudiesPic/Power_Substation.png"

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

  CardTittle: {
    color: "black",

    "&:hover": {
      color: "blue",
    },
  },

  CardBody: {
    color: "grey",

    "&:hover": {
      color: "black",
    },
  },
}));

export default function BrochuresCaseStudies() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6} lg={6} xs={12} sm={12}>
            <Card className={classes.Card}>
              <CardMedia>
                <img
                  src = {Banner1}
                  alt=''
                  className={classes.CardImage}
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant='subtitle1'>
                  <a
                    href='https://agilfence.com/media/AGIL-Fence-Military-Airfield-Case-Study.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.CardTittle}>
                    Military Airfield
                  </a>
                </Typography>
                <Typography gutterBottom variant='body2' color='textSecondary'>
                  <a
                    href='https://agilfence.com/media/AGIL-Fence-Military-Airfield-Case-Study.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.CardBody}>
                    AgilFence PIDS implemented at a military airfield in
                    Southeast Asia.
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={6} lg={6} xs={12} sm={12}>
            <Card className={classes.Card}>
              <CardMedia>
                <img
                  src = {Banner2}
                  alt=''
                  className={classes.CardImage}
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant='subtitle1'>
                  <a
                    href='https://agilfence.com/media/AGIL-Fence-Changi-Airport-Case-Study.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.CardTittle}>
                    Changi Airport
                  </a>
                </Typography>
                <Typography gutterBottom variant='body2' color='textSecondary'>
                  <a
                    href='https://agilfence.com/media/AGIL-Fence-Changi-Airport-Case-Study.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.CardBody}>
                    Find out how we protect the World’s Best Airport.
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={6} lg={6} xs={12} sm={12}>
            <Card className={classes.Card}>
              <CardMedia>
                <img
                  src = {Banner3}
                  alt=''
                  className={classes.CardImage}
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant='subtitle1'>
                  <a
                    href='https://agilfence.com/media/Case-Study-Setia-Eco-Glades.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.CardTittle}>
                    Setia Eco Glades
                  </a>
                </Typography>
                <Typography gutterBottom variant='body2' color='textSecondary'>
                  <a
                    href='https://agilfence.com/media/Case-Study-Setia-Eco-Glades.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.CardBody}>
                    Find out how we created a secured community for Setia Eco
                    Glades.
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={6} lg={6} xs={12} sm={12}>
            <Card className={classes.Card}>
              <CardMedia>
                <img
                  src = {Banner4}
                  alt=''
                  className={classes.CardImage}
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant='subtitle1'>
                  <a
                    href='https://agilfence.com/media/Case-Study-Power-Substation.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.CardTittle}>
                    Power Substations
                  </a>
                </Typography>
                <Typography gutterBottom variant='body2' color='textSecondary'>
                  <a
                    href='https://agilfence.com/media/Case-Study-Power-Substation.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.CardBody}>
                    Protecting the perimeter of substations within a power
                    distribution grid environment.
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
