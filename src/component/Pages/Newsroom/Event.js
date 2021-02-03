import React from "react";
import PropTypes from "prop-types";
import {
	Typography,
	Container,
	Grid,
	Card,
	CardMedia,
	CardContent,
	Tabs,
	Tab,
	Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NewsCarousell from "./NewsCarousel";
import Year2020_1 from "./EventPic/webinar-1536x528.png"
import Year2020_2 from "./EventPic/ISC-West-2020.jpg"
import Year2020_3 from "./EventPic/intersec.jpg"
import Year2019_1 from "./EventPic/marintec.jpg"
import Year2019_2 from "./EventPic/seecat.jpg"
import Year2019_3 from "./EventPic/thailand-marine.jpg"
import Year2019_4 from "./EventPic/homeland.jpg"
import Year2019_5 from "./EventPic/thailand-oil.jpg"
import Year2019_6 from "./EventPic/ess.jpg"
import Year2019_7 from "./EventPic/ifsec.jpg"
import Year2019_8 from "./EventPic/imdex.jpg"
import Year2019_9 from "./EventPic/ISC-West-2019-Event-Pic.png"
import Year2019_10 from "./EventPic/MIPS-Bali-2019-Event-Pic.png"
import Year2019_11 from "./EventPic/PTX-2019-Event-Pic.png"
import Year2019_12 from "./EventPic/IntersecDubai19_Events-Photo.jpg"
import Year2018_1 from "./EventPic/GSX-2018.jpg"
import Year2018_2 from "./EventPic/IFSEC-LONDON.jpg"
import Year2018_3 from "./EventPic/EGYSEC-2018-event.jpg"
import Year2018_4 from "./EventPic/EXPO-SEGURIDAD-MEXICO.png"
import Year2018_5 from "./EventPic/SECUTECH-INDIA.jpg"
import Year2018_6 from "./EventPic/Intersec-Dubai-Giasco-1.jpg"
import Year2017_1 from "./EventPic/IFSEC_India_Logo-1.jpg"
import Year2017_2 from "./EventPic/IFSEC-International-2017-1.jpg"
import Year2017_3 from "./EventPic/event-isc-brasil.jpg"
import Year2017_4 from "./EventPic/event-isc-west.jpg"
import Year2017_5 from "./EventPic/event-passenger-terminal-expo.jpg"
import Year2017_6 from "./EventPic/event-expo-seguridad.jpg"



function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={2}>
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
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: "flex",
		height: "100%",
		width: "100%",
	},

	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
		overflow: "visible",
	},

	CardImage: {
		height: "100%",
		width: "100%",
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

	Tittle: {
		color: "black",

		"&:hover": {
			color: "blue",
		},
	},

	Image: {
		height: "100%",
		width: "100%",
		maxWidth: "100%",
		borderRadius: "5px",
	},
}));

