import AppBar from "@mui/material/AppBar";
import NotificationsIcon from "@mui/icons-material/Notifications";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { useIntl } from "react-intl";
import Slider from "@mui/material/Slider";

import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Badge, Box, Grid } from "@mui/material";
import { useState } from "react";
import userEvent from "@testing-library/user-event";
import { IContribution } from "../contexts/Contribution/Contribution.interface";

const Navbar = () => {
  const [notificationsNumber, setNotificationsNumber] = useState(12);
  return (
    <>
      <Box>
        <AppBar position="static" sx={{ top: 0, marginBottom: "15px" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <div>
              <IconButton size="large" aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="display more actions"
                edge="end"
                color="inherit"
              >
                <Badge badgeContent={notificationsNumber} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

const WelcomeComponent = () => {
  let { formatMessage } = useIntl();

  const [user, setUser] = useState({
    userId: "lfd6df5sger769",
    userName: "Cynthia",
  });

  const [isContributionsSelected, setIsContributionsSelected] = useState(true);

  const [contributions, setContributions] = useState([
    {
      contributionId: "452-dgl45-der78",
      startDate: new Date("1995-12-17T09:00:00"),
      endDate: new Date(),
      name: "La rentrée scolaire",
    },
    {
      contributionId: "452-dgl45-der78",
      startDate: new Date("1995-12-17T09:45:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "Les fetes de noel",
    },
    {
      contributionId: "452-dgl45-der78",
      startDate: new Date("1995-12-17T09:00:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "My family savings",
    },
    {
      contributionId: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "Projet de vancances",
    },
    {
      contributionId: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "La rentrée scolaire",
    },
    {
      contributionId: "452-dgl45-der78",
      startDate: new Date("1995-12-17T06:20:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "Ma maison de reve",
    },
    {
      contributionId: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "The new land",
    },
    {
      contributionId: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "La rentrée scolaire",
    },
  ]);

  const [adhesions, setAdhesions] = useState([
    {
      adhesionId: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "La rentrée scolaire",
    },
    {
      adhesionId: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "La rentrée scolaire",
    },
    {
      adhesionId: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "La rentrée scolaire",
    },
    {
      adhesionId: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "La rentrée scolaire",
    },
    {
      adhesionId: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "La rentrée scolaire",
    },
    {
      adhesionId: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "La rentrée scolaire",
    },
    {
      adhesionId: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "La rentrée scolaire",
    },
    {
      adhesionId: "452-dgl45-der78",
      startDate: new Date("1995-12-17T03:24:00"),
      endDate: new Date("2023-02-02T09:45:00"),
      name: "La rentrée scolaire",
    },
  ]);

  const SummaryComponent = () => {
    return (
      <>
        <Box
          sx={{
            margin: "10px",
            padding: "10px",
            borderRadius: "15px",
            width: "200px",
            "&:hover": {
              borderColor: "blueviolet",
              borderStyle: "solid",
              borderWidth: "thin",
            },
          }}
        >
          <Grid item>
            <Typography gutterBottom> 12 Associations</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" gutterBottom>
              {formatMessage({ id: "detailText1" })}{" "}
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

  const DetailComponent = (props: { contrib: IContribution }) => {
    const {
      contrib: { startDate, endDate, name },
    } = props;
    return (
      <>
        <Grid container spacing={2}>
          <Grid item>
            <Box>
              <Typography>
                {startDate.getDate() + "/" + startDate.getMonth()}
              </Typography>
              <Typography color="primary">
                {startDate.getHours() +
                  "h " +
                  startDate.getMinutes().toPrecision(2)}
              </Typography>
            </Box>
          </Grid>

          <Grid item>
            <Typography variant="h4"> {name}</Typography>
          </Grid>

          <Grid item>
            <Box>
              <Typography>12/11</Typography>
              <Typography>9h00</Typography>
            </Box>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <Typography variant="h3" color="primary" gutterBottom>
        {formatMessage({ id: "whatsUpText" })}
        {user.userName}
      </Typography>
      <Grid container justifyContent="space-between" spacing={2}>
        <Grid
          item
          onClick={() => {
            setIsContributionsSelected(true);
          }}
        >
          <SummaryComponent />
        </Grid>
        <Grid
          item
          onClick={() => {
            setIsContributionsSelected(false);
          }}
        >
          <SummaryComponent />
        </Grid>
      </Grid>
      {isContributionsSelected
        ? contributions.map((contribution) => {
            return (
              <>
                <DetailComponent contrib={contribution} />
              </>
            );
          })
        : adhesions.map((adhesion) => {
            return <></>;
          })}
    </>
  );
};

export default WelcomeComponent;
