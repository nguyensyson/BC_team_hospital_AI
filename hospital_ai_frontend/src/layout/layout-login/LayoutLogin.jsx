import React from "react";
import HeaderLogin from "../../components/header/header-login/HeaderLogin";
import "./layout-login.scss";
import { Box } from "@mui/material";

const LayoutLogin = (props) => {
  return (
    <Box>
    <HeaderLogin />
      {/* <div className="header-margin"></div> */}
      {props.children}
    </Box>
  );
};

export default LayoutLogin;
