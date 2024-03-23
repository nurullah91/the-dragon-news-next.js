import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "@/assets/the-dragon-news.png";
import getCurrentDate from "@/utils/getCurrentDate";
const Header = () => {

    const currentDate = getCurrentDate();
  return (
    <Box>
      <Container className="text-center my-5">
        <Image  className="mx-auto" width={500} height={500} src={logo} alt="Logo" />
        <Typography variant="body2" color="gray">
          Journalism without fear and favour
        </Typography>
        <Typography color="gray">
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
