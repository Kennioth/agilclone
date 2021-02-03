import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { CgArrowUpR } from "react-icons/cg";
import "./App.css";

const ScrollArrow = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	window.addEventListener("scroll", checkScrollTop);

	return (
		<>
			<Grid
				container
				spacing={0}
				direction="row"
				alignItems="center"
				justify="center"
			>
				<CgArrowUpR
					className="scrollTop"
					onClick={scrollTop}
					style={{ height: 35, display: showScroll ? "flex" : "none" }}
				/>
			</Grid>
		</>
	);
};

export default ScrollArrow;
