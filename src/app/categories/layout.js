import CategoryList from "@/components/ui/CategoryList/CategoryList";
import { Box, Grid } from "@mui/material";
import React from "react";

const layout = ({ children }) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={3} xs={8}>
         <CategoryList/>
        </Grid>

        <Grid item md={9} xs={12}>
         {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default layout;
