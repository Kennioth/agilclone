import React from "react";
import {
	Grid,
	Typography,
	Button,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Banner from "./AboutPic/about-header_1-1536x489.jpg";
import Award1 from "./AboutPic/ies_logo.png";
import Award2 from "./AboutPic/afeo.png";
import Award3 from "./AboutPic/cpni.png";
import Award4 from "./AboutPic/frost-sullivan.png";
import Award5 from "./AboutPic/safe-skies.jpg";
import Award6 from "./AboutPic/american-security.png";
import Partner1 from "./AboutPic/bosch-166x71.jpg";
import Partner2 from "./AboutPic/digifort-104x75.jpg";
import Partner3 from "./AboutPic/infinova-183x63.jpg";
import Partner4 from "./AboutPic/milestone.jpg";
import Partner5 from "./AboutPic/genetec-188x43.jpg";
import Partner6 from "./AboutPic/lenel-165x56.jpg";

const useStyles = makeStyles((theme) => ({
	aboutCardGrid: {
		marginTop: 20,
	},

	aboutLogo: {
		marginTop: 10,
		width: "100%",
		height: "100%",
		maxWidth: "100%",
	},

	aboutTitle: {
		marginTop: 50,
		marginBottom: 15,
	},

	emptyspace: {
		margin: 30,
	},

	emptyspace_lg: {
		margin: 50,
	},

	aboutButton: {
		marginTop: 20,
		marginBottom: "10px",
		borderRadius: 4,
		padding: "8px",
		color: "white",
		backgroundColor: "#706f6f",
		fontWeight: "normal",

		"&:hover": {
			color: "white",
			backgroundColor: "#706f6f",
		},
	},

	aboutCard: {
		height: "100%",
		boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
		transitions: "all 0.3s cubic-bezier(.25,.8,.25,1)",
		backgroundColor: "#f5f4f3",

		[theme.breakpoints.up("md")]: {
			"&:hover": {
				boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
				transform: 'scale(1.1)'
			},
		},

		[theme.breakpoints.down("md")]: {
			transform: "scale(0.9)",
		},
	},

	aboutCardTitle: {
		color: "black",
		fontWeight: 500,
		
		"&:hover": {
			color: "blue",
		},
	},

	aboutCardContent: {
		height: 70,
	},

	aboutTech: {
		marginTop: 20,
	},

	aboutTechText: {
		color: "#6b6b6b",
	},

	Center: {
		[theme.breakpoints.down("md")]: {
			alignItems: "center",
			justify: "center",
		},
	},
}));

export default function About() {
	const classes = useStyles();

	return (
		<>
			<img className={classes.aboutLogo} src={Banner} alt="Logo" />
			<Container>
				<div className={classes.emptyspace} />

				<Grid container spacing={2}>
					<Grid item md={6} lg={6} xs={12} sm={12}>
						<Typography
							variant="h6"
							style={{
								marginTop: "20px",
								marginBottom: "20px",
								fontWeight: "bold",
							}}
						>
							About AGIL Fence
						</Typography>
						<Typography variant="subtitle1">
							Intelligent Solutions, Smarter Protection
						</Typography>
						<br />
						<Typography variant="body1" align="justify">
							Our Electronics’ sector products and solutions branding, AGIL™,
							aims to bring together more than 20 of our products and solutions,
							each having its unique stories and success, as one. AGIL Fence is
							our solution-driven focus and tactical approach in representing
							our suite of fibre-optics perimeter security systems.
						</Typography>
						<br />
						<Typography variant="body1" align="justify">
							Innovation-driven and objective-led AGIL Fence specialise in the
							field of security, providing a multitude of intelligent perimeter
							and surveillance solutions to deliver unparalleled perimeter
							protection. Our solutions have transformed critical
							infrastructures and key installation including airports, borders,
							substations, military sites, correctional facilities and other
							high-security sites globally.
						</Typography>
						<div className={classes.emptyspace} />
					</Grid>

					<Grid item md={6} lg={6} xs={12} sm={12}>
						<Typography
							variant="h6"
							style={{
								marginTop: "20px",
								marginBottom: "20px",
								fontWeight: "bold",
							}}
						>
							Our Company
						</Typography>
						<Typography variant="subtitle1">ST Engineering</Typography>
						<br />
						<Typography variant="body1" align="justify">
							ST Engineering is a global technology, defence and engineering
							group specialising in the aerospace, electronics, land systems and
							marine sectors. The Group employs about 23,000 people across
							offices in Asia, Europe, Middle East and the U.S., serving
							customers in the defence, government and commercial segments in
							more than 100 countries. With more than 700 smart city projects
							across 130 cities in its track record, the Group continues to help
							transform cities through its suite of Smart Mobility, Smart
							Security and Smart Environment solutions. Headquartered in
							Singapore, ST Engineering reported revenue of $7.9b in FY2019 and
							it ranks among the largest companies listed on the Singapore
							Exchange. It is a component stock of the FTSE Straits Times Index,
							MSCI Singapore, iEdge SG ESG Transparency Index and iEdge SG ESG
							Leaders Index.
						</Typography>
						<div className={classes.emptyspace} />
						<Grid
							container
							spacing={0}
							direction="row"
							className={classes.Center}
						>
							<Button
								variant="outlined"
								disableRipple
								className={classes.aboutButton}
								target="_blank"
								href="https://www.stengg.com/"
							>
								Visit ST Engineering
							</Button>
						</Grid>
					</Grid>
				</Grid>

				<Grid
					container
					spacing={0}
					direction="row"
					alignItems="center"
					justify="center"
				>
					<Typography
						className={classes.Padding}
						variant="h5"
						style={{
							fontWeight: "bold",
							marginTop: "60px",
							marginBottom: "40px",
						}}
					>
						Awards & Accolades
					</Typography>
				</Grid>

				<Grid container spacing={2}>
					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Card className={classes.aboutCard} variant="outlined">
							<CardMedia>
								<img
									src={Award1}
									alt="IESLogo"
									style={{ marginLeft: 15, marginTop: 5 }}
								/>
							</CardMedia>
							<CardActions>
								<CardContent>
									<Typography gutterBottom variant="subtitle1">
										<a
											href="https://www.ies.org.sg/ccms.r?pageid=10126&TenID=IES"
											target="_blank"
											rel="noopener noreferrer"
											className={classes.aboutCardTitle}
										>
											Institution of Engineers Singapore (IES)
										</a>
									</Typography>
									<Typography
										className={classes.aboutCardContent}
										align="justify"
										variant="body2"
										color="textSecondary"
										component="p"
										style={{ marginTop: "28px", marginBottom: "10px" }}
									>
										Honoured with the Institution of Engineers (IES) Prestigious
										Engineering Achievement Award 2013, in recognition of the
										technology innovation in AgilFence Perimeter Intrusion
										Detection System.
									</Typography>
								</CardContent>
							</CardActions>
						</Card>
					</Grid>

					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Card className={classes.aboutCard} variant="outlined">
							<CardMedia>
								<img src={Award2} alt="AFEOLogo" style={{ marginTop: 5,marginLeft: 20  }} />
							</CardMedia>
							<CardActions>
								<CardContent>
									<Typography gutterBottom variant="subtitle1">
										<a
											href="https://afeo.org/"
											target="_blank"
											rel="noopener noreferrer"
											className={classes.aboutCardTitle}
										>
											ASEAN Federation of Engineering Orgainisation (AEFEO)
										</a>
									</Typography>
									<Typography
										className={classes.aboutCardContent}
										align="justify"
										variant="body2"
										color="textSecondary"
										component="p"
									>
										ASEAN Outstanding Engineering Achievement Award presented at
										the 31st Conference of the ASEAN Federation of Engineering
										Organisation (CAFE031)
									</Typography>
								</CardContent>
							</CardActions>
						</Card>
					</Grid>

					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Card className={classes.aboutCard} variant="outlined">
							<CardMedia>
								<img
									src={Award3}
									alt="CPNILogo"
									style={{ marginTop: 15, marginLeft: 20 }}
								/>
							</CardMedia>
							<CardActions>
								<CardContent>
									<Typography gutterBottom variant="subtitle1">
										<a
											href="https://www.cpni.gov.uk/cse/agilfence?ref=ajax"
											target="_blank"
											rel="noopener noreferrer"
											className={classes.aboutCardTitle}
										>
											UK Center for the Protection of National Infrastructure
											(CPNI)
										</a>
									</Typography>
									<Typography
										className={classes.aboutCardContent}
										align="justify"
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Featured in CPNI's Catalogue of Security Equipment,
										published by Government of the UK to support security
										contractors in the selection of equipment approved to
										protect critical national Infrastructure and assets.
									</Typography>
								</CardContent>
							</CardActions>
						</Card>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					<Grid item md={4} lg={4} xs={12} sm={12} style={{ marginTop: 10 }}>
						<Card className={classes.aboutCard} variant="outlined">
							<CardMedia>
								<img
									src={Award4}
									alt="Frost&SullivanLogo"
									style={{ marginTop: 25, marginLeft: 20 }}
								/>
							</CardMedia>
							<CardActions>
								<CardContent>
									<Typography gutterBottom variant="subtitle1">
										<a
											href="https://agilfence.com/wp-content/uploads/2020/09/Frost-Sullivan_Airport-Security-New-Technology-to-Meet-Evolving-Threat....pdf"
											target="_blank"
											rel="noopener noreferrer"
											className={classes.aboutCardTitle}
										>
											Frost & Sullivan
										</a>
									</Typography>
									<Typography
										className={classes.aboutCardContent}
										align="justify"
										variant="body2"
										color="textSecondary"
										component="p"
										style={{ marginTop: "10px", marginBottom: "10px" }}
									>
										AgilFence Perimeter Intrusion Detection System contributed
										in Frost & Sullivan’s market research studies and the report
										“Airport Security: New Technology to Meet Evolving Threats”.
									</Typography>
								</CardContent>
							</CardActions>
						</Card>
					</Grid>

					<Grid item md={4} lg={4} xs={12} sm={12} style={{ marginTop: 10 }}>
						<Card className={classes.aboutCard} variant="outlined">
							<CardMedia>
								<img
									src={Award5}
									alt="SakeSkieLogo"
									style={{ marginTop: 10, marginLeft: 20 }}
								/>
							</CardMedia>
							<CardActions>
								<CardContent>
									<Typography gutterBottom variant="subtitle1">
										<a
											href="https://www.sskies.org/images/uploads/subpage/PARAS_0012.UASAirportSecurityIntegration.FinalGuidebook.pdf"
											target="_blank"
											rel="noopener noreferrer"
											className={classes.aboutCardTitle}
										>
											Sake Skies
										</a>
									</Typography>
									<Typography
										className={classes.aboutCardContent}
										align="justify"
										variant="body2"
										color="textSecondary"
										component="p"
									>
										Through the Program for Applied Research in Airport Security
										(PARAS), Safe Skies accomplished the integration of the
										Percepto UAS with the AgilFence PIDS on the Percepto Cloud
										Management Software
									</Typography>
								</CardContent>
							</CardActions>
						</Card>
					</Grid>

					<Grid item md={4} lg={4} xs={12} sm={12} style={{ marginTop: 10 }}>
						<Card className={classes.aboutCard} variant="outlined">
							<CardMedia>
								<img
									src={Award6}
									alt="AmericaSecurityLogo"
									style={{ marginTop: 5, marginLeft: 20 }}
								/>
							</CardMedia>
							<CardActions>
								<CardContent>
									<Typography gutterBottom variant="subtitle1">
										<a
											href="https://americansecuritytoday.com/ast-names-2018-astors-homeland-security-awards-winners-at-the-javits-center-in-nyc/"
											target="_blank"
											rel="noopener noreferrer"
											className={classes.aboutCardTitle}
										>
											American Security Today
										</a>
									</Typography>
									<Typography
										className={classes.aboutCardContent}
										align="justify"
										variant="body2"
										color="textSecondary"
										component="p"
									>
										AgilFence Perimeter Intrusion Detection System competed
										against the industry's leading providers of Innovative
										Perimeter Protection Systems and was one of the Award Winner
										for Best Perimeter Protection System.
									</Typography>
								</CardContent>
							</CardActions>
						</Card>
					</Grid>
				</Grid>

				<Grid
					container
					spacing={0}
					direction="row"
					alignItems="center"
					justify="center"
				>
					<Typography
						className={classes.Padding}
						variant="h5"
						style={{
							fontWeight: "bold",
							marginTop: "60px",
							marginBottom: "40px",
						}}
					>
						Our Technology Partners
					</Typography>
				</Grid>

				<Grid container spacing={2} className={classes.aboutTech}>
					<Grid item md={2} lg={2} xs={12} sm={12}>
						<a
							href="https://www.boschsecurity.com/xc/en/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={Partner1} alt="BoschLogo" />
						</a>
					</Grid>

					<Grid item md={10} lg={10} xs={12} sm={12}>
						<Typography variant="body1" align="justify">
							<a
								href="https://www.boschsecurity.com/xc/en/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.aboutTechText}
							>
								The Bosch division Building Technologies is a leading global
								supplier of security, safety, and communications products and
								systems. In selected countries Bosch offers solutions and
								services for building security, energy efficiency and building
								automation. About 9,000 associates generated sales of more than
								1.9 billion euros in 2017. Protecting lives, buildings and
								assets is the major aim. The product portfolio includes video
								surveillance, intrusion detection, fire detection and voice
								evacuation systems as well as access control and management
								systems. Professional audio and conference systems for
								communication of voice, sound and music complete the range.
								Building Technologies develops and manufactures in its own
								plants in Europe, Americas and Asia.
							</a>
						</Typography>
						<br />
						<Typography variant="body1" style={{ color: "#6b6b6b" }}>
							Integrated with
							<a
								style={{
									marginLeft: 5,
									color: "#6b6b6b",
									textDecoration: "underline",
								}}
								href="https://www.boschsecurity.com/xc/en/products/management-software/bis/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Building Integration System (BIS).
							</a>
						</Typography>
					</Grid>
				</Grid>

				<Grid container spacing={2} className={classes.aboutTech}>
					<Grid item md={2} lg={2} xs={12} sm={12}>
						<a
							href="http://www.digifort.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={Partner2} alt="DigifortLogo" />
						</a>
					</Grid>

					<Grid item md={10} lg={10} xs={12} sm={12}>
						<Typography variant="body1" align="justify">
							<a
								href="http://www.digifort.com/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.aboutTechText}
							>
								The Digifort solution presents itself in products that cover all
								the needs of the surveillance and intelligence in video
								monitoring, providing solutions that cover small 8 camera
								systems to major projects with multiple locations managed from a
								single central with 30,000 + active channels. With presence in
								more than 120 countries and a solid trajectory and reputation
								which covers the globe delivering stability and best of product,
								looking for excellence, integrating new technologies, always
								providing relevant improvements and leading the VMS market to
								introduce a new concept in security.
							</a>
						</Typography>
						<br />
						<Typography variant="body1" style={{ color: "#6b6b6b" }}>
							Integrated with
							<a
								style={{
									marginLeft: 5,
									color: "#6b6b6b",
									textDecoration: "underline",
								}}
								href="http://www.digifort.com/gerenciamento-de-video.php"
								target="_blank"
								rel="noopener noreferrer"
							>
								Digifort Enterprise VMS.
							</a>
						</Typography>
					</Grid>
				</Grid>

				<Grid container spacing={2} className={classes.aboutTech}>
					<Grid item md={2} lg={2} xs={12} sm={12}>
						<a
							href="http://www.infinova.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={Partner3} alt="InfinovaLogo" />
						</a>
					</Grid>

					<Grid item md={10} lg={10} xs={12} sm={12}>
						<Typography variant="body1" align="justify">
							<a
								href="http://www.infinova.com/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.aboutTechText}
							>
								With solutions that enable end users to extend the life of their
								existing analog equipment by having it co-exist with their new
								IP video equipment, Infinova provides core equipment for video
								control rooms, megapixel, IP and analog surveillance cameras,
								specialized cameras, fiber optic communications products and
								customized systems. Infinova is acknowledged for its exceptional
								customer service programs as “the Integrator’s Manufacturer.”
							</a>
						</Typography>
						<br />
						<Typography variant="body1" style={{ color: "#6b6b6b" }}>
							Integrated with
							<a
								style={{
									marginLeft: 5,
									color: "#6b6b6b",
									textDecoration: "underline",
								}}
								href="https://www.infinova.com/product/video-management-software/intelligent-video-management-software/V2217/84/33"
								target="_blank"
								rel="noopener noreferrer"
							>
								Video Management System (VMS) v2217.
							</a>
						</Typography>
					</Grid>
				</Grid>

				<Grid container spacing={2} className={classes.aboutTech}>
					<Grid item md={2} lg={2} xs={12} sm={12}>
						<a
							href="http://http//www.milestonesys.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={Partner4} alt="MilestoneLogo" />
						</a>
					</Grid>

					<Grid item md={10} lg={10} xs={12} sm={12}>
						<Typography variant="body1" align="justify">
							<a
								href="http://http//www.milestonesys.com/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.aboutTechText}
							>
								Founded in 1998, Milestone Systems provides open-platform IP
								video management software solutions. The XProtect® video
								management platform delivers powerful surveillance that is easy
								to manage, reliable and proven in thousands of customer
								installations around the world. With support for the widest
								choice in network hardware and integration with other systems,
								XProtect® video management software provides solutions to video
								enable organizations managing risks, protecting people and
								assets, optimizing processes and reducing costs. Milestone
								software is sold through authorized and certified partners.
							</a>
						</Typography>
						<br />
						<Typography variant="body1" style={{ color: "#6b6b6b" }}>
							Integrated with
							<a
								style={{
									marginLeft: 5,
									color: "#6b6b6b",
									textDecoration: "underline",
								}}
								href="https://www.milestonesys.com/solutions/platform/video-management-software/"
								target="_blank"
								rel="noopener noreferrer"
							>
								XProtect® Video Management Software.
							</a>
						</Typography>
					</Grid>
				</Grid>

				<Grid container spacing={2} className={classes.aboutTech}>
					<Grid item md={2} lg={2} xs={12} sm={12}>
						<a
							href="http://www.genetec.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={Partner5} alt="GenetecLogo" />
						</a>
					</Grid>

					<Grid item md={10} lg={10} xs={12} sm={12}>
						<Typography variant="body1" align="justify">
							<a
								href="http://www.genetec.com/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.aboutTechText}
							>
								Genetec is a global provider of IP license plate recognition
								(LPR) in the physical security and public safety industries,
								delivering video surveillance and access control solutions to
								markets such as transportation, education, retail, gaming,
								government and more. With sales offices and partnerships around
								the world, Genetec provides networked solutions by employing a
								high level of flexibility and forward-thinking principles into
								the development of its core technology and business solutions.
							</a>
						</Typography>
						<br />
						<Typography variant="body1" style={{ color: "#6b6b6b" }}>
							Integrated with
							<a
								style={{
									marginLeft: 5,
									color: "#6b6b6b",
									textDecoration: "underline",
								}}
								href="https://www.genetec.com/solutions/all-products/security-center"
								target="_blank"
								rel="noopener noreferrer"
							>
								Genetec Security Center.
							</a>
						</Typography>
					</Grid>
				</Grid>

				<Grid container spacing={2} className={classes.aboutTech}>
					<Grid item md={2} lg={2} xs={12} sm={12}>
						<a
							href="https://www.lenel.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={Partner6} alt="LenelLogo" />
						</a>
					</Grid>

					<Grid item md={10} lg={10} xs={12} sm={12}>
						<Typography variant="body1" align="justify">
							<a
								href="https://www.lenel.com/"
								target="_blank"
								rel="noopener noreferrer"
								className={classes.aboutTechText}
							>
								Lenel is a global leader in advanced security systems and
								services developing innovative solutions to protect buildings,
								people and assets. Incorporating open architecture and
								third-party interfacing, Lenel’s enterprise software manages
								multiple best-in-class systems to provide a single, seamless
								security solution for customers worldwide, including corporate
								and government segments. Lenel is a part of UTC Climate,
								Controls & Security, a unit of United Technologies Corp., a
								leading provider to the aerospace and building systems
								industries worldwide.
							</a>
						</Typography>
						<br />
						<Typography variant="body1" style={{ color: "#6b6b6b" }}>
							Integrated with
							<a
								style={{
									marginLeft: 5,
									color: "#6b6b6b",
									textDecoration: "underline",
								}}
								href="https://www.lenel.com/products/onguard/onguard-version-75"
								target="_blank"
								rel="noopener noreferrer"
							>
								OnGuard version 7.5.
							</a>
						</Typography>
					</Grid>

					<div className={classes.emptyspace_lg} />
				</Grid>
			</Container>
		</>
	);
}
