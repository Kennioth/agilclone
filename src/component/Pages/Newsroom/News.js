import React from "react";
import {
	Typography,
	Container,
	Grid,
	Card,
	CardContent,
	Button,
	Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	Card: {
		marginTop: 20,
		marginBottom: 20,
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

	MiniCard: {
		height: "100%",
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

	Subtittle: {
		marginBottom: 20,
	},

	Arrow: {
		float: "right",
	},

	Link: {
		color: "black",

		"&:hover": {
			color: "blue",
		},
	},

	Text: {
		color: "grey",
	},

	Button: {
		borderRadius: 4,

		"&:hover": {
			color: "white",
			backgroundColor: "#404040",
			borderColor: "white",
		},
	},
}));

export default function News() {
	const classes = useStyles();
	return (
		<>
			<Container>
				<Grid
					container
					spacing={0}
					direction="row"
					alignItems="center"
					justify="center"
				>
				<Typography
					className = {classes.Padding}
					variant="h5"
					style={{fontWeight: "bold", marginTop: "40px", marginBottom: "40px"}}
				>
					Announcement
				</Typography>
				</Grid>

				<Card className={classes.Card} variant="outlined">
					<CardContent>
						<Typography variant="subtitle1" className={classes.Subtittle}>
							<a
								href="https://agilfence.com/milestone-systems-verifies-agil-fence-integration-with-the-xprotect-2020/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								Milestone Systems Verifies AGIL Fence Integration with the
								XProtect 2020
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/milestone-systems-verifies-agil-fence-integration-with-the-xprotect-2020/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								AGIL Fence has been verified by Milestone Systems on its
								integration with the XProtect 2020 R2 Video Management System
								(VMS) to provide a unified platform for advanced alarm
								monitoring and intrusion detection…We
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">17 December 2020</Typography>

							<a
								href="https://agilfence.com/milestone-systems-verifies-agil-fence-integration-with-the-xprotect-2020/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Arrow}
							>
								<span>
									<i
										class="fas fa-chevron-right"
										style={{ color: "black", fontSize: "25px" }}
									/>
								</span>
							</a>
						</Grid>
					</CardContent>
				</Card>

				<Card className={classes.Card} variant="outlined">
					<CardContent>
						<Typography variant="subtitle1" className={classes.Subtittle}>
							<a
								href="https://agilfence.com/hi-we-are-agil/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								Hi, We are AGIL™
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/hi-we-are-agil/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								We are excited to share our new distinctive yet unifying
								products brand, AGIL™. As part of ST Engineering Masterbrand and
								its Electronics’ arm in unifying over 50 products and solutions,
								we are adopting the unique solutioning approach, AGIL. As it has
								always been, we know what it takes to solve …
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">8 July 2020</Typography>

							<a
								href="https://agilfence.com/hi-we-are-agil/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Arrow}
							>
								<span>
									<i
										class="fas fa-chevron-right"
										style={{ color: "black", fontSize: "25px" }}
									/>
								</span>
							</a>
						</Grid>
					</CardContent>
				</Card>

				<Card className={classes.Card} variant="outlined">
					<CardContent>
						<Typography variant="subtitle1" className={classes.Subtittle}>
							<a
								href="https://agilfence.com/agil-webinar-series-introducing-the-next-generation-of-fiber-optic-intrusion-detection-system-for-critical-infrastructure/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								AGIL™ Webinar Series: Introducing the Next Generation of Fiber
								Optic Intrusion Detection System for Critical Infrastructure
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/agil-webinar-series-introducing-the-next-generation-of-fiber-optic-intrusion-detection-system-for-critical-infrastructure/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								AGIL Thrive in the Dynamic Webinar Series: Introducing the Next
								Generation of Fiber Optic Intrusion Detection System for
								Critical Infrastructure is our very first webinar session…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">30 June 2020</Typography>

							<a
								href="https://agilfence.com/agil-webinar-series-introducing-the-next-generation-of-fiber-optic-intrusion-detection-system-for-critical-infrastructure/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Arrow}
							>
								<span>
									<i
										class="fas fa-chevron-right"
										style={{ color: "black", fontSize: "25px" }}
									/>
								</span>
							</a>
						</Grid>
					</CardContent>
				</Card>

				<Card className={classes.Card} variant="outlined">
					<CardContent>
						<Typography variant="subtitle1" className={classes.Subtittle}>
							<a
								href="https://agilfence.com/a-unified-security-centre-with-digifort-vms/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								A Unified Security Centre with Digifort VMS
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/a-unified-security-centre-with-digifort-vms/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								Our Perimeter Intrusion Detection System (PIDS) is integrated
								with Digifort – A Surveillance System specialises in video
								surveillance software and video monitoring intelligence…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">26 May 2020</Typography>

							<a
								href="https://agilfence.com/a-unified-security-centre-with-digifort-vms/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Arrow}
							>
								<span>
									<i
										class="fas fa-chevron-right"
										style={{ color: "black", fontSize: "25px" }}
									/>
								</span>
							</a>
						</Grid>
					</CardContent>
				</Card>

				<Card className={classes.Card} variant="outlined">
					<CardContent>
						<Typography variant="subtitle1" className={classes.Subtittle}>
							<a
								href="https://agilfence.com/covid-19-message/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								COVID-19 – Message To Our Valued-Customers
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/covid-19-message/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								In view of the COVID-19 pandemic and its continuality to evolve
								and influence our daily lives, we would like you to know that we
								remain committed to serving our valued customer needs…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">15 April 2020</Typography>

							<a
								href="https://agilfence.com/covid-19-message/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Arrow}
							>
								<span>
									<i
										class="fas fa-chevron-right"
										style={{ color: "black", fontSize: "25px" }}
									/>
								</span>
							</a>
						</Grid>
					</CardContent>
				</Card>

				<Box textAlign="center" style={{ margin: 20 }}>
					<Button variant="outlined" className={classes.Button} href="/news2">
						Read More
					</Button>
				</Box>
				<Grid
					container
					spacing={0}
					direction="row"
					alignItems="center"
					justify="center"
				>
				<Typography
					className = {classes.Padding}
					variant="h5"
					style={{fontWeight: "bold", marginTop: "40px", marginBottom: "40px"}}
				>
				AGIL Fence in the News
				</Typography>
				</Grid>
				<Grid container spacing={2} style={{ marginBottom: 30 }}>
					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Card className={classes.MiniCard} variant="outlined">
							<CardContent>
								<Typography variant="subtitle1" className={classes.Subtittle}>
									<a
										href="https://rejerusalem.com/142228/perimeter-intrusion-detection-systems-market-by-manufacturers-regions-type-and-application-forecast-to-2026-honeywell-advanced-perimeter-systems-agilfence-black-creek-rbtec-sightlogix-and-m/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Link}
									>
										Perimeter Intustion Detection Systems Market
									</a>
								</Typography>

								<Typography variant="body2" align="justify">
									<a
										href="https://rejerusalem.com/142228/perimeter-intrusion-detection-systems-market-by-manufacturers-regions-type-and-application-forecast-to-2026-honeywell-advanced-perimeter-systems-agilfence-black-creek-rbtec-sightlogix-and-m/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Text}
									>
										The latest report published by Zeal Insider provides an
										in-depth analysis on the Perimeter Intrusion Detection
										Systems Market with actual market values for the years 2018
										and 2019 along with forecast for a period from 2020 to 2028.
									</a>
								</Typography>

								<Grid>
									<Typography variant="caption">21 October 2020</Typography>

									<a
										href="https://rejerusalem.com/142228/perimeter-intrusion-detection-systems-market-by-manufacturers-regions-type-and-application-forecast-to-2026-honeywell-advanced-perimeter-systems-agilfence-black-creek-rbtec-sightlogix-and-m/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Arrow}
									>
										<span>
											<i
												class="fas fa-chevron-right"
												style={{ color: "black", fontSize: "25px" }}
											/>
										</span>
									</a>
								</Grid>
							</CardContent>
						</Card>
					</Grid>

					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Card className={classes.MiniCard} variant="outlined">
							<CardContent>
								<Typography
									variant="subtitle1"
									className={classes.Subtittle}
									display="inline"
								>
									<a
										href="https://www.airport-technology.com/news/st-engineering-airport/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Link}
									>
										ST Electronics introduces analytics solution for airports
									</a>
								</Typography>

								<Typography variant="body2" align="justify">
									<a
										href="https://www.airport-technology.com/news/st-engineering-airport/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Text}
									>
										Singapore Technologies Engineering (ST Engineering) has
										released its latest offering, Seris Airport Analytics, to
										help airports manage operations efficiently amid an increase
										in air traffic volume.
									</a>
								</Typography>

								<Grid style={{ marginTop: 20 }}>
									<Typography variant="caption">27 March 2020</Typography>

									<a
										href="https://www.airport-technology.com/news/st-engineering-airport/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Arrow}
									>
										<span>
											<i
												class="fas fa-chevron-right"
												style={{ color: "black", fontSize: "25px" }}
											/>
										</span>
									</a>
								</Grid>
							</CardContent>
						</Card>
					</Grid>

					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Card className={classes.MiniCard} variant="outlined">
							<CardContent>
								<Typography variant="subtitle1" className={classes.Subtittle}>
									<a
										href="https://www.arkansasonline.com/news/2018/feb/09/drone-tech-swarming-air-show-20180209/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Link}
									>
										Drone Tech swarming Air Show
									</a>
								</Typography>

								<Typography
									variant="body2"
									align="justify"
									style={{ marginTop: 27 }}
								>
									<a
										href="https://www.arkansasonline.com/news/2018/feb/09/drone-tech-swarming-air-show-20180209/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Text}
									>
										Behind the noisy aerobatic flight displays and lines of
										visitors ogling fighter jets and missiles on the tarmac, the
										future of aviation is on display in a cavernous exhibition
										hall at the Singapore Airshow, Asia’s largest aeronautical
										event. And that future is drones.
									</a>
								</Typography>

								<Grid style={{ marginTop: 2 }}>
									<Typography variant="caption">9 February 2018</Typography>

									<a
										href="https://www.arkansasonline.com/news/2018/feb/09/drone-tech-swarming-air-show-20180209/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Arrow}
									>
										<span>
											<i
												class="fas fa-chevron-right"
												style={{ color: "black", fontSize: "25px" }}
											/>
										</span>
									</a>
								</Grid>
							</CardContent>
						</Card>
					</Grid>

					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Card className={classes.MiniCard} variant="outlined">
							<CardContent>
								<Typography variant="subtitle1" className={classes.Subtittle}>
									<a
										href="https://www.asiaone.com/business/fancy-lake-district-home-changi-airports-kind-security-system"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Link}
									>
										Fancy a ‘Lake District’ home with Changi Airport’s kind of
										security system?
									</a>
								</Typography>

								<Typography variant="body2" align="justify">
									<a
										href="https://www.asiaone.com/business/fancy-lake-district-home-changi-airports-kind-security-system"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Text}
									>
										THINK rustic English dwellings amid lakes, forests and
										mountains and England’s Lake District comes to mind. This
										picture-perfect view is recreated inside the Setia Eco
										Glades collection.
									</a>
								</Typography>

								<Grid style={{ marginTop: 22 }}>
									<Typography variant="caption">8 October 2017</Typography>

									<a
										href="https://www.asiaone.com/business/fancy-lake-district-home-changi-airports-kind-security-system"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Arrow}
									>
										<span>
											<i
												class="fas fa-chevron-right"
												style={{ color: "black", fontSize: "25px" }}
											/>
										</span>
									</a>
								</Grid>
							</CardContent>
						</Card>
					</Grid>

					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Card className={classes.MiniCard} variant="outlined">
							<CardContent>
								<Typography variant="subtitle1" className={classes.Subtittle}>
									<a
										href="https://www.asmag.com/rankings/m/content.aspx?id=22095"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Link}
									>
										AgilFence Perimeter Intrusion Detection System approved by
										UK Government
									</a>
								</Typography>

								<Typography variant="body2" align="justify">
									<a
										href="https://www.asmag.com/rankings/m/content.aspx?id=22095"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Text}
									>
										Find out more on the exclusive talking points where
										asmag.com speaks with Bernard Lee, VP of Sensors Business at
										ST Electronics (Satcom & Sensor Systems) on the benefits of
										sensors integrated with security systems, and what
										challenges may occur in integration.
									</a>
								</Typography>

								<Grid>
									<Typography variant="caption">31 January 2017</Typography>

									<a
										href="https://www.asmag.com/rankings/m/content.aspx?id=22095"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Arrow}
									>
										<span>
											<i
												class="fas fa-chevron-right"
												style={{ color: "black", fontSize: "25px" }}
											/>
										</span>
									</a>
								</Grid>
							</CardContent>
						</Card>
					</Grid>

					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Card className={classes.MiniCard} variant="outlined">
							<CardContent>
								<Typography variant="subtitle1" className={classes.Subtittle}>
									<a
										href="https://securitynewsdesk.com/perimeter-intrusion-detection-system-approved-uk-government-use/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Link}
									>
										Perimeter Intrusion Detection System approved for UK
										Government use
									</a>
								</Typography>

								<Typography variant="body2" align="justify">
									<a
										href="https://securitynewsdesk.com/perimeter-intrusion-detection-system-approved-uk-government-use/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Text}
									>
										ST Electronics’ AgilFence Perimeter Intrusion Detection
										System approved for UK Government Use in the Protection of
										Critical National Infrastructure.
									</a>
								</Typography>

								<Grid style={{ marginTop: 40 }}>
									<Typography variant="caption">24 January 2017</Typography>

									<a
										href="https://securitynewsdesk.com/perimeter-intrusion-detection-system-approved-uk-government-use/"
										target="_blank"
										rel="noopener noreferrer"
										className={classes.Arrow}
									>
										<span>
											<i
												class="fas fa-chevron-right"
												style={{ color: "black", fontSize: "25px" }}
											/>
										</span>
									</a>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
