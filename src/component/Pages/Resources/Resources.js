/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import {
  Typography,
  Grid,
  Container,
  Button,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ResourcesCarousel from "./ResourcesCarousel";
import { useForm } from "react-hook-form";
import { db } from "../../../Firebase";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },

  Container: {
    marginTop: "100px",
    marginBottom: "206px",
  },

  TextField: {
    width: "100%",
  },

  Button: {
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
}));

export default function Resources() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const { register, errors, formState } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      name: "",
    },
  });
  const { isValid } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("Resources-List")
      .add({
        datetime: new Date(),
        name: name,
        email: email,
      })
      .then(() => {
        window.location = "/brochures";
      });

    setName("");
    setEmail("");
  };

  return (
    <>
      <Container className={classes.Container}>
        <Grid container spacing={1} md={12} lg={12} xs={12} sm={12}>
          <Grid item md={2} lg={2} />
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <ResourcesCarousel />
          </Grid>
          <Grid item md={5} lg={5} xs={12} sm={12}>
            <Typography
              variant='body1'
              align='justify'
              style={{ marginLeft: "10px", marginBottom: "40px" }}
              gutterBottom>
              Kindly provide us with the required details in order to gain
              access to our full suite of resources.
            </Typography>

            <form
              className={classes.root}
              noValidate
              autoComplete='off'
              style={{ marginTop: "5px" }}
              onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid item md={12} lg={12} xs={12} sm={12}>
                  <TextField
                    className={classes.TextField}
                    name='name'
                    label='Name'
                    variant='outlined'
                    size='small'
                    inputRef={register({
                      required: "You must provide a name",
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
                        marginTop: "10px",
                        marginLeft: "10px",
                        color: "red",
                      }}>
                      {errors.name && errors.name.message}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item md={12} lg={12} xs={12} sm={12}>
                  <TextField
                    className={classes.TextField}
                    name='email'
                    label='Email'
                    variant='outlined'
                    size='small'
                    inputRef={register({
                      required: "You must provide an email",
                      pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "You must provide a valid email address.",
                      },
                    })}
                    autoComplete='email'
                    error={!!errors.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <FormHelperText
                      style={{
                        marginTop: "10px",
                        color: "red",
                        marginLeft: "10px",
                      }}>
                      {errors.email && errors.email.message}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item md={12} lg={12} xs={12} sm={12}>
                  <Button
                    className={classes.Button}
                    style={{ float: "right", width: 100, marginTop: "40px" }}
                    type='submit'
                    disabled={!!errors.email || !!errors.name || !isValid}
                    variant='outlined'
                    onClick={handleClick}>
                    Send
                  </Button>
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}>
                    <Alert onClose={handleClose} severity='success'>
                      You have succesfully submitted the form <br /> and will be
                      redirect to another page shortly.
                    </Alert>
                  </Snackbar>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item md={2} lg={2} />
        </Grid>
      </Container>
    </>
  );
}