export default function Events() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Container>
			<NewsCarousell />
				<div className={classes.root} style={{ marginTop: "50px" }}>
					<Tabs
						orientation="vertical"
						variant="scrollable"
						value={value}
						onChange={handleChange}
						aria-label="Vertical tabs example"
						className={classes.tabs}
					>
						<Tab label="2020" {...a11yProps(0)} />
						<Tab label="2019" {...a11yProps(1)} />
						<Tab label="2018" {...a11yProps(2)} />
						<Tab label="2017" {...a11yProps(3)} />
					</Tabs>

					<TabPanel value={value} index={0} id="2020">
						<Container>
							<Grid container spacing={2}>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src={Year2020_1}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography gutterBottom variant="subtitle1">
												<a
													href="https://agilblog.com/webinar/public-safety-security/introducing-the-next-generation-of-fiber-optic-intrusion-detection-system-for-critical-infrastructure-1/"
													target="_blank"
													rel="noopener noreferrer"
													className={classes.Tittle}
												>
													Webinar
												</a>
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												<a
													href="https://agilblog.com/webinar/public-safety-security/introducing-the-next-generation-of-fiber-optic-intrusion-detection-system-for-critical-infrastructure-1/"
													target="_blank"
													rel="noopener noreferrer"
													style={{ color: "black" }}
												>
													Introducing the Next Generation of Fiber Optic
													Intrusion Detection System for Critical Infrastructure
												</a>
											</Typography>
											<Typography
												gutterBottom
												variant="caption"
												align="justify"
											>
												<a
													href="https://agilblog.com/tech-in-action/public-safety-security/keeping-perimeters-safe-and-sound-with-perimeter-intrusion-detection-system/"
													target="_blank"
													rel="noopener noreferrer"
													style={{ color: "black" }}
												>
													Jun 18, 2020 10:00 AM (CST) | 11:00 PM (SGT)
												</a>
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src={Year2020_2}
												alt=""
											/>
										</CardMedia>
										<CardContent>
											<Typography gutterBottom variant="subtitle1">
												<a
													href="https://agilblog.com/webinar/public-safety-security/introducing-the-next-generation-of-fiber-optic-intrusion-detection-system-for-critical-infrastructure-1/"
													target="_blank"
													rel="noopener noreferrer"
													className={classes.Tittle}
												>
													ISC West 2020
												</a>
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												<a
													href="https://agilblog.com/webinar/public-safety-security/introducing-the-next-generation-of-fiber-optic-intrusion-detection-system-for-critical-infrastructure-1/"
													target="_blank"
													rel="noopener noreferrer"
													style={{ color: "black" }}
												>
													05 Oct – 08 Oct
													<br />
													Venue: Las Vegas, United States
												</a>
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src={Year2020_3}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography gutterBottom variant="subtitle1">
												<a
													href="https://agilfence.com/ifsec-international/"
													target="_blank"
													rel="noopener noreferrer"
													className={classes.Tittle}
												>
													Intersec 2020
												</a>
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												<a
													href="https://agilfence.com/ifsec-international/"
													target="_blank"
													rel="noopener noreferrer"
													style={{ color: "black" }}
												>
													19 Jan – 21 Jan
													<br />
													Venue: Dubai, UAE
												</a>
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Container>
					</TabPanel>

					<TabPanel value={value} index={1} id="2019">
						<Container>
							<Grid container spacing={2}>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src= {Year2019_1}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
											>
												Marintec China
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												3 Dec – 6 Dec
												<br />
												Venue: Shanghai, China
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src= {Year2019_2}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
												style={{ marginTop: "3px" }}
											>
												SEECAT Japan 2019
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												2 Oct – 4 Oct
												<br />
												Venue: Tokyo, Japan
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src= {Year2019_3}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
												style={{ marginTop: "5px" }}
											>
												Thailand Marine & Offshore Expo 2019
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												9 Sep – 11 Sep
												<br />
												Venue: Bangkok, Thailand
											</Typography>
										</CardContent>
									</Card>
								</Grid>

								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src= {Year2019_4}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
											>
												India Homeland Security Expo
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												19 Jul – 20 Jul
												<br />
												Venue: New Delhi, India
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src= {Year2019_5}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
											>
												Thailand Oil & Gas Roadshow
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												11 Jul – 12 Jul
												<br />
												Venue: Rayong, Thailand
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src= {Year2019_6}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
											>
												ESS Bogota 2019
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												2 Jul – 5 Jul
												<br />
												Venue: Bogota, Colombia
											</Typography>
										</CardContent>
									</Card>
								</Grid>

								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src= {Year2019_7}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
											>
												IFSEC International 2019
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												18 Jun – 20 Jun
												<br />
												Venue: London, UK
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src= {Year2019_8}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
											>
												IMDEX Asia 2019
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												14 May – 16 May
												<br />
												Venue: Singapore
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src= {Year2019_9}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
											>
												ISC West 2019
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												10 Apr – 12 Apr
												<br />
												Venue: Las Vegas, China
											</Typography>
										</CardContent>
									</Card>
								</Grid>

								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src= {Year2019_10}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
											>
												Milestone Integration Platform Symposium 2019
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												2 Apr – 5 Apr
												<br />
												Venue: Bali, Indonesia
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src= {Year2019_11}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
											>
												Passenger Terminal Expo 2019
											</Typography>
											<Typography
												gutterBottom
												variant="body2"
												align="justify"
												style={{ marginTop: "36px" }}
											>
												26 Mar – 28 Mar
												<br />
												Venue: London, UK
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src= {Year2019_12}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
											>
												Intersec Dubai 2019
											</Typography>
											<Typography
												gutterBottom
												variant="body2"
												align="justify"
												style={{ marginTop: "38px" }}
											>
												20 Jan – 22 Jan
												<br />
												Venue: Dubai, UAE
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Container>
					</TabPanel>

					<TabPanel value={value} index={2} id="2018">
						<Container>
							<Grid container spacing={2}>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src = {Year2018_1}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
											>
												GSX 2018
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												25 Sept – 27 Sept
												<br />
												Venue: Las Vegas, US
												<br />
												Booth: 3851
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src = {Year2018_2}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
											>
												IFSEC London
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												19 Jun – 21 Jun
												<br />
												Venue: London, UK
												<br />
												Booth: F415
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src = {Year2018_3}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent style={{ marginTop: "12px" }}>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
											>
												EGYSEC 2018
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												8 May – 10 May
												<br />
												Venue: Cairo, Egypt
												<br />
												Booth: A23
											</Typography>
										</CardContent>
									</Card>
								</Grid>

								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src = {Year2018_4}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
												style={{ marginTop: "8px" }}
											>
												Expo Seguridad Mexico
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												24 Apr – 26 Apr
												<br />
												Venue: Citibanamex Center, Mexico City
												<br />
												Booth: #2353
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src = {Year2018_5}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
												style={{ marginTop: "22px" }}
											>
												SECUTECH India
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												5 Apr – 7 Apr
												<br />
												Venue: Mumbai, India
												<br />
												Booth: Infinova Booth – Hall No. 1,
												<br /> Booth B-1
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src = {Year2018_6}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
											>
												Intersec Dubai 2018
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												21 Jan – 23 Jan
												<br />
												Venue: Dubai, UAE
												<br />
												Booth: #S1-D34
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Container>
					</TabPanel>

					<TabPanel value={value} index={3} id="2017">
						<Container>
							<Grid container spacing={2}>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src={Year2017_1}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
											>
												IFSEC India 2017
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												6 Dec – 8 Dec
												<br />
												Venue: Pragati Maidan, New Delhi
												<br />
												Booth: C6, Hall 11
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src={Year2017_2}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
												style={{ marginTop: "50px" }}
											>
												IFSEC International 2017
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												20 Jun – 22 Jun
												<br />
												Venue: ExCel London
												<br />
												Booth: F1575
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src={Year2017_3}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
												style={{ marginTop: "35px" }}
											>
												ISC Brazil 2017
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												18 Apr – 20 Apr
												<br />
												Venue: Expo Centre Norte <br /> Sao Paulo, Brazil
												<br />
												Booth: C52
											</Typography>
										</CardContent>
									</Card>
								</Grid>

								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src={Year2017_4}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
												style={{ marginTop: "10px" }}
											>
												ISC West 2017
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												5 Apr – 7 Apr
												<br />
												Venue: Sands Expo Center – Las Vegas
												<br />
												Booth: 19116
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src={Year2017_5}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
											>
												Passenger Terminal Expo 2017
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												14 Mar – 16 Mar
												<br />
												Venue: RAI Amsterdam – Amsterdam Netherlands
												<br />
												Booth: 11040
											</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item md={4} lg={4} xs={12} sm={12}>
									<Card className={classes.Card}>
										<CardMedia>
											<img
												src={Year2017_6}
												alt=""
												className={classes.CardImage}
											/>
										</CardMedia>
										<CardContent>
											<Typography
												gutterBottom
												variant="subtitle1"
												className={classes.Tittle}
												style={{ marginTop: "10px" }}
											>
												Expo Seguridad Mexico 2017
											</Typography>
											<Typography gutterBottom variant="body2" align="justify">
												14 Mar – 16 Mar
												<br />
												Venue: Citibanamex Center, Mexico City
												<br />
												Booth: C52
											</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Container>
					</TabPanel>
				</div>
			</Container>
		</>
	);
}
