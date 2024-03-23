import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  const navItems = [
    {
      route: "Home",
      pathName: "/",
    },
    {
      route: "Pages",
      pathName: "/pages",
    },
    {
      route: "Category",
      pathName: "/category",
    },
    {
      route: "News",
      pathName: "/news",
    },
    {
      route: "About",
      pathName: "/about",
    },
    {
      route: "Contact",
      pathName: "/contact",
    },
  ];

  return (
    <div className="bg-black py-10">
      <Box className="w-full text-center"
        sx={{
          "& svg": {
            color: "white",
          },
        }}
      >
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <YouTubeIcon />
        </IconButton>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
      </Box>
     
        <Box className="w-full text-center">
          {navItems.map((item) => (
            <Link key={item} href={item.pathName}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
      <Box className="w-full text-center">
        <Typography variant="body2" color="gray">
          @2023 The Dragon News. Developed by Md. Nurulah Bhuiyan
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
