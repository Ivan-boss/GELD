import { Grid, Tabs, Tab, Typography, Box, Avatar } from "@mui/material";
import { useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import { useIntl } from "react-intl";
import { useUsers } from "../contexts/User/User.provider";
const TabContainer = () => {
  const handleTabChange = (
    event: React.SyntheticEvent,
    newTabIndex: number
  ) => {
    setTabIndex(newTabIndex);
  };

  let { formatMessage } = useIntl();
  const { userState, userDispatch } = useUsers();
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Grid container direction="column" spacing={3}>
      <Grid
        item
        mobile={12}
        tablet={12}
        laptop={12}
        desktop={12}
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          justifyContent: "space-between",
          marginTop: "25px",
        }}
      >
        <Typography variant="h3" component="span">
          {" "}
          {formatMessage({ id: "associations" })}
        </Typography>
        <Avatar alt="Profile pic" src={userState.user_image_ref} />
      </Grid>
      <Grid
        item
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1" component="span">
          {" "}
          {formatMessage({ id: "historyTabText" })}
        </Typography>
        <Box>
          <FilterListOutlinedIcon />
          <NotificationsOutlinedIcon />
        </Box>
      </Grid>
      <Grid item>
        {tabIndex === 0 && <Box>dashboard</Box>}
        {tabIndex === 1 && <Box>History</Box>}
        {tabIndex === 2 && <Box>Profile</Box>}
      </Grid>
      <Grid item>
        <Tabs
          tabIndex={tabIndex}
          onChange={handleTabChange}
          aria-label="icon label tabs example"
        >
          <Tab icon={<DashboardOutlinedIcon />} label="Dashboard" />
          <Tab icon={<HistoryOutlinedIcon />} label="Historique" />
          <Tab icon={<AccountCircleOutlinedIcon />} label="Profil" />
        </Tabs>
      </Grid>
    </Grid>
  );
};

export default TabContainer;
