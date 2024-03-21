import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom"; // Grid version 2

export default function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <img src="https://via.placeholder.com/300" alt="placeholder" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src="https://via.placeholder.com/300" alt="placeholder" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src="https://via.placeholder.com/300" alt="placeholder" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src="https://via.placeholder.com/300" alt="placeholder" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src="https://via.placeholder.com/300" alt="placeholder" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src="https://via.placeholder.com/300" alt="placeholder" />
        </Grid>
        
      </Grid>
    </section>
  );
}
