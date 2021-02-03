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
import RelatedLink1 from "./RelatedLink1";

const useStyles = makeStyles((theme) => ({
	bidsLogo: {
		marginTop: 10,
		width: "100%",
		height: "100%",
		maxWidth: "100%",
	},

	bidsButton: {
		borderRadius: "5px",
		fontSize: "12px",
		width: "100%",
		textTransform: 'none',
		"&:hover": {
			color: "white",
			backgroundColor: "#706f6f",
		},
	},

	bidsCard: {
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

export default function BIDS() {
	const classes = useStyles();

	return (
		<>
			<img
				className={classes.bidsLogo}
				src="https://agilfence.com/wp-content/uploads/2020/09/BIDS_Banner-Image-1536x418.jpg"
				alt="BIDSLogo"
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
					Buried Intrusion Detection System
				</Typography>

				<Grid item md={12} lg={12} xs={12} sm={12}>
					<Typography variant="body1" object="p" align="justify">
						AGIL™ Buried Intrusion Detection System (BIDS) for Border Security &
						Open Boundary Protection is a buried fibre optics sensing solution
						that secures perimeters by detecting a range of threats above and
						below ground, e.g. illegal cross-border immigrants, tunnelling,
						intrusion into an area with no physical barrier.
					</Typography>
				</Grid>

				<Grid
					item
					md={6}
					lg={6}
					xs={12}
					sm={12}
					style={{ marginTop: "20px", marginBottom: "20xp", width: "100%" }}
				>
					<Card className={classes.bidsCard} variant="outlined">
						<CardContent style={{width: "80%"}}>
							<Typography gutterBottom variant="h6" style={{ marginLeft: 25 }}>
								Advanced Features
							</Typography>

							<ul>
								<Typography
									variant="body2"
									component="p"
									style={{ marginTop: 10}}
									align="justify"
								>
									<li>
										Positioning of discrete fibre sensors is flexible,
										adjustable and customisable depending on terrain
									</li>
								</Typography>

								<Typography
									variant="body2"
									component="p"
									style={{ marginTop: 10 }}
									align="justify"
								>
									<li>
										Extremely sensitive sensors for weak ground disturbance
										factors like footsteps
									</li>
								</Typography>

								<Typography
									variant="body2"
									component="p"
									style={{ marginTop: 10 }}
									align="justify"
								>
									<li>
										Offers alarm resolution, giving multiple alarms triggered by
										different fibre sensors
									</li>
								</Typography>

								<Typography
									variant="body2"
									ncomponent="p"
									style={{ marginTop: 10 }}
									align="justify"
								>
									<li>
										Signal processing software rides on COTS PC server, thus
										cheaper, fully reliable and supportable
									</li>
								</Typography>

								<Typography
									variant="body2"
									component="p"
									style={{ marginTop: 10 }}
									align="justify"
								>
									<li>
										Can be scaled-down for shorter distance using fewer-channel
										Sensing Unit
									</li>
								</Typography>
							</ul>
						</CardContent>
					</Card>
				</Grid>

				<Typography
					variant="h6"
					style={{ marginTop: "20px", marginBottom: "20px" }}
				>
					Download Brochure
				</Typography>

				<Grid container md={8} lg={8} xs={12} sm={12} spacing={2}>
					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Button
							variant="outlined"
							disableRipple
							className={classes.bidsButton}
							target="_blank"
							href="https://agilfence.com/media/AGIL-Fence-Buried-Intrusion-Detection-System-English.pdf"
						>
							Buried Intrusion Detection System Brochure (EN)
						</Button>
					</Grid>

					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Button
							variant="outlined"
							disableRipple
							className={classes.bidsButton}
							target="_blank"
							href="https://agilfence.com/media/AGIL-Fence-Buried-Intrusion-Detection-System-Japanese.pdf"
						>
							Buried Intrusion Detection System Brochure (JP)
						</Button>
					</Grid>

					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Button
							variant="outlined"
							disableRipple
							className={classes.bidsButton}
							target="_blank"
							href="https://agilfence.com/media/AGIL-Fence-Buried-Intrusion-Detection-System-Spanish.pdf"
						>
							Buried Intrusion Detection System Brochure (ES)
						</Button>
					</Grid>
				</Grid>
				<RelatedLink1 />
			</Container>
		</>
	);
}
