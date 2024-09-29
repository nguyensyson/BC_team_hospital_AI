import "./App.css";
import Grid from "@mui/material/Grid2";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Grid container spacing={2} columns={24}>
        <Grid size={{ xs: 0, sm: 7, md: 8 }}></Grid>
        <Grid size={{ xs: 24, sm: 10, md: 8 }} >
          <Box
            style={{
              width: "100%",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Router />
          </Box>
        </Grid>
        <Grid size={{ xs: 0, sm: 7, md: 8 }}></Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
