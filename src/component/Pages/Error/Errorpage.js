import React from "react";
import { Typography, Container, Link } from "@material-ui/core";

export default function Error() {
  return (
    <>
      <Container style={{ marginTop: "215px", marginBottom: "315px" }}>
        <Typography variant='h3' gutterBottom>
          404.
        </Typography>
        <Typography variant='h5' gutterBottom>
          Page not found. <br /> Let us bring you back to the home page.
        </Typography>
        <Typography variant='h5'>
          <Link href='/' style={{ color: "black" }}>
            Return to the homepage.
          </Link>
        </Typography>
      </Container>
    </>
  );
}
