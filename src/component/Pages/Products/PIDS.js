import React from "react";
import {
	Grid,
	Typography,
	Container,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Card,
	CardContent,
	Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ReactPlayer from "react-player/lazy";
import RelatedLink from "./RelatedLink";

const useStyles = makeStyles((theme) => ({
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,

	},

	pidsLogo: {
		marginTop: 10,
		width: "100%",
		maxWidth: "100%",
		height: "100%",
	},

	pidsButton: {
		borderRadius: "5px",
		fontSize: "12px",
		width: "100%",
		textTransform: 'none',

		"&:hover": {
			color: "white",
			backgroundColor: "#706f6f",
		},
	},

	pidsCard: { 	
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

export default function PIDS() {
	const classes = useStyles();

	return (
		<>
			<img
				className={classes.pidsLogo}
				src="https://agilfence.com/wp-content/uploads/2020/09/fence-1536x418.jpg"
				alt=""
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
					Perimeter Intrusion Detection System
				</Typography>
				<Grid container spacing={2}>
					<Grid item md={7} lg={7} xs={12} sm={12}>
						<Typography variant="body1" object="p" align="justify">
							Mega cities around the world face constant security risks. These
							threats must be anticipated, identified and taken down with
							pinpoint accuracy. Vital facilities also pose as attractive
							targets. As perpetrators devise new models of infiltration,
							security protocols need to adapt accordingly by offering reliable
							and credible solutions. Our solution is designed and developed in
							Singapore for fence security, offering highly accurate and
							instantaneous detection. This enables a facility’s security force
							to respond quickly and effectively.
						</Typography>
					</Grid>

					<Grid item md={5} lg={5} xs={12} sm={12}>
						<ReactPlayer
							url="https://youtu.be/RVu-n4WRy5E"
							height="230px"
							width="100%"
						/>
					</Grid>
				</Grid>

				<Grid
					container
					spacing={2}
					style={{ marginTop: "20px", marginBottom: "20px" }}
				>
					<Grid item md={6} lg={6} xs={12} sm={12}>
						<Card className={classes.pidsCard} variant="outlined">
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
											Patented sensors embedded along the sensor cable for a
											high probability of detection and low nuisance alarm rate
										</li>
									</Typography>

									<Typography
										variant="body2"
										component="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>
											Pin-point exact intrusion location and automatically cue
											CCTV camera for instantaneous verification
										</li>
									</Typography>

									<Typography
										variant="body2"
										component="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>
											Seamlessly integrate with other third-party systems like
											CCTV System, VMS/ ISMS and drones that aid in the
											verification of the intrusion alarms
										</li>
									</Typography>

									<Typography
										variant="body2"
										ncomponent="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>
											Customisation of the individual sensor to adapt to the
											different site and security requirements
										</li>
									</Typography>

									<Typography
										variant="body2"
										ncomponent="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>
											No outdoor power or any field of electronics required for
											EMI/ RFI and lightning immunity
										</li>
									</Typography>
								</ul>
							</CardContent>
						</Card>
					</Grid>

					<Grid item md={6} lg={6} xs={12} sm={12}>
						<Card className={classes.pidsCard} variant="outlined">
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
											Provides reliable intrusion alarms help users make prompt
											decisions even in challenging environmental conditions
										</li>
									</Typography>

									<Typography
										variant="body2"
										component="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>
											Enables more efficient and effective protection of the
											premise that frees security team to focus on real threats
										</li>
									</Typography>

									<Typography
										variant="body2"
										component="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>
											Ease of installation that requires minimal or no change to
											the existing infrastructure
										</li>
									</Typography>

									<Typography
										variant="body2"
										component="p"
										style={{ marginTop: 10 }}
										align="justify"
									>
										<li>
											Full scalability able to accommodate all sites from
											small-restricted zones to national borders
										</li>
									</Typography>
								</ul>
							</CardContent>
						</Card>
					</Grid>
				</Grid>

				<Grid md={6} lg={6} xs={12} sm={12}>
					<Accordion 
					style={{ marginTop: "20px", marginBottom: "20px",backgroundColor: "#706f6f", color: "white"}} 
					variant="outlined">
						<AccordionSummary expandIcon={<ExpandMoreIcon style = {{color: "white"}} />}>
							<Typography className={classes.heading}>
								Get A Quote For Your Site
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								<a
									href="https://agilfence.com/media/AGIL-Fence-Website-RFQ-Questionnaire-Form.pdf"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "white", fontSize: "14px" }}
								>
									For New Site
									<i class="fas fa-arrow-right" style={{ marginLeft: 20 ,color: "white", }} />
								</a>
							</Typography>
						</AccordionDetails>
						<AccordionDetails>
							<Typography>
								<a
									href="https://agilfence.com/media/AGIL-Fence-Website-RFQ-Questionnaire-Form.pdf"
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "white", fontSize: "14px" }}
								>
									For Existing Site
									<i class="fas fa-arrow-right" style={{ marginLeft: 20 ,color: "white", }} />
								</a>
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Grid>

				<Typography
					variant="h6"
					style={{ marginTop: "20px", marginBottom: "20px" }}
				>
					Download Brochure
				</Typography>

				<Grid container spacing={2} md={10} lg={10} xs={12} sm={12}>
					<Grid item md={3} lg={3} xs={6} sm={6}>
						<Button
							variant="outlined"
							disableRipple
							className={classes.pidsButton}
							target="_blank"
							href="https://agilfence.com/media/AGIL_Fence_PIDS_Fence-Mount_Product_Fact_Sheet_English.pdf"
						>
							Perimeter Intrusion Detection System Brochure (EN)
						</Button>
					</Grid>
					<Grid item md={3} lg={3} xs={6} sm={6}>
						<Button
							variant="outlined"
							disableRipple
							className={classes.pidsButton}
							target="_blank"
							href="https://agilfence.com/media/AGIL-Fence-Perimeter-Intrusion-Detection-System-Simplified-Chinese.pdf"
						>
							Perimeter Intrusion Detection System Brochure (CN)
						</Button>
					</Grid>
					<Grid item md={3} lg={3} xs={6} sm={6}>
						<Button
							variant="outlined"
							disableRipple
							className={classes.pidsButton}
							target="_blank"
							href="https://agilfence.com/media/AGIL-Fence-Perimeter-Intrusion-Detection-System-Traditional-Chinese.pdf"
						>
							Perimeter Intrusion Detection System Brochure (TW)
						</Button>
					</Grid>
					<Grid item md={3} lg={3} xs={6} sm={6}>
						<Button
							variant="outlined"
							disableRipple
							className={classes.pidsButton}
							target="_blank"
							href="https://agilfence.com/media/AGIL-Fence-Perimeter-Intrusion-Detection-System-Arabic.pdf"
						>
							Perimeter Intrusion Detection System Brochure (AR)
						</Button>
					</Grid>

					<Grid item md={3} lg={3} xs={6} sm={6}>
						<Button
							variant="outlined"
							disableRipple
							className={classes.pidsButton}
							target="_blank"
							href="https://agilfence.com/media/AGIL_Fence_PIDS_Fence_Mount_Product_Fact_Sheet_Japanese.pdf"
						>
							Perimeter Intrusion Detection System Brochure (JP)
						</Button>
					</Grid>
					<Grid item md={3} lg={3} xs={6} sm={6}>
						<Button
							variant="outlined"
							disableRipple
							className={classes.pidsButton}
							target="_blank"
							href="https://agilfence.com/media/AGIL-Fence-Perimeter-Intrusion-Detection-System-Thai.pdf"
						>
							Perimeter Intrusion Detection System Brochure (TH)
						</Button>
					</Grid>
					<Grid item md={3} lg={3} xs={6} sm={6}>
						<Button
							variant="outlined"
							disableRipple
							className={classes.pidsButton}
							target="_blank"
							href="https://agilfence.com/media/AGIL-Fence-Perimeter-Intrusion-Detection-System-Portuguese.pdf"
						>
							Perimeter Intrusion Detection System Brochure (PT)
						</Button>
					</Grid>
					<Grid item md={3} lg={3} xs={6} sm={6}>
						<Button
							variant="outlined"
							disableRipple
							className={classes.pidsButton}
							target="_blank"
							href="https://agilfence.com/media/AGIL_Fence_PIDS_Fence-Mount_Product_Fact_Sheet_Spanish.pdf"
						>
							Perimeter Intrusion Detection System brochure (ES)
						</Button>
					</Grid>
				</Grid>
				<RelatedLink />
			</Container>
		</>
	);
}
