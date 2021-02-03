import React from "react";
import { Grid, Container, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Email from "./Email";

const useStyles = makeStyles((theme) => ({
  footer: {
    flexGrow: 1,
    position: "static",
    left: 0,
    bottom: 0,
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "#404040",
  },

  footerLogo: {
    height: "25px",
    width: "158px",
    marginBottom: "20px",
  },

  footerLinkGrid: {
    display: "flex",
    flexWrap: "nowrap",

    [theme.breakpoints.up("xs")]: {
      flexWrap: "wrap",
    },
  },

  footerIconGrid: {
    display: "flex",
    flexWrap: "nowrap",
    marginBottom: 15,
  },

  footerLink: {
    color: "#a3aaaa",
    marginRight: 10,

    "&:hover": {
      textDecoration: "underline #a3aaaa",
    },
  },

  footerTitle: {
    color: "#a3aaaa",
    marginBottom: 5,
    marginTop: 10,
  },

  footerBottom: {
    marginTop: 30,

    [theme.breakpoints.up("xs")]: {
      marginTop: 20,
    },
  },

  footerSub: {
    fontSize: 12,
  },

  footerIcon: {
    marginLeft: 5,
  },

  footerSubLink: {
    color: "#a3aaaa",
    paddingTop: 5,
  },

  footerSmallGrid: {
    marginTop: 10,
    display: "flex",
    flexWrap: "nowrap",
  },

  footerSmallText: {
    color: "#a3aaaa",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={8} style={{ marginTop: "30px" }}>
              <img
                className={classes.footerLogo}
                src='https://www.stengg.com/media/619109/st-engineering-inverse.png'
                alt='Logo'
              />
              <br />
              <Grid
                container
                direction='row'
                alignItems='center'
                className={classes.footerLinkGrid}>
                <Grid item>
                  <Link href='/' underline='none'>
                    <Typography variant='button' className={classes.footerLink}>
                      Home
                    </Typography>
                  </Link>
                </Grid>

                <Grid item>
                  <Link href='/about' underline='none'>
                    <Typography variant='button' className={classes.footerLink}>
                      About
                    </Typography>
                  </Link>
                </Grid>

                <Grid item>
                  <Link href='/' underline='none'>
                    <Typography variant='button' className={classes.footerLink}>
                      Product
                    </Typography>
                  </Link>
                </Grid>

                <Grid item>
                  <Link href='/news' underline='none'>
                    <Typography variant='button' className={classes.footerLink}>
                      News
                    </Typography>
                  </Link>
                </Grid>

                <Grid item>
                  <Link href='/announcement' underline='none'>
                    <Typography variant='button' className={classes.footerLink}>
                      Events
                    </Typography>
                  </Link>
                </Grid>

                <Grid item>
                  <Link href='/resources' underline='none'>
                    <Typography variant='button' className={classes.footerLink}>
                      Resources
                    </Typography>
                  </Link>
                </Grid>

                <Grid item>
                  <Link href='/contact' underline='none'>
                    <Typography variant='button' className={classes.footerLink}>
                      Contact
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
              <Typography
                className={classes.footerTitle}
                style={{ fontWeight: "bold" }}
                variant='body1'
                gutterBottom>
                Mailing List
              </Typography>
              <Typography
                className={classes.footerTitle}
                variant='subtitle2'
                gutterBottom>
                Sign up for our mailing list to receive latest updates from Agil
                Fence.
              </Typography>
              <Email />
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              className={classes.footerbottom}
              style={{ marginTop: "30px" }}>
              <Typography
                variant='button'
                display='block'
                className={classes.footerTitle}>
                Connect with us
              </Typography>

              <Grid container className={classes.footerIconGrid} spacing={0}>
                <Grid item className={classes.footerIcon}>
                  <a
                    href='https://www.facebook.com/AgilFence/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <span class='fa-stack fa-2x' style={{ fontSize: "18px" }}>
                      <i
                        class='fas fa-circle fa-stack-2x'
                        style={{ color: "#58595b" }}
                      />
                      <i class='fab fa-facebook-f fa-stack-1x fa-inverse' />
                    </span>
                  </a>
                </Grid>
                <Grid item className={classes.footerIcon}>
                  <a
                    href='https://www.linkedin.com/in/agilfence/?originalSubdomain=sg'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <span class='fa-stack fa-2x' style={{ fontSize: "18px" }}>
                      <i
                        class='fas fa-circle fa-stack-2x'
                        style={{ color: "#58595b" }}
                      />
                      <i class='fab fa-linkedin fa-stack-1x fa-inverse' />
                    </span>
                  </a>
                </Grid>
              </Grid>

              <Typography
                variant='button'
                display='block'
                className={classes.footerTitle}>
                Sales and Enquiries
              </Typography>
              <Typography className={classes.footerSub}>
                <a className={classes.footerSubLink} href='tel:(+65)65217888'>
                  (+65) 6521 7888
                </a>
              </Typography>
              <Typography className={classes.footerSub}>
                <a
                  className={classes.footerSubLink}
                  href='mailto:AGILFence@stengg.com'>
                  AGILFence@stengg.com
                </a>
              </Typography>
            </Grid>
          </Grid>

          <Grid container >
            <Grid item xs={12} md={8} lg={8} style = {{marginTop: "50px"}}>
              <Typography
                className={classes.footerSmallText}
                variant='caption'
                display='block'
                style={{ marginBottom: "20px" }}>
                Copyright © 2020 ST Engineering
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              lg={4}
              style={{marginBottom: "20px", marginTop: "35px" }}>
              <Grid
                container
                direction='row'
                alignItems='center'
                className={classes.footerSmallGrid}>
                <Grid item>
                  <Typography
                    variant='caption'
                    display='block'
                    style={{ marginRight: 15 }}>
                    <a
                      href='https://www.stengg.com/en/terms-conditions-of-use/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className={classes.footerSmallText}>
                      Terms & Conditions of Use
                    </a>
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant='caption' display='block'>
                    <a
                      href='https://www.stengg.com/en/personal-data-policy/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className={classes.footerSmallText}>
                      Personal Data Policy
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
}