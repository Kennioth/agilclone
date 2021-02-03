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
	ipamsLogo: {
		marginTop: 10,
		width: "100%",
		maxWidth: "100%",
		height: "100%",
	},

	ipamsButton: {
		borderRadius: "5px",
		fontSize: "12px",
		width: "100%",
		textTransform: 'none',

		"&:hover": {
			color: "white",
			backgroundColor: "#706f6f",
		},

	},

	ipamsCard: {
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

export default function IPAMS() {
	const classes = useStyles();

	return (
		<>
			<img
				src="https://agilfence.com/wp-content/uploads/2020/09/iPAMS_Banner-Image-1536x418.jpg"
				alt=""
				className={classes.ipamsLogo}
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
					Integrated Perimeter Alarm Management System
				</Typography>

				<Typography
					variant="body1"
					object="p"
					align="justify"
					style={{ marginTop: "20px", marginBottom: "20px" }}
				>
					Monitoring and management of security alarms has become challenging
					due to un-unified user interfaces of different sensing products and
					CCTV cameras. Under such a situation, AGIL™ Integrated Perimeter Alarm
					Management System (iPAMS) is capable of integrating with different
					types of sensing products as well as various CCTV cameras.
				</Typography>

				<Grid
					container
					spacing={2}
					style={{ marginTop: "20px", marginBottom: "20px" }}
				>
					<Grid item md={6} lg={6} xs={12} sm={12}>
						<Card className={classes.ipamsCard} variant="outlined">
						<CardContent style={{width: "80%"}}>
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
											Proactive monitoring of each Perimeter Intrusion Detection
											System (PIDS) sensors
										</li>
									</Typography>

									<Typography
										variant="body2"
										component="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>
											Intrusion alerts from the triggered PIDS sensor relay
											precise location information that comes through a video
											pop-up of the assigned camera pre-set and position within
											Security Centre
										</li>
									</Typography>

									<Typography
										variant="body2"
										component="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>
											Automatic marking of PIDS intrusion events and video feeds
											in a single log, allowing operators to easily retrieve
											intrusion reports and analysis
										</li>
									</Typography>

									<Typography
										variant="body2"
										ncomponent="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>
											Access encryption for each workstation at multiple sites
											is available, ensuring high-level authentication to
											security
										</li>
									</Typography>
								</ul>
							</CardContent>
						</Card>
					</Grid>

					<Grid item md={6} lg={6} xs={12} sm={12}>
						<Card className={classes.ipamsCard} variant="outlined">
						<CardContent style={{width: "80%"}}>
								<Typography
									gutterBottom
									variant="h6"
									style={{ marginLeft: 25 }}
								>
									Key Benefits
								</Typography>

								<ul>
									<Typography
										variant="body2"
										component="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>
											Receive instantaneous and reliable intrusion alarm
											notification from PIDS in Security Centre
										</li>
									</Typography>

									<Typography
										variant="body2"
										component="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>
											Optimise security team for prompt incident response based
											on an informed decision from PIDS
										</li>
									</Typography>

									<Typography
										variant="body2"
										component="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>
											Easily obtainable imperative data from PIDS sensors in the
											security desk for post-incident investigation analysis
										</li>
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
							className={classes.ipamsButton}
							target="_blank"
							href="https://agilfence.com/media/AGIL-Fence-Integrated-Perimeter-Alarm-Management-System.pdf"
						>
							Integrate Perimeter Alarm Management System Brochure (EN)
						</Button>
					</Grid>
				</Grid>
				<RelatedLink />
			</Container>
		</>
	);
}
