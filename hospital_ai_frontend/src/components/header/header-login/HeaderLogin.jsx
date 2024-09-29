import { AppBar } from "@mui/material";
import React from "react";
import './header-login.scss';

const HeaderLogin = () => {
  return (
    <AppBar className="header" position="sticky" sx={{ height: '50px' }}>
        <div className="logo-container">
          <img 
            src="https://assets.st-note.com/production/uploads/images/64905279/profile_5eafcb97ea5bcdc2c938635493ccf677.png?fit=bounds&format=jpeg&quality=85&width=330" 
            alt="Logo" 
          />
        </div>
    </AppBar>
  );
};

export default HeaderLogin;
