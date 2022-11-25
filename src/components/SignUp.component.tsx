import { Button, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useIntl } from "react-intl";
import logo from "../assets/images/logo.png";
import googleIcon from "../assets/images/google-icon.png";
import theme from "../theme/theme";
import { useNavigate } from "react-router-dom";

const SignUpComponent = () => {
  let { formatMessage } = useIntl();
  const navigate = useNavigate();

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        height="100vh"
        spacing={2}
        sx={{ backgroundColor: theme.common.inputBackground }}
      >
        <Grid item alignSelf="flex-start" sx={{ marginTop: "10px" }}>
          <img src={logo} alt="logo" />
        </Grid>
        <Grid item sx={{ marginTop: "-20px", marginInline: "6px" }}>
          <Typography
            sx={{ fontWeight: "bolder" }}
            variant="h1"
            color="primary"
            align="center"
            gutterBottom
          >
            {" "}
            {formatMessage({ id: "authenticateText1" })}
          </Typography>

          <Typography
            sx={{ fontWeight: "bolder" }}
            variant="h3"
            color="primary"
            align="center"
            gutterBottom
          >
            {formatMessage({ id: "welcomeText1" })}
          </Typography>

          <Typography
            variant="body1"
            color={theme.common.placeholder}
            align="center"
          >
            {" "}
            {formatMessage({ id: "authenticateText2" })}{" "}
          </Typography>
          <Button
            fullWidth
            variant="outlined"
            size="large"
            startIcon={<img src={googleIcon} />}
            onClick={() => {
              navigate("/welcome");
            }}
          >
            <Typography>{formatMessage({ id: "loginText" })}</Typography>
          </Button>
        </Grid>

        <Grid item justifySelf="flex-end" sx={{ width: "100%" }}>
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item>
              <Typography color={theme.common.placeholder}>
                {formatMessage({ id: "footerText1" })}
              </Typography>
            </Grid>
            <Grid item>
              <Typography color={theme.common.placeholder}>
                {formatMessage({ id: "footerText2" })}
              </Typography>
            </Grid>
            <Grid item>
              <Typography color={theme.common.placeholder}>
                {formatMessage({ id: "footerText3" })}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUpComponent;
