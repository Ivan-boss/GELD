import { Button, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { injectIntl, useIntl } from "react-intl";
import logo from "../assets/images/logo.png";
import googleIcon from "../assets/images/google-icon.png";

const SignUpComponent = () => {
  let { formatMessage } = useIntl();

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        height="100vh"
        spacing={2}
      >
        <Grid item alignSelf="flex-start" sx={{ marginTop: "10px" }}>
          <img src={logo} alt="logo" />
        </Grid>
        <Grid item sx={{ marginTop: "-20px", marginInline: "6px" }}>
          <Typography variant="h3" color="primary" align="center" gutterBottom>
            {" "}
            {formatMessage({ id: "authenticateText1" })}
          </Typography>

          <Typography variant="h5" align="center" gutterBottom>
            {formatMessage({ id: "welcomeText1" })}
          </Typography>

          <Typography align="center">
            {" "}
            {formatMessage({ id: "authenticateText2" })}{" "}
          </Typography>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<img src={googleIcon} />}
          >
            <Typography>{formatMessage({ id: "loginText" })}</Typography>
          </Button>
        </Grid>

        <Grid item justifySelf="flex-end" sx={{ width: "100%" }}>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item>{formatMessage({ id: "footerText1" })}</Grid>
            <Grid item>{formatMessage({ id: "footerText2" })}</Grid>
            <Grid item>{formatMessage({ id: "footerText3" })}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUpComponent;
