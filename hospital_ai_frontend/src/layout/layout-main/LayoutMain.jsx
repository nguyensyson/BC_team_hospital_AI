import React from "react";
import "./layout-main.scss";
import Header from "../../components/header/header/Header";
import { Box } from "@mui/material";

const LayoutMain = (props) => {
  return (
    <Box>
      <Header />
      {props.children}
    </Box>
  );
};

export default LayoutMain;
