import {
  Grid,
  Typography,
  Fab,
  Dialog,
  Button,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { IAdhesionPayHistory } from "../contexts/Adhesion/AdhesionPaymentHistory";
import PaymentDetails from "./PaymentDetails.component";
import { useState } from "react";

const AdhesionHistory = (props: {
  adhesionPayHistory: IAdhesionPayHistory[];
}) => {
  const { adhesionPayHistory: history } = props;
  const [isDialogOpened, setIsDialogOpened] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpened(!isDialogOpened);
  };
  return (
    <Grid
      sx={{
        display: "grid",
        rowGap: "15px",
      }}
    >
      {history.map((hist) => {
        return (
          <>
            <PaymentDetails paymentDetails={hist} />
          </>
        );
      })}
      <Fab
        color="primary"
        aria-label="add"
        sx={{ justifySelf: "end" }}
        onClick={() => {
          toggleDialog();
        }}
      >
        <AddIcon />
      </Fab>
      <Dialog open={isDialogOpened}>
        <form>
          <DialogContent>
            <DialogContentText>
              <Typography variant="h3" gutterBottom>
                Fill the following spaces to add a new card
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                toggleDialog();
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Grid>
  );
};

export default AdhesionHistory;
