import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { Typography, Tabs, Tab, Box, AppBar } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import BrochureInformation from "./BrochuresInformation";
import BrochuresCaseStudies from "./BrochuresCaseStudies";
import BrochuresVideo from "./BrochuresVideos";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
  },

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

  button: {
    width: "30px",
    height: "30px",
    padding: "6px 0px",
    margin: "5px",
    borderRadius: "15px",
    textAlign: "center",
    fontSize: "12px",
    lineHeight: "1.42857",
  },
}));

export default function Brochures() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        color='transparent'
        elevation={0}
        style={{ marginBottom: 30 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          style={{ indicatorColor: "#FF0000", textColor: "#FF0000" }}>
          <Tab
            label='Brochures'
            {...a11yProps(0)}
            style={{ textTransform: "none" }}
          />
          <Tab
            label='Case Studies'
            {...a11yProps(1)}
            style={{ textTransform: "none" }}
          />
          <Tab
            label='Video'
            {...a11yProps(2)}
            style={{ textTransform: "none" }}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <BrochureInformation />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <BrochuresCaseStudies />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <BrochuresVideo />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
