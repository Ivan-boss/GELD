import { Box, Grid, Typography } from "@mui/material";
import { IAdhesionPayHistory } from "../contexts/Adhesion/AdhesionPaymentHistory";
import theme from "../theme/theme";
import { useIntl } from "react-intl";

const PaymentDetails = (props: { paymentDetails: IAdhesionPayHistory }) => {
  const {
    paymentDetails: { paymentDate, isPaid, amount },
  } = props;
  let { formatMessage } = useIntl();

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
            backgroundColor: isPaid === true ? "sucess" : "error",
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
          }}
        >
          <Box>
            <Typography
              align="center"
              variant="body1"
              color={theme.common.body}
            >
              {paymentDate.getDate() + "/" + paymentDate.getMonth()}
            </Typography>
            <Typography
              align="center"
              variant="body2"
              color={theme.common.body}
            >
              {paymentDate.getHours() +
                "h " +
                paymentDate.getMinutes().toPrecision(2)}
            </Typography>
          </Box>
        </Grid>

        <Grid item sx={{ backgroundColor: theme.common.body, padding: "10px" }}>
          <Typography align="left" variant="body1">
            {isPaid
              ? `${formatMessage({ id: "transferOf" })} ${amount}Frs`
              : formatMessage({ id: "failedToContribute" })}
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
          <Box></Box>
        </Grid>
      </Grid>
    </>
  );
};
export default PaymentDetails;
