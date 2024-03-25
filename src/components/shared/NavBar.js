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
                blurDataURL="data:image/webp;base64,UklGRmoFAABXRUJQVlA4WAoAAAAgAAAApQIAaAEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggfAMAAFBDAJ0BKqYCaQE+7Xa3VqmnJSOgCAEwHYlpbuFnb7zEJbzqZQwTgfGP0AJ7APoZkWlQwrtMqQXaVAsl2vF5mAsG9vp4Ii5vC9B1V7QhuEogYBgfa2TtUJrr5Dimye66UghEOvM2TA3oQ2C7lTi+RJyGiojpLtOKT3ZITPo3NloAkBApBCvUxyAJHQBzooB46ya8gqyQwZLtISLZYPi7CgqYl9rzcgG7UoKJ1M77bDnxXicyd29gFDsXS7citehu89RSwgIMYI8OV9jqs0IpS+s2l1SV6KUIdZYtCvE3cnJ+ajmT6aaU8i4AWO1xZOLyN320Fku6xaSL0kbSiILvRZdFT9zJdu6A9G8255xgItwiScQl/CQ0JYjrJt4S0Du2vF1OUrPiXLNpUGda3YPEAtmb5qVrxcnIe/iPZnyiceCdSV3PVG7VP/an09snKsW4PM67ZjdAkd2oqfvPU/OElge+2TxDrPRV188nIgLbEp+88zmvQr+eTkPfv09N3bzwHP2J02l5lr9DT5SwD32yciytCeUOIslWSLvPNSr3PFWsOEF2lQLJjsXv8gnWsjxDrJrq9BbtKgWS7Xi5bBTMddt/2OsmbFCfBFS1P57ZOQ99snI/8erNCRZHL44lPZv7Dych77ZOQ+NjHIg0Q7UoeIMbNKgWS7Xi5OQ99snH/RIQBU/gh/szZJh77ZOQ99snOUi+l25HLuAsYpGEi0qBZLteLWAA/vlPCqAL/yWqOSN9idUTOSCDwdJGNZXMlms/DZbk/cCgS/bbYuvBVWrm21kgH3hFtyxdq/C+Y/wRrpKWnOeQmd9LJfTYa7fQoQoSQlMujZ8kyHW1/kd+scEiJ16aNV/2AiJ4ncSuk7oSxoNuFCny5l7RxfGR9orZTA+zBzkDSVClMTBGnCh25xnBjjt7248L7Kr2xyJz2VS4I8yXdxEUfHhaPGwlDHKf2IqyIcpAUdCOknVHWDIjaC3jaTiawrgWPzHWiBM9D/txLZ0LWBR89THQng2phsmIcT2KkapqlUeWcFido6o869bYcko778EL9aFE66saBmWYUtYfrp25TN/DIex6PIhy78RVjERIXUJrSsfgNMYhsunsFGRmUUdamQRT8CaHgHHzBghtho8O36AAKoucJIkp24ho4AlQQ+h/+EsGLvJOIAigQKQqIDuFAWMcbjMAAAA="
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
