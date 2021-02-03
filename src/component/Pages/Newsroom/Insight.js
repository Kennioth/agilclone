import React from "react";
import {
	Typography,
	Container,
	Grid,
	Card,
	CardMedia,
	CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Banner1 from "./InsightPic/intruder-alert.jpg"
import Banner2 from "./InsightPic/keeping-perimeters.jpg"
import Banner3 from "./InsightPic/securing-perimeters.jpg"
import Banner4 from "./InsightPic/talking-points.jpg"
import Banner5 from "./InsightPic/airport-security.jpg"
import Banner6 from "./InsightPic/highlights-of-the-regional.jpg"
import Banner7 from "./InsightPic/sensemaking-in-the-dynamic.jpg"

const useStyles = makeStyles((theme) => ({
	Image: {
		height: "100%",
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
			},
		  },
	  
		  [theme.breakpoints.down("md")]: {
			transform: 'scale(0.9)'
		  },
	},

	Tittle: {
		color: "black",
		fontWeight: 500,

		"&:hover": {
			color: "blue",
		},
	},

	Body: {
		color: "grey",
	},
}));

export default function Insight() {
	const classes = useStyles();

	return (
		<>
			<Container>
				<Card
					style={{ marginTop: "20px", marginBottom: "20px" }}
					className={classes.Card}
					variant="outlined"
				>
					<Grid container spacing={0}>
						<Grid item md={6} lg={6} xs={12} sm={12}>
							<img
								src={Banner1}
								alt=""
								className={classes.Image}
							/>
						</Grid>

						<Grid item md={6} lg={6} xs={12} sm={12}>
							<Typography
								variant="subtitle1"
								style={{
									marginLeft: 10,
									marginRight: 10,
									marginTop: "20px",
									marginBottom: "20px",
								}}
							>
								<a
									href="https://agilblog.com/tech-views/public-safety-security/intruder-alert-pioneering-the-next-generation-of-perimeter-intrusion-detection-systems/"
									target="_blank"
									rel="noopener noreferrer"
									className={classes.Tittle}
								>
									Intruder Alert: Pioneering the Next Generation of Perimter
									Intrusion Detection Systems
								</a>
							</Typography>

							<Typography
								variant="body2"
								align="justify"
								style={{
									marginLeft: 10,
									marginRight: 10,
									marginTop: "20px",
									marginBottom: "20px",
								}}
							>
								<a
									href="https://agilblog.com/tech-views/public-safety-security/intruder-alert-pioneering-the-next-generation-of-perimeter-intrusion-detection-systems/"
									target="_blank"
									rel="noopener noreferrer"
									className={classes.Body}
								>
									Electricity networks and power stations are an essential
									busineess in our modern society and signficiant in the
									contribution of a country's econmic growth. In the last
									decades, these infrastructure have been increasingly complex,
									large, and interconnected. Hence drawing the importance of
									robust perimter security to safe guard installations and its
									operations. Today, how prepared is your facility in defending
									against unprecedented attack, sabotage to operations, theft or
									malicious threat to lives? Read more.
								</a>
							</Typography>
						</Grid>
					</Grid>
				</Card>

				<Grid container spacing={2} style={{ marginBottom: 30 }}>
					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Card className={classes.Card} variant="outlined">
							<CardMedia>
								<img
									src={Banner2}
									alt=""
									className={classes.CardImage}
								/>
							</CardMedia>
							<CardContent>
								<Typography gutterBottom variant="subtitle1">
									<a
										href="https://agilblog.com/tech-in-action/public-safety-security/keeping-perimeters-safe-and-sound-with-perimeter-intrusion-detection-system/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Tittle}
									>
										Keeping Perimeters Safe and Sound with Perimeter Intrusion
										Detection System
									</a>
								</Typography>
								<Typography gutterBottom variant="body2" align="justify">
									<a
										href="https://agilblog.com/tech-in-action/public-safety-security/keeping-perimeters-safe-and-sound-with-perimeter-intrusion-detection-system/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Body}
									>
										Searching large areas to pinpoint a break-in is now a thing
										of the past. Learn more about the innovative Perimeter
										Intrusion Detection System.
									</a>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Card className={classes.Card} variant="outlined">
							<CardMedia>
								<img
									src={Banner3}
									alt=""
									className={classes.CardImage}
								/>
							</CardMedia>
							<CardContent>
								<Typography gutterBottom variant="subtitle1">
									<a
										href="https://agilblog.com/tech-in-action/public-safety-security/keeping-perimeters-safe-and-sound-with-perimeter-intrusion-detection-system/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Tittle}
									>
										Securing Perimeters in Airports to Safeguard Services
									</a>
								</Typography>
								<Typography gutterBottom variant="body2" align="justify">
									<a
										href="https://agilblog.com/tech-in-action/public-safety-security/keeping-perimeters-safe-and-sound-with-perimeter-intrusion-detection-system/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Body}
									>
										Find out more on how the word's top-ranking airport has
										effected a robust intrusion detection systems meeting
										stringent requirements
									</a>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Card className={classes.Card} variant="outlined">
							<CardMedia>
								<img
									src={Banner4}
									alt=""
									className={classes.CardImage}
								/>
							</CardMedia>
							<CardContent>
								<Typography gutterBottom variant="subtitle1">
									<a
										href="http://www.futureairport.com/contractors/terminal-equipment-and-fittings/st-electronics/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Tittle}
									>
										Talking points: A True Sense of Security
									</a>
								</Typography>
								<Typography
									gutterBottom
									variant="body2"
									align="justify"
									style={{ marginTop: "30px" }}
								>
									<a
										href="http://www.futureairport.com/contractors/terminal-equipment-and-fittings/st-electronics/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Body}
									>
										Bernard Lee, vice-president of the company's sensor business
										group, and Alan Xavier Tan, vice-president of Changi Airport
										Group's aviation security unit, talks about airport
										security. Find out more
									</a>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
				<Grid container spacing={2} style={{ marginBottom: 30 }}>
					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Card className={classes.Card}variant="outlined">
							<CardMedia>
								<img
									src={Banner5}
									alt=""
									className={classes.CardImage}
								/>
							</CardMedia>
							<CardContent>
								<Typography gutterBottom variant="subtitle1">
									<a
										href="https://agilfence.com/about/Frost-Sullivan_Airport-Security-New-Technology-to-Meet-Evolving-Threat....pdf"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Tittle}
									>
										Airport Security: New Technology to Meet Evolving Threats
									</a>
								</Typography>
								<Typography gutterBottom variant="body2" align="justify">
									<a
										href="https://agilfence.com/about/Frost-Sullivan_Airport-Security-New-Technology-to-Meet-Evolving-Threat....pdf"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Body}
									>
										Read more on the Frost & Sullivan's market research studies,
										recognising the contribution of AGIL Fence Perimter
										Intrusion Detection Systems.
									</a>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Card className={classes.Card} variant="outlined">
							<CardMedia>
								<img
									src = {Banner6}
									alt=""
									className={classes.CardImage}
								/>
							</CardMedia>
							<CardContent>
								<Typography gutterBottom variant="subtitle1">
									<a
										href="https://agilblog.com/sensemaking-maturity-index/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Tittle}
									>
										Highlights of the Regional Sense making Maturity Index
										Survey
									</a>
								</Typography>
								<Typography gutterBottom variant="body2" align="justify">
									<a
										href="https://agilblog.com/sensemaking-maturity-index/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Body}
									>
										Get insights on how organisations can accelerate their
										readiness across strategy, culture, technology and security
										- to enable collabration, accuracy, scalability and digital
										trust
									</a>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Card className={classes.Card} variant="outlined">
							<CardMedia>
								<img
									src = {Banner7}
									alt=""
									className={classes.CardImage}
								/>
							</CardMedia>
							<CardContent>
								<Typography
									gutterBottom
									variant="subtitle1"
									style={{ marginBottom: "35px" }}
								>
									<a
										href="https://agilblog.com/global-marathon-summit/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Tittle}
									>
										Sensemaking in the Dynamic
									</a>
								</Typography>
								<Typography gutterBottom variant="body2" align="justify">
									<a
										href="https://agilblog.com/global-marathon-summit/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Body}
									>
										Check Out the On-demand Recordings of the Global Marathon
										Summit. Hear from 38 Experts sharing over 28 Use Cases
										across 6 Humanify Tech Tracks.
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
