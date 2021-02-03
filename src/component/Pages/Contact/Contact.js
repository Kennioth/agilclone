/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import {
	Typography,
	Grid,
	Container,
	Button,
	TextField,
	FormControl,
	MenuItem,
	InputLabel,
	Select,
	FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import { db } from "../../../Firebase";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import Banner from "./ContactPic/contact-section.jpg";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
		},
	},

	Logo: {
		width: "100%",
		maxWidth: "100%",
		height: "100%",
	},

	Link: {
		color: "black",

		"&:hover": {
			color: "blue",
		},
	},

	SubmitButton: {
		marginTop: 20,
		marginBottom: "10px",
		borderRadius: 4,
		padding: 5,
		borderColor: "#404040",
		color: "black",

		"&:hover": {
			color: "white",
			backgroundColor: "#404040",
		},
	},

	Button: {
		marginTop: 20,
		marginBottom: "10px",
		borderRadius: 4,
		padding: "8px",
		color: "white",
		backgroundColor: "#706f6f",

		"&:hover": {
			color: "white",
			backgroundColor: "#706f6f",
		},
	},

	TextField: {
		width: "100%",
	},
}));

export default function Contact() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [company, setCompany] = useState("");
	const [contact, setContact] = useState("");
	const [equiry, setEquiry] = useState("");
	const [message, setMessage] = useState("");

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	const { register, errors, control, formState } = useForm({
		mode: "onChange",
		reValidateMode: "onChange",
		defaultValues: {
			name: "",
			email: "",
			company: "",
			contact: "",
			equiry: "",
			message: "",
		},
	});

	const { isValid } = formState;

	const handleSubmit = (e) => {
		e.preventDefault();
		db.collection("Contact-List")
			.add({
				datetime: new Date(),
				name: name,
				email: email,
				company: company,
				contact: contact,
				equiry: equiry,
				message: message,
			})
			.then(() => {
				window.location = "/";
			});
		setName("");
		setEmail("");
		setMessage("");
		setCompany("");
		setContact("");
		setEquiry("");
	};

	return (
		<>
			<img className={classes.Logo} src={Banner} alt="" />
			<Container style={{ marginTop: 20, marginBottom: 40 }}>
				<Grid container spacing={2}>
					<Grid item md={4} lg={4} xs={12} sm={12}>
						<Typography variant="h6">
							ST Electronics <br />
							(Satcom & Sensor Systems) Pte Ltd
						</Typography>
						<Typography variant="subtitle2">
							ST Engineering Hub, 1 Ang Mo Kio Electronics Park Road <br />
							#06-02, Singapore 567710
						</Typography>
						<Grid container>
							<Grid item>
								<i
									class="fas fa-envelope"
									style={{ fontSize: "20px", marginTop: "10px" }}
								/>
							</Grid>
							<Grid item style={{ margin: "10px" }}>
								<Typography variant="body2">
									<a
										className={classes.Link}
										href="mailto:AGILFence@stengg.com"
									>
										AGILFence@stengg.com
									</a>
								</Typography>
							</Grid>
						</Grid>
						<Grid container>
							<Grid item>
								<i
									class="fas fa-phone-alt"
									style={{ fontSize: "20px", marginTop: "10px" }}
								/>
							</Grid>
							<Grid item style={{ margin: "10px" }}>
								<Typography variant="body2">
									<a className={classes.Link} href="tel:(+65)65217888">
										(+65) 6521 7888
									</a>
								</Typography>
							</Grid>
						</Grid>
						<Grid container>
							<Grid item>
								<i
									class="fas fa-fax"
									style={{ fontSize: "20px", marginTop: "10px" }}
								/>
							</Grid>
							<Grid item style={{ margin: "10px" }}>
								<Typography variant="body2">
									<a className={classes.Link} href="fax:(+65)65217888">
										(+65) 6521 7333
									</a>
								</Typography>
							</Grid>
						</Grid>
						<Grid item style={{ float: "center" }}>
							<Button
								className={classes.Button}
								variant="outlined"
								target="_blank"
								href="https://agilfence.com/media/AGIL-Fence-Website-RFQ-Questionnaire-Form.pdf"
								style={{ width: "300px" }}
							>
								Get a Quote
							</Button>
						</Grid>
					</Grid>
					<Grid container spacing={1} md={8} lg={8} xs={12} sm={12}>
						<form
							className={classes.root}
							noValidate
							autoComplete="off"
							style={{ marginTop: "5px" }}
							onSubmit={handleSubmit}
						>
							<Grid container spacing={2}>
								<Grid item md={6} lg={6} xs={12} sm={12}>
									<TextField
										className={classes.TextField}
										name="name"
										label="Name"
										variant="outlined"
										size="small"
										inputRef={register({
											required: "You must provide a name.",
											pattern: {
												value: /^[a-zA-Z]+$/,
												message: "You must provide a valid name",
											},
										})}
                    error={!!errors.name}
                    onChange={(e) => setName(e.target.value)}
									/>
									{errors.name && (
										<FormHelperText
											style={{
												marginTop: "5px",
												color: "red",
												marginLeft: "10px",
											}}
										>
											{errors.name && errors.name.message}
										</FormHelperText>
									)}
								</Grid>
								<Grid item md={6} lg={6} xs={12} sm={12}>
									<TextField
										className={classes.TextField}
										name="email"
										label="Email"
										variant="outlined"
										size="small"

										inputRef={register({
											required: "You must provide an email",
											pattern: {
												value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
												message: "You must provide a valid email address.",
											},
										})}
										autoComplete="email"
                    error={!!errors.email}
                    onChange={(e) => setEmail(e.target.value)}
									/>
									{errors.email && (
										<FormHelperText
											style={{
												marginTop: "7px",
												color: "red",
												marginLeft: "10px",
											}}
										>
											{errors.email && errors.email.message}
										</FormHelperText>
									)}
								</Grid>

								<Grid item md={6} lg={6} xs={12} sm={12}>
									<TextField
										className={classes.TextField}
										name="company"
										label="Company"
										variant="outlined"
										size="small"
										onChange={(e) => setCompany(e.target.value)}
										inputRef={register({
											required: "You must provide a company.",
										})}
										error={!!errors.company}
									/>
									{errors.company && (
										<FormHelperText
											style={{
												marginTop: "5px",
												color: "red",
												marginLeft: "10px",
											}}
										>
											{errors.company.message}
										</FormHelperText>
									)}
								</Grid>
								<Grid item md={6} lg={6} xs={12} sm={12}>
									<TextField
										className={classes.TextField}
										name="contact"
										label="Contact Number"
										variant="outlined"
										size="small"
										type="tel"

										inputRef={register({
											required:
												"You must provide a contact and it must be eight digits",
											minLength: {
												value: 8,
											},
											pattern: {
												value: /^[0-9\b]+$/,
												message:
													"You must provide a valid contact number and it must be eight digits",
											},
										})}
                    error={!!errors.contact}
                    onChange={(e) => setContact(e.target.value)}
									/>
									{errors.name && (
										<FormHelperText
											style={{
												marginTop: "5px",
												color: "red",
												marginLeft: "10px",
											}}
										>
											{errors.contact && errors.contact.message}
										</FormHelperText>
									)}
								</Grid>

								<Grid item md={12} lg={12} xs={12} sm={12}>
									<FormControl
										className={classes.TextField}
										style={{ marginLeft: "10px" }}
										error={Boolean(errors.equiry)}
									>
										<InputLabel>Please select your equiry</InputLabel>

										<Controller
											as={
												<Select>
													<MenuItem
														value="General Enquires"
														onClick={(e) => setEquiry("General Enquires")}
													>
														General Enquires
													</MenuItem>
													<MenuItem
														value="Business & Sales Enquires"
														onClick={(e) =>
															setEquiry("Business & Sales Enquires")
														}
													>
														Business & Sales Enquires
													</MenuItem>
													<MenuItem
														value="Feedbacks"
														onClick={(e) => setEquiry("Feedbacks")}
													>
														Feedbacks
													</MenuItem>
													<MenuItem
														value="Others"
														onClick={(e) => setEquiry("Others")}
													>
														Others
													</MenuItem>
												</Select>
											}
											name="equiry"
											rules={{ required: "You must select one option." }}
											control={control}
										/>
										<FormHelperText style={{ marginTop: "10px", color: "red" }}>
											{errors.equiry && errors.equiry.message}
										</FormHelperText>
									</FormControl>
								</Grid>

								<Grid item md={12} lg={12} xs={12} sm={12}>
									<TextField
										className={classes.TextField}
										name="message"
										label="Message"
										multiline
										rows={7}
										defaultValue=" "
										variant="outlined"
										onChange={(e) => setMessage(e.target.value)}
										inputRef={register({
											required: "You must provide a message.",
										})}
										error={!!errors.message}
									/>
									{errors.name && (
										<FormHelperText
											style={{
												marginTop: "10px",
												color: "red",
												marginLeft: "10px",
											}}
										>
											{errors.message && errors.message.message}
										</FormHelperText>
									)}
								</Grid>

								<Grid item md={12} lg={12} xs={12} sm={12}>
									<Button
										className={classes.SubmitButton}
										style={{ float: "right", width: 100 }}
										type="submit"
										disabled={
											!!errors.email ||
											!!errors.name ||
											!!errors.company ||
											!!errors.contact ||
											!!errors.equiry ||
											!!errors.message ||
											!isValid
										}
										variant="outlined"
										onClick={handleClick}
									>
										Send
									</Button>
									<Snackbar
										open={open}
										autoHideDuration={6000}
										onClose={handleClose}
										anchorOrigin={{
											vertical: "top",
											horizontal: "center",
										}}
									>
										<Alert onClose={handleClose} severity="success">
											You have succesfully submitted the form
										</Alert>
									</Snackbar>
								</Grid>
							</Grid>
						</form>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
