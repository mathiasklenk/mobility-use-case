import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FingerprintIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FooterWrapper from "../containers/Crypto/Footer/footer.style";
import dynamic from "next/dynamic";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "6px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  kycDescription: {
    marginTop: "20px",
    marginBottom: "30px",
    textAlign: "center",
  },
  pbButton: {
    marginBottom: "20px",
  },
}));

const PassbaseButton = dynamic(() => import("../components/PassbaseButton"), {
  ssr: false,
});

export default function VerifyIdentity() {
  const classes = useStyles();

  return (
    <FooterWrapper id="footerSection">
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <FingerprintIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Driving License Verification
          </Typography>
          <Typography className={classes.kycDescription} variant="p">
            We need to verify that you have a valid driving license. Please
            complete the verification flow below to complete your signup.
          </Typography>
          <PassbaseButton email="" />

          <form className={classes.form} noValidate>
            <Grid container spacing={2}></Grid>

            <Grid container justify="center">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Back
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </FooterWrapper>
  );
}
