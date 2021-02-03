/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Grid, Button, TextField, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useForm } from "react-hook-form";
import { db } from "../../Firebase";

const useStyles = makeStyles((theme) => ({
	Button: {
		backgroundColor: "white",
		color: "#404040",

		"&:hover": {
			backgroundColor: "white",
			color: "red",
		},
	},

	TextField: {
		width: "100%",
	},
}));

export default function ContactUs() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [firstname, SetFirstName] = useState("");
	const [lastname, SetLastName] = useState("");
	const [email, setEmail] = useState("");
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const { register, errors, formState } = useForm({
		mode: "onChange",
		reValidateMode: "onChange",
		defaultValues: {
			email: "",
			firstname: "",
			lastname: "",
		},
	});
	const { isValid } = formState;

	function sendEmail(e) {
		e.preventDefault();
		db.collection("Email-List").add({
			datetime: new Date(),
			firstname: firstname,
			lastname: lastname,
			email: email,
		});

		SetFirstName("");
		SetLastName("");
		setEmail("");
		emailjs
			.sendForm(
				"agilfencetest-gmail",
				"agilfence-test",
				e.target,
				"user_YwTYhJuSJZK7IEDWU5H89"
			)
			.then(
				(result) => {
					window.location.reload();
				},
				(error) => {
					console.log(error.text);
				}
			);
	}



	return (
		<>
			<Button
				className={classes.Button}
				variant="outlined"
				onClick={handleClickOpen}
				style = {{marginTop: "10px"}}
			>
				Sign Up
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>{"Subscribe to our mailing list"}</DialogTitle>
				<DialogContent>
					<form
						noValidate
						autoComplete="off"
						onSubmit={sendEmail}
					>
						<Grid container spacing={1}>
							<Grid item md={12} lg={12} xs={12} sm={12}>
								<TextField
									className={classes.TextField}
									name="firstname"
									label="First Name"
									variant="outlined"
									size="small"
									inputRef={register({
										required: "You must provide a first name",
										pattern: {
											value: /^[a-zA-Z]+$/,
											message: "You must provide a valid name",
										},
									})}
									onChange={(e) => SetFirstName(e.target.value)}
									error={!!errors.firstname}
								/>
								{errors.firstname && (
									<FormHelperText
										style={{
											marginTop: "10px",
											marginLeft: "10px",
											color: "red",
										}}
									>
										{errors.firstname && errors.firstname.message}
									</FormHelperText>
								)}
							</Grid>
							<Grid item md={12} lg={12} xs={12} sm={12}>
								<TextField
									className={classes.TextField}
									name="lastname"
									label="Last Name"
									variant="outlined"
									size="small"
									inputRef={register({
										required: "You must provide a last name",
										pattern: {
											value: /^[a-zA-Z]+$/,
											message: "You must provide a valid name",
										},
									})}
									error={!!errors.lastname}
									onChange={(e) => SetLastName(e.target.value)}
								/>
								{errors.lastname && (
									<FormHelperText
										style={{
											marginTop: "10px",
											marginLeft: "10px",
											color: "red",
										}}
									>
										{errors.lastname && errors.lastname.message}
									</FormHelperText>
								)}
							</Grid>
							<Grid item md={12} lg={12} xs={12} sm={12}>
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
											marginTop: "10px",
											color: "red",
											marginLeft: "10px",
										}}
									>
										{errors.email && errors.email.message}
									</FormHelperText>
								)}
							</Grid>
							<Grid item md={12} lg={12} xs={12} sm={12}>
								<Button
									className={classes.Button}
									style={{ float: "right", width: 100, marginTop: "40px" }}
									type="submit"
									value="Send"
									disabled={
										!!errors.email ||
										!!errors.firstname ||
										!!errors.lastname ||
										!isValid
									}
									variant="outlined"
								>
									Send
								</Button>
							</Grid>
						</Grid>
					</form>
				</DialogContent>
			</Dialog>
		</>
	);
}
