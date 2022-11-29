import { Box, Grid, Typography } from "@mui/material";
import { Chart } from "chart.js/auto";

const Dashboard = () => {
  return (
    <Box>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h2"> 30.000 /Jour</Typography>
        </Grid>
        <Grid item>
          <Box sx={{ display: "grid" }}>
            <Box>
              <Typography>Montant</Typography>
              <Typography>10 000 /jour</Typography>
            </Box>
            <Box></Box>
          </Box>
        </Grid>
        <Grid item> chart</Grid>
        <Grid item> slider</Grid>
        <Grid item>check box</Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
