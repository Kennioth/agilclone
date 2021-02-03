import React, { useState } from "react";
import { Link, Button, Menu, MenuItem, makeStyles } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ExpandMore";
import ArrowDropUpIcon from "@material-ui/icons/ExpandLess";

const dropdownStyle = makeStyles({
	dropMenu: {
		color: "#404040",
		fontSize: "15px",
	},

	proButton: {
		textTransform: "none",
		margin: "15px",
		color: "#404040",
		fontSize: "14px",
	},
});

export default function Footer() {
	const [anchorEl, setAnchorEl] = useState(null);

	const classes = dropdownStyle();

	function handleClick(event) {
		if (anchorEl !== event.currentTarget) {
			setAnchorEl(event.currentTarget);
		}
	}

	function handleClose() {
		setAnchorEl(null);
	}

	return (
		<div>
			<Button
				className={classes.proButton}
				aria-owns={anchorEl ? "simple-menu" : undefined}
				aria-haspopup="true"
				onClick={handleClick}
				onMouseOver={handleClick}
			>
				Newsroom
				{anchorEl ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
			</Button>
			<Menu
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
				transformOrigin={{ vertical: "top", horizontal: "left" }}
				id="simple-menu"
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
				MenuListProps={{ onMouseLeave: handleClose }}
				getContentAnchorEl={null}
			>
				<Link href="/news" style={{ textDecoration: "none" }}>
					<MenuItem
						className={classes.dropMenu}
						onClick={handleClose}
						style={{ paddingRight: "50px" }}
					>
						News
					</MenuItem>
				</Link>

				<Link href="/events" style={{ textDecoration: "none" }}>
					<MenuItem
						className={classes.dropMenu}
						onClick={handleClose}
						style={{ paddingRight: "50px" }}
					>
						Events
					</MenuItem>
				</Link>

				<Link href="/insights" style={{ textDecoration: "none" }}>
					<MenuItem
						className={classes.dropMenu}
						onClick={handleClose}
						style={{ paddingRight: "50px" }}
					>
						Insights
					</MenuItem>
				</Link>
			</Menu>
		</div>
	);
}
