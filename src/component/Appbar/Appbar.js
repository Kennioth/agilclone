import React, { useState, useEffect } from "react";
import {
	AppBar,
	Toolbar,
	Button,
	makeStyles,
	Drawer,
	IconButton,
	Link,
	List,
	ListItem,
	Grid,
	Collapse,
	ListItemText,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ExpandMore";
import ArrowDropUpIcon from "@material-ui/icons/ExpandLess";
import MenuIcon from "@material-ui/icons/Menu";
import ProductDropdown from "./ProductDropdown";
import NewsRoom from "./NewsDropdown";
import Logo from "./AppbarLogo/agilfence-blue-1.png"

const useStyles = makeStyles((theme) => ({
	navList: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
		marginRight: 50,
		margin: theme.spacing(1, 0),
	},

	navToolbar: {
		backgroundColor: theme.palette.background.paper,
	},

	nested: {
		paddingLeft: theme.spacing(4),
	},

	navButton: {
		textTransform: "none",
		fontSize: "14px",
		color: "#404040",
		margin: "15px",

		"&:hover": {
			textDecoration: "none",
		},
	},

	navLogo: {
		height: "55px",
		width: "150px",
	},

	navLogoMobile: {
		height: "55px",
		width: "150px",
	},
}));

export default function Navigationbar() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [opened, setopened] = useState(false);
	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	});

	const handleClick = () => {
		setOpen(!open);
	};

	const handleClicked = () => {
		setopened(!opened);
	};

	const { mobileView, drawerOpen } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 960
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }));
		};
		setResponsiveness();
		window.addEventListener("resize", () => setResponsiveness());
	}, []);

	const displayDesktop = () => {
		return (
			<Toolbar className = {classes.navToolbar}>
				<Link href="/">
					<img
						className={classes.navLogo}
						src= {Logo}
						alt="logo"
					/>
				</Link>

				<Grid container justify="flex-end">
					<Button className={classes.navButton} href="/">
						Home
					</Button>

					<Button className={classes.navButton} href="/about">
						About
					</Button>

					<NewsRoom />

					<ProductDropdown />

					<Button className={classes.navButton} href="/resources">
						Resources
					</Button>

					<Button className={classes.navButton} href="/contact">
						Contact
					</Button>
				</Grid>
			</Toolbar>
		);
	};

	const displayMobile = () => {
		const handleDrawerOpen = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: true }));
		const handleDrawerClose = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: false }));
		return (
			<Toolbar className = {classes.navToolbar}>
				<IconButton
					{...{
						edge: "start",
						color: "inherit",
						"aria-label": "menu",
						"aria-haspopup": "true",
						onClick: handleDrawerOpen,
					}}
				>
					<MenuIcon />
				</IconButton>

				<Drawer
					{...{
						anchor: "left",
						open: drawerOpen,
						onClose: handleDrawerClose,
					}}
				>
					<List component="nav" className={classes.navList}>
						<ListItem button component="a" href="/">
							<ListItemText primary="Home" />
						</ListItem>

						<ListItem button component="a" href="/about">
							<ListItemText primary="About" />
						</ListItem>

						<ListItem button onClick={handleClicked}>
							<ListItemText primary="Newsroom" />
							{opened ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
						</ListItem>
						<Collapse in={opened} timeout="auto" unmountOnExit>
							<List component="div" disablePadding>
								<ListItem
									button
									className={classes.nested}
									component="a"
									href="/news"
								>
									<ListItemText display="inline" primary="News" />
								</ListItem>

								<ListItem
									button
									className={classes.nested}
									component="a"
									href="/events"
								>
									<ListItemText display="inline" primary="Events" />
								</ListItem>

								<ListItem
									button
									className={classes.nested}
									component="a"
									href="/insights"
								>
									<ListItemText display="inline" primary="Insights" />
								</ListItem>
							</List>
						</Collapse>

						<ListItem button onClick={handleClick}>
							<ListItemText primary="Product" />
							{open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
						</ListItem>
						<Collapse in={open} timeout="auto" unmountOnExit  className = {classes.navDrawer}>
							<List component="div" disablePadding>
								<ListItem
									button
									className={classes.nested}
									component="a"
									href="/pids"
								>
									<ListItemText
										
										primary="Perimeter Intrusion Detection System"
									/>
								</ListItem>

								<ListItem
									button
									className={classes.nested}
									component="a"
									href="/bids"
								>
									<ListItemText
									
										primary="Buried Intrusion Detection System"
									/>
								</ListItem>

								<ListItem
									button
									className={classes.nested}
									component="a"
									href="/dass"
								>
									<ListItemText
										
										primary="Distributed Acoustic Sensing System"
									/>
								</ListItem>

								<ListItem
									button
									className={classes.nested}
									component="a"
									href="/ipams"
								>
									<ListItemText
										
										primary="Integrated Perimeter Alarm Management System"
									/>
								</ListItem>
							</List>
						</Collapse>

						<ListItem button component="a" href="/resources">
							<ListItemText primary="Resources" />
						</ListItem>

						<ListItem button component="a" href="/contact">
							<ListItemText primary="Contact" />
						</ListItem>
					</List>
				</Drawer>
				<Grid
					container
					spacing={0}
					direction="row"
					alignItems="center"
					justify="center"
				>
					<Link href="/">
						<img
							className={classes.navLogoMobile}
							src= {Logo}
							alt="logo"
						/>
					</Link>
				</Grid>
			</Toolbar>
		);
	};

	return (
		<AppBar position="static" color="transparent" elevation={0}>
			{mobileView ? displayMobile() : displayDesktop()}
		</AppBar>
	);
}
