import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import sideTopNews from "@/assets/side-top-news.png";
import sideBottomNews from "@/assets/side-bottom-img.png";
import SideBarNewsCard from "./SideBarNewsCard";
const SideBarNews = () => {
  return (
    <Box>
      <Card className="w-full my-5">
        <CardActionArea>
          <CardMedia>
            <Image
              width={800}
              src={sideTopNews}
              alt="Thumbnail"
              blurDataURL="https://i.ibb.co/0cff2XW/3704115-1.jpg"
              placeholder="blur"
            />
          </CardMedia>
          <CardContent>
            <p className="w-[100px] bg-red-500 px-2 text-white my-5 rounded">
              Technology
            </p>
            <Typography gutterBottom className="my-3">
              By Nurullah Bhuiyan - Mar 18 2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Divider sx={{ mt: 1, mb: 2 }} />
      <SideBarNewsCard />
      <SideBarNewsCard />
      <SideBarNewsCard />
      <SideBarNewsCard />
      <SideBarNewsCard />
      <SideBarNewsCard />
      <Box>
        <Image
          src={sideBottomNews}
          height={400}
          width={450}
          alt="rectangle world image"
          blurDataURL="https://i.ibb.co/0cff2XW/3704115-1.jpg"
          placeholder="blur"
        />
      </Box>
    </Box>
  );
};

export default SideBarNews;
