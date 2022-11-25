import { Box, Grid, Typography } from "@mui/material";
import { IContribution } from "../contexts/Contribution/Contribution.interface";
import theme from "../theme/theme";

const DetailsComponent = (props: { contrib: IContribution }) => {
  const {
    contrib: { startDate, endDate, name },
  } = props;
  return (
    <>
      <Grid
        container
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
        }}
      >
        <Grid
          item
          sx={{
            backgroundColor: "rgba(11, 119, 219, 0.1) ",
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
          }}
        >
          <Box>
            <Typography
              align="center"
              variant="body1"
              color={theme.common.placeholder}
            >
              {startDate.getDate() + "/" + startDate.getMonth()}
            </Typography>
            <Typography align="center" variant="body2" color="primary">
              {startDate.getHours() +
                "h " +
                startDate.getMinutes().toPrecision(2)}
            </Typography>
          </Box>
        </Grid>

        <Grid item sx={{ backgroundColor: theme.common.body, padding: "10px" }}>
          <Typography align="left" variant="body1">
            {" "}
            {name}
          </Typography>
        </Grid>

        <Grid
          item
          sx={{
            backgroundColor: "rgba(11, 119, 219, 0.1) ",
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
        >
          <Box>
            <Typography
              align="center"
              variant="body1"
              color={theme.common.placeholder}
            >
              {endDate.getDate() + "/" + endDate.getMonth()}
            </Typography>
            <Typography align="center" variant="body2" color="primary">
              {" "}
              {endDate.getHours() + "h " + endDate.getMinutes().toPrecision(2)}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DetailsComponent;
