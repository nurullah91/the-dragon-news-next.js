import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import sideTopNews from '@/assets/side-top-news.png'
const SideBarNews = () => {
    return (
        <Box>
             <Card className="w-full my-5">
        <CardActionArea>
          <CardMedia>
            <Image width={800} src={sideTopNews} alt="Thumbnail" />
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
            
        </Box>
    );
};

export default SideBarNews;