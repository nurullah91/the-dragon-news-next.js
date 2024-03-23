import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import topNews from "@/assets/top-news.png";
import Image from "next/image";
import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideBarNews from "@/components/ui/SideBarNews/SideBarNews";

const HomePage = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews />
        </Grid>
        
        <Grid item xs={4}>
          <SideBarNews />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
