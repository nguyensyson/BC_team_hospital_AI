import React from "react";
import "./home.scss";
import LayoutMain from "../../layout/layout-main/LayoutMain";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
  Tab,
  Tabs,
} from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CardHome from "../../components/Card/CardHome";

const Home = () => {
  const [topNavItem, setTopNavItem] = React.useState(0);
  const [bottomNavItem, setBottomNavItem] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTopNavItem(newValue);
  };

  return (
    <LayoutMain>
      {/* top nav */}
      <Box
        sx={{
          maxWidth: { xs: 320, sm: 480 },
          bgcolor: "background.paper",
          position: "sticky",
          top: "64px",
          zIndex: "1100",
        }}
      >
        <Tabs
          value={topNavItem}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          className="tabs"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
        </Tabs>
      </Box>

      <div className="card-list-content">
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
      </div>

      {/* bottom nav */}
      <Paper className="bottom-navigation" elevation={3}>
        <BottomNavigation
          showLabels
          value={bottomNavItem}
          onChange={(event, newValue) => {
            setBottomNavItem(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<FeedIcon />} />
          <BottomNavigationAction
            label="Favorites"
            icon={<PeopleAltOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Archive"
            icon={<NotificationsNoneOutlinedIcon />}
          />
          <BottomNavigationAction label="Archive" icon={<SettingsIcon />} />
          <BottomNavigationAction
            label="Archive"
            icon={<AccountCircleOutlinedIcon />}
          />
        </BottomNavigation>
      </Paper>
    </LayoutMain>
  );
};

export default Home;
