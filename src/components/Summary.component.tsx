import { Box, Grid, Slider, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import theme from "../theme/theme";

export interface ISummaryComponentProps {
  associationsNumber: number;
  associationConcerned: string;
}

const SummaryComponent = ({
  associationsNumber,
  associationConcerned,
}: ISummaryComponentProps) => {
  let { formatMessage } = useIntl();

  return (
    <>
      <Box
        sx={{
          margin: "10px",
          padding: "10px",
          borderRadius: "15px",
          backgroundColor: theme.common.body,
          "&:hover": {
            borderColor: "blueviolet",
            borderStyle: "solid",
            borderWidth: "thin",
            transition: "ease-in 0.5s ",
            padding: "20px",
          },
        }}
      >
        <Grid item>
          <Typography color={theme.common.placeholder} gutterBottom>
            {associationsNumber}
            {formatMessage({ id: "associations" })}
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ fontWeight: "bold" }} variant="body1" gutterBottom>
            {associationConcerned === "contributions"
              ? formatMessage({ id: "myContributions" })
              : formatMessage({ id: "myAdhesions" })}
          </Typography>
        </Grid>
        <Grid item>
          <Slider
            size="small"
            defaultValue={25}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
        </Grid>
      </Box>
    </>
  );
};

export default SummaryComponent;
