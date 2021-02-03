import React from "react";
import {
	Typography,
	Container,
	Grid,
	Card,
	CardContent,
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
}));

export default function News2() {
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
					style={{fontWeight: "bold", marginTop: "40px", marginBottom: "30px"}}
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

				<Card className={classes.Card} variant="outlined">
					<CardContent>
						<Typography variant="subtitle1" className={classes.Subtittle}>
							<a
								href="https://agilfence.com/pylon-protection/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								ST Engineering Exhibited an Integrated Solution for Pylon
								Protection at EGAT GIS Workshop
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/pylon-protection/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								ST Engineering is proud to showcase its integrated solution
								relating to pylon protection at the EGAT GIS workshop, organised
								by Electricity Generating Authority of Thailand (EGAT) and
								Geo-Informatics (GIS) Center, held on 28 November at Thailand…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">9 December 2019</Typography>

							<a
								href="https://agilfence.com/pylon-protection/"
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
								href="https://agilfence.com/integration-bosch/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								Integration into Bosch BIS via OPC UA
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/integration-bosch/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								AgilFence Perimeter Intrusion Detection System (PIDS) has
								integrated into Bosch Building Integration System (BIS), a
								software that manages its proprietary products and integrates
								with third-party subsystems like access control…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">16 November 2019</Typography>

							<a
								href="https://agilfence.com/integration-bosch/"
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
								href="https://agilfence.com/certified-partners/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								AgilFence Conducted a Certified Partners’ Workshop for Qdtek in
								Hanoi, Vietnam
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/certified-partners/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								In partnership with Quang Dung Northern Technology (Qdtek), an
								exclusive reseller of Milestone VMS and a distributor of Axis
								Communications CCTVs, AgilFence has thoughtfully conducted a
								certified partners’ workshop in Hanoi…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">16 October 2019</Typography>

							<a
								href="https://agilfence.com/certified-partners/"
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
								href="https://agilfence.com/paras/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								AgilFence PIDS Participated in the Program for Applied Research
								in Airport Security (PARAS) by Safe Skies
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/paras/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								National Safe Skies Alliance (Safe Skies) is a non-profit
								organization that works with airports, government, and industry
								to maintain a safe and effective security system…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">3 July 2019</Typography>

							<a
								href="https://agilfence.com/paras/"
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
								href="https://agilfence.com/fbg-based/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								ST Engineering Launches World’s First FBG-based Buried Intrusion
								Detection Solution for Perimeter Security
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/fbg-based/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								ST Engineering today announced the launch of its new AgilFence
								Buried Intrusion Detection System (BIDS) that will provide
								layered protection for critical facilities and enhance border
								security…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">10 April 2019</Typography>

							<a
								href="https://agilfence.com/fbg-based/"
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
								href="https://agilfence.com/pids-sp/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								AgilFence PIDS was Selected by SP Group for 48 of its Critical
								Power Substations
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/pids-sp/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								Engineering’s AgilFence Perimeter Intrusion Detection System,
								which had been evaluated for US aviation use after completing a
								rigorous testing process by US-based National Safe Skies
								Alliance…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">30 December 2018</Typography>

							<a
								href="https://agilfence.com/pids-sp/"
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
								href="https://agilfence.com/technology-genetec/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								Technology Partnership with Genetec
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/technology-genetec/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								To provide better products and solutions for our customers,
								AgilFence is constantly establishing strong alliances with
								exclusively selected technology partners…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">1 November 2018</Typography>

							<a
								href="https://agilfence.com/technology-genetec/"
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
								href="https://agilfence.com/grand-opening/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								Grand Opening for ST Electronics Chongqing
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/grand-opening/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								ST Engineering’s Electronics arm is proud to announce the grand
								opening of their newest subsidiary, ST Electronics Chongqing, on
								29 October 2018…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">29 October 2018</Typography>

							<a
								href="https://agilfence.com/grand-opening/"
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
								href="https://agilfence.com/pat-changi-east/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								AgilFence Personnel & Asset Tracker (PAT) Debuts at Changi East
								Development Site for Enhanced Security and Safety
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/pat-changi-east/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								AgilFence Personnel & Asset Tracker (PAT) is a comprehensive
								smart wireless locator system using GPS and Ultra-Wide Band
								(UWB) technology to accurately track your specific asset or
								personnel outdoor and indoor respectively…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">10 October 2018</Typography>

							<a
								href="https://agilfence.com/pat-changi-east/"
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
								href="https://agilfence.com/agilfence-perimeter-intrusion-detection-system-pids-has-completed-evaluation-by-national-safe-skies-alliance-inc-safe-skies/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								AgilFence Perimeter Intrusion Detection System (PIDS) has
								completed evaluation by National Safe Skies Alliance, Inc (Safe
								Skies)
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/agilfence-perimeter-intrusion-detection-system-pids-has-completed-evaluation-by-national-safe-skies-alliance-inc-safe-skies/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								We are proud to announce that AgilFence Perimeter Intrusion
								Detection System (PIDS) has completed testing and evaluation by
								US-based National Safe Skies Alliance, Inc. (Safe Skies)…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">28 September 2018</Typography>

							<a
								href="https://agilfence.com/agilfence-perimeter-intrusion-detection-system-pids-has-completed-evaluation-by-national-safe-skies-alliance-inc-safe-skies/"
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
								href="https://agilfence.com/st-engineering-has-been-awarded-the-34-substation-sites-in-colombia/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								ST Engineering has been Awarded the 34 Substation Sites in
								Colombia
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/st-engineering-has-been-awarded-the-34-substation-sites-in-colombia/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								ST Engineering is delighted to announce that we have been
								awarded the 34 Substation Sites in Colombia…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">30 June 2018</Typography>

							<a
								href="https://agilfence.com/st-engineering-has-been-awarded-the-34-substation-sites-in-colombia/"
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
								href="https://agilfence.com/we-have-expanded-our-integration-partnership-with-genetec-security-center/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								We Have Expanded our Integration Partnership with Genetec
								Security Center
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/we-have-expanded-our-integration-partnership-with-genetec-security-center/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								AgilFence Perimeter Intrusion Detection System (PIDS) is a truly
								effective and reliable perimeter security solution to protect
								critical infrastructure and high-value assets…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">18 May 2018</Typography>

							<a
								href="https://agilfence.com/we-have-expanded-our-integration-partnership-with-genetec-security-center/"
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
								href="https://agilfence.com/agilfence-perimeter-intrusion-detection-system-pids-in-middle-east/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								AgilFence Perimeter Intrusion Detection System (PIDS) in Middle
								East
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/agilfence-perimeter-intrusion-detection-system-pids-in-middle-east/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								He demand for AgilFence Perimeter Intrusion Detection System
								(PIDS) in the Middle East was driven by factors such as a rising
								number of perimeter intrusions, and unauthorised access to
								facilities…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">11 March 2018</Typography>

							<a
								href="https://agilfence.com/agilfence-perimeter-intrusion-detection-system-pids-in-middle-east/"
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
								href="https://agilfence.com/the-award-winning-agilfence-perimeter-intrusion-detection-system-pids-is-available-in-the-us-and-canada/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								The award-winning AgilFence Perimeter Intrusion Detection System
								(PIDS) is available in the US and Canada
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/the-award-winning-agilfence-perimeter-intrusion-detection-system-pids-is-available-in-the-us-and-canada/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								AgilFence Perimeter Intrusion Detection System (PIDS) from ST
								Engineering is available in the US and Canada. AgilFence PIDS
								has been the solution of choice for perimeter security in
								critical infrastructures…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">25 September 2016</Typography>

							<a
								href="https://agilfence.com/the-award-winning-agilfence-perimeter-intrusion-detection-system-pids-is-available-in-the-us-and-canada/"
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
								href="https://agilfence.com/agilfence-perimeter-intrusion-detection-system-pids-in-south-asia/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								AgilFence Perimeter Intrusion Detection System (PIDS) in South
								Asia
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/agilfence-perimeter-intrusion-detection-system-pids-in-south-asia/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								We are thankful for the interest shown towards AgilFence
								Perimeter Intrusion Detection System (PIDS) in South Asia…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">23 September 2016</Typography>

							<a
								href="https://agilfence.com/agilfence-perimeter-intrusion-detection-system-pids-in-south-asia/"
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
								href="https://agilfence.com/technological-partnership-with-digifort"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								Technological Partnership with Digifort
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/technological-partnership-with-digifort"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								AgilFence is proud to announce our successful integration with
								Digifort. Digifort’s Video Management Software (VMS) provides
								organisations with surveillance…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">22 May 2016</Typography>

							<a
								href="https://agilfence.com/technological-partnership-with-digifort"
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
								href="https://agilfence.com/st-electronics-highlight-integrated-management-solution-for-army-camp/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								ST Electronics Highlight Integrated Management Solution for Army
								Camp
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/st-electronics-highlight-integrated-management-solution-for-army-camp/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								The AgilFence Perimeter Intrusion Detection Systems (PIDS)
								installed provided perimeter security with the addition of
								sensors along the fences to detect any intrusion attempt or
								disturbances…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">19 April 2016</Typography>

							<a
								href="https://agilfence.com/st-electronics-highlight-integrated-management-solution-for-army-camp/"
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
								href="https://agilfence.com/successful-integration-with-milestone"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								Successful integration with Milestone
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/successful-integration-with-milestone"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								We are pleased to announce the integration with Milestone
								Systems. Milestone is a leading provider of open platform IP
								Video Management Software (VMS)…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">22 March 2016</Typography>

							<a
								href="https://agilfence.com/successful-integration-with-milestone"
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
								href="https://agilfence.com/agilfence-perimeter-intrusion-detection-system-pids-in-latin-america-and-southern-europe"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								AgilFence Perimeter Intrusion Detection System (PIDS) in Latin
								America and Southern Europe
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/agilfence-perimeter-intrusion-detection-system-pids-in-latin-america-and-southern-europe"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								We are grateful for the support and demand shown towards
								AgilFence Perimeter Intrusion Detection System (PIDS) in Latin
								America and Southern Europe…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">7 February 2016</Typography>

							<a
								href="https://agilfence.com/agilfence-perimeter-intrusion-detection-system-pids-in-latin-america-and-southern-europe"
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

				<Card className={classes.Card}  variant="outlined">
					<CardContent>
						<Typography variant="subtitle1" className={classes.Subtittle}>
							<a
								href="https://agilfence.com/st-engineerings-electronics-arm-wins-contracts-worth-about-435m-in-4q2015/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								ST Engineering’s Electronics Arm Wins Contracts Worth About
								$435M in 4Q2015
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/st-engineerings-electronics-arm-wins-contracts-worth-about-435m-in-4q2015/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								Our Area Surveillance and Intrusion Detection system, AgilFence,
								has been recognised worldwide to offer highly reliable and yet
								extremely low nuisance alarm physical protection to airports…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">13 January 2016</Typography>

							<a
								href="https://agilfence.com/st-engineerings-electronics-arm-wins-contracts-worth-about-435m-in-4q2015/"
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
								href="https://agilfence.com/making-safety-and-the-environment-a-priority/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								Making Safety and the Environment a Priority
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/making-safety-and-the-environment-a-priority/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								The gated development is equipped with the AgilFence Perimeter
								Intrusion Detection System, which is also used at the Singapore
								Changi international airport…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">1 December 2015</Typography>

							<a
								href="https://agilfence.com/making-safety-and-the-environment-a-priority/"
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
								href="https://agilfence.com/signed-memorandum-of-understanding-with-rostecs-security-technologies-holding/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								Signed Memorandum of Understanding with Rostec’s Security
								Technologies Holding
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/signed-memorandum-of-understanding-with-rostecs-security-technologies-holding/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								Rostec’s Security Technologies and ST Electronics have signed a
								memorandum of understanding for cooperation in surveillance,
								integrated systems for security management…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">25 November 2015</Typography>

							<a
								href="https://agilfence.com/signed-memorandum-of-understanding-with-rostecs-security-technologies-holding/"
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

				<Card className={classes.Card} style={{ marginBottom: 30 }} variant="outlined">
					<CardContent>
						<Typography variant="subtitle1" className={classes.Subtittle}>
							<a
								href="https://agilfence.com/st-electronics-agilfence-is-a-new-perimeter-detection-systems-unveiled-at-aphs/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Link}
							>
								ST Electronics AgilFence is a New Perimeter Detection Systems
								Unveiled at APHS
							</a>
						</Typography>

						<Typography variant="body2">
							<a
								href="https://agilfence.com/st-electronics-agilfence-is-a-new-perimeter-detection-systems-unveiled-at-aphs/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.Text}
							>
								AgilFence is at the forefront in the field of perimeter
								intrusion detection systems (PIDS)…
							</a>
						</Typography>

						<Grid style={{ marginTop: 30 }}>
							<Typography variant="caption">30 October 2015</Typography>

							<a
								href="https://agilfence.com/st-electronics-agilfence-is-a-new-perimeter-detection-systems-unveiled-at-aphs/"
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
			</Container>
		</>
	);
}
