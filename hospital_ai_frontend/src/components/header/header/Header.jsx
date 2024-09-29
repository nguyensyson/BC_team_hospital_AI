import { AppBar,  IconButton, TextField, Toolbar } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SearchIcon from "@mui/icons-material/Search";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import React from "react";
import "./header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goToUserPage = () => {
    navigate("/user");
  };

  const goToFilterPage = () => {
    navigate("/filter");
  };

  return (
    <AppBar className="header" position="sticky" sx={{ height: "64px" }}>
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="user"
          onClick={goToUserPage}
        >
          <AccountCircleRoundedIcon sx={{ fontSize: 36 }} />
        </IconButton>

        <TextField
          variant="outlined"
          placeholder="Search..."
          
          className="input-search-header"
          InputProps={{
            startAdornment: <SearchIcon sx={{ marginRight: 1 }} />,
          }}
        />

        <IconButton
          edge="end"
          aria-label="fillter"
          onClick={goToFilterPage}
        >
          <TuneRoundedIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
