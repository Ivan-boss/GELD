import { Grid, Tabs, Tab, Typography, Box, Avatar } from "@mui/material";
import { useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import { useIntl } from "react-intl";
import { useParams } from "react-router";
import theme from "../theme/theme";

import { useLocation } from "react-router-dom";
import { useUsers } from "../contexts/User/User.provider";
import AdhesionHistory from "./AdhesionHistory.component";
import { IAdhesionPayHistory } from "../contexts/Adhesion/AdhesionPaymentHistory";
const TabContainer = () => {
  const { name, id } = useParams();
  const handleTabChange = (
    event: React.SyntheticEvent,
    newTabIndex: number
  ) => {
    setTabIndex(newTabIndex);
  };

  let { formatMessage } = useIntl();
  const location = useLocation();
  const history: IAdhesionPayHistory[] = Object.values(location.state);
  console.log("history:", history);
  const { userState, userDispatch } = useUsers();
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Grid
      container
      direction="column"
      spacing={3}
      sx={{
        backgroundColor: theme.common.inputBackground,
      }}
    >
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
        <Typography variant="h3" component="span" sx={{ fontWeight: "bolder" }}>
          {" "}
          {name}
        </Typography>
        <Avatar alt={userState.user_name} src={userState.user_image_ref} />
      </Grid>
      <Grid
        item
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="body1"
          component="span"
          color="primary"
          sx={{ fontWeight: "bolder" }}
        >
          {" "}
          {formatMessage({ id: "historyTabText" })}
        </Typography>
        <Box>
          <FilterListOutlinedIcon htmlColor={theme.common.placeholder} />
          <NotificationsOutlinedIcon htmlColor={theme.common.placeholder} />
        </Box>
      </Grid>
      <Grid item>
        {tabIndex === 0 && <Box>dashboard</Box>}
        {tabIndex === 1 && (
          <Box>
            <AdhesionHistory adhesionPayHistory={history} />{" "}
          </Box>
        )}
        {tabIndex === 2 && <Box>Profile</Box>}
      </Grid>
      <Grid item>
        <Tabs
          sx={{
            backgroundColor: "lightblue",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
          value={tabIndex}
          onChange={handleTabChange}
          variant="fullWidth"
        >
          <Tab
            icon={<DashboardOutlinedIcon />}
            label={formatMessage({ id: "dashboardTabText" })}
          />
          <Tab
            icon={<HistoryOutlinedIcon />}
            label={formatMessage({ id: "historyTabText" })}
          />
          <Tab
            icon={<AccountCircleOutlinedIcon />}
            label={formatMessage({ id: "profileTabText" })}
          />
        </Tabs>
      </Grid>
    </Grid>
  );
};

export default TabContainer;
