"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import Stack from "@mui/material/Stack";

import logo from "@/assets/logo.png";

// icons
// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import Link from "next/link";
import Header from "./Header";

const navItems = [
  {
    route: "Home",
    pathName: "/",
  },
  {
    route: "Category",
    pathName: "/categories/news?category=all-news",
  },
  {
    route: "Pages",
    pathName: "/pages",
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
function NavBar() {
  return (
    <>
      <Header />
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={100}
                height={100}
                blurDataURL="https://i.ibb.co/0cff2XW/3704115-1.jpg"
                placeholder="blur"
              />
            </Link>
            <Box className="w-full text-center">
              {navItems.map((item) => (
                <Link key={item} href={item.pathName}>
                  <Button sx={{ color: "white" }}>{item.route}</Button>
                </Link>
              ))}
            </Box>
            <Box sx={{display:{
                    xs:"none",
                    md:"block"
                  }}}>
              <Stack
                direction="row"
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
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default NavBar;
