import React from "react";
import LayoutLogin from "../../layout/layout-login/LayoutLogin";
import "./login.scss";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const Login = () => {
  const handleSubmit = (e) => {};

  return (
    <LayoutLogin>
      <Container className="login-container">
        <Box className="login-form" component="form" onSubmit={handleSubmit}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Login
          </Typography>
          <TextField label="Username" variant="outlined" size="small" fullWidth required />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            size="small"
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            className="login-button"
          >
            Login
          </Button>
        </Box>
      </Container>
    </LayoutLogin>
  );
};

export default Login;
