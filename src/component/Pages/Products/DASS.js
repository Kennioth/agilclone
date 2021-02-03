import React from "react";
import {
	Typography,
	Container,
	Grid,
	Card,
	CardContent,
	Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RelatedLink from "./RelatedLink";

const useStyles = makeStyles((theme) => ({
	dassLogo: {
		marginTop: 10,
		width: "100%",
		maxWidth: "100%",
		height: "100%",
	},

	dassButton: {
		borderRadius: "5px",
		fontSize: "12px",
		width: "100%",
		textTransform: 'none',

		"&:hover": {
			color: "white",
			backgroundColor: "#706f6f",
		},
	},

	dassCard: {
		height: "100%",
		borderRadius: 5,
		boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
		transitions: "all 0.3s cubic-bezier(.25,.8,.25,1)",
		"&:hover": {
			color: "white",
			backgroundColor: "#706f6f",
		},

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

export default function DASS() {
	const classes = useStyles();

	return (
		<>
			<img
				className={classes.dassLogo}
				src="https://agilfence.com/wp-content/uploads/2020/09/Distributed-Acousting-Sensing-System_Banner-Image-1536x418.jpg"
				alt="dassLogo"
			/>
			<Container>
				<Typography
					variant="h5"
					style={{
						marginTop: "20px",
						marginBottom: "20px",
						fontWeight: "bold",
					}}
				>
					Distributed Acoustic Sensing System
				</Typography>

				<Grid
					item
					md={12}
					lg={12}
					xs={12}
					sm={12}
					style={{ marginTop: "20px", marginBottom: "20px" }}
				>
					<Typography variant="body1" object="p" align="justify">
						AGIL™ Distributed Acoustic Sensing System (DASS) detects real-time
						sound signals along the entire length of the pipeline continuously
						without any blind points and interferences. It can monitor every
						points of the pipeline, locate the leakage and the third party
						intrusion event accurately, and identify the nature of the
						intrusion. After analysing the sound signals (frequency, amplitude,
						and phase) received from the optical fibre, an alarm will be
						triggered if the event is a threat to the pipeline.
					</Typography>
				</Grid>

				<Grid
					container
					spacing={2}
					style={{ marginTop: "20px", marginBottom: "20px" }}
				>
					<Grid item md={6} lg={6} xs={12} sm={12}>
						<Card className={classes.dassCard} variant="outlined">
							<CardContent>
								<Typography
									gutterBottom
									variant="h6"
									style={{ marginLeft: 25 }}
								>
									Key Features
								</Typography>

								<ul>
									<Typography
										variant="body2"
										component="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>
											No blind zone along the entire length of the pipeline
										</li>
									</Typography>

									<Typography
										variant="body2"
										component="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>Continuous interference-free monitoring</li>
									</Typography>

									<Typography
										variant="body2"
										component="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>Configurable classification of intrusion events</li>
									</Typography>

									<Typography
										variant="body2"
										ncomponent="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>Early warning of threat to the pipeline</li>
									</Typography>

									<Typography
										variant="body2"
										component="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>No maintenance required</li>
									</Typography>

									<Typography
										variant="body2"
										component="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>Easy deployment</li>
									</Typography>
								</ul>
							</CardContent>
						</Card>
					</Grid>

					<Grid item md={6} lg={6} xs={12} sm={12}>
						<Card className={classes.dassCard} variant="outlined">
							<CardContent>
								<Typography
									gutterBottom
									variant="h6"
									style={{ marginLeft: 25 }}
								>
									Advanced Features
								</Typography>

								<Typography
									gutterBottom
									variant="subtitle1"
									style={{ marginLeft: 25 }}
								>
									Detects and locates threats including:
								</Typography>

								<ul>
									<Typography
										variant="body2"
										component="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>Pipeline theft</li>
									</Typography>

									<Typography
										variant="body2"
										component="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>Mechanised digging</li>
									</Typography>

									<Typography
										variant="body2"
										component="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>Third-party intrusion (TPI)</li>
									</Typography>
								</ul>
							</CardContent>
						</Card>
					</Grid>
				</Grid>

				<Typography
					variant="h6"
					style={{ marginTop: "20px", marginBottom: "20px" }}
				>
					Download Brochure
				</Typography>

				<Grid container md={6} lg={6} xs={12} sm={12} spacing={2}>
					<Grid item md={6} lg={6} xs={12} sm={12}>
						<Button
							variant="outlined"
							disableRipple
							className={classes.dassButton}
							target="_blank"
							href="https://agilfence.com/media/AGIL-Fence-Distributed-Acoustic-Sensing-System-(English).pdf"
						>
							Distributed Acoustic Sensing System Brochure (ENG)
						</Button>
					</Grid>

					<Grid item md={6} lg={6} xs={12} sm={12}>
						<Button
							variant="outlined"
							disableRipple
							className={classes.dassButton}
							target="_blank"
							href="https://agilfence.com/media/AGIL-Fence-Distributed-Acoustic-Sensing-System-(Japanese).pdf"
						>
							Distributed Acoustic Sensing System Brochure (JP)
						</Button>
					</Grid>
				</Grid>
				<RelatedLink />
			</Container>
		</>
	);
}
