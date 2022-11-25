import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";
import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  Grid,
  Fab,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useState } from "react";
import theme from "../theme/theme";
import SummaryComponent from "./Summary.component";
import Navbar from "./Navbar.component";
import DetailsComponent from "./Details.component";

const WelcomeComponent = () => {
  let { formatMessage } = useIntl();

  const [user, setUser] = useState({
    userId: "lfd6df5sger769",
    userName: "Cynthia",
  });

  const [isContributionsSelected, setIsContributionsSelected] = useState(true);

  const [contributions, setContributions] = useState([
    {
      id: "452-dgl45-der78",
      startDate: new Date("1995-12-17T09:00:00"),
      endDate: new Date(),
      name: "La rentrée scolaire",
    },
    {
      id: "452-dgl45-der78",
      startDate: new Date("1995-12-17T09:45:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "Les fetes de noel",
    },
    {
      id: "452-dgl45-der78",
      startDate: new Date("1995-12-17T09:00:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "My family savings",
    },
    {
      id: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "Projet de vancances",
    },
    {
      id: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "La rentrée scolaire",
    },
    {
      id: "452-dgl45-der78",
      startDate: new Date("1995-12-17T06:20:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "Ma maison de reve",
    },
    {
      id: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "The new land",
    },
    {
      id: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "La rentrée scolaire",
    },
  ]);

  const [adhesions, setAdhesions] = useState([
    {
      id: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "La rentrée scolaire",
    },

    {
      id: "452-dgl45-der78",
      startDate: new Date("1995-12-17T09:25:00"),
      endDate: new Date("2023-02-02T09:10:00"),
      name: "La rentrée scolaire",
    },
    {
      id: "452-dgl45-der78",
      startDate: new Date("1995-12-17T08:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "La rentrée scolaire",
    },
    {
      id: "452-dgl45-der78",
      startDate: new Date("1995-12-17T04:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "La rentrée scolaire",
    },
    {
      id: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T01:45:00"),
      name: "La rentrée scolaire",
    },
    {
      id: "452-dgl45-der78",
      startDate: new Date("1995-12-17T06:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "La rentrée scolaire",
    },
    {
      id: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "La rentrée scolaire",
    },
  ]);
  const [isDialogOpened, setIsDialogOpened] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpened(!isDialogOpened);
  };
  return (
    <Box
      sx={{ backgroundColor: theme.common.inputBackground, height: "100vh" }}
    >
      <Navbar />
      <Typography
        sx={{ fontWeight: "bolder" }}
        variant="h2"
        color="primary"
        gutterBottom
      >
        {formatMessage({ id: "whatsUpText" })}
        {user.userName} !
      </Typography>

      <Grid container justifyContent="space-between">
        <Grid
          item
          mobile={12}
          tablet={6}
          onClick={() => {
            setIsContributionsSelected(true);
          }}
        >
          <SummaryComponent
            associationsNumber={contributions.length}
            associationConcerned="contributions"
          />
        </Grid>
        <Grid
          item
          mobile={12}
          tablet={6}
          onClick={() => {
            setIsContributionsSelected(false);
          }}
        >
          <SummaryComponent
            associationsNumber={adhesions.length}
            associationConcerned="  adhesions"
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "grid",
          rowGap: "15px",
        }}
      >
        {isContributionsSelected
          ? contributions.map((contribution) => {
              return (
                <>
                  <DetailsComponent contrib={contribution} />
                </>
              );
            })
          : adhesions.map((adhesion) => {
              return (
                <>
                  <DetailsComponent contrib={adhesion} />
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
      </Box>
    </Box>
  );
};

export default WelcomeComponent;
