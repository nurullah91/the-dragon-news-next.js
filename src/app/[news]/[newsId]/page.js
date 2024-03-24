import { getSingleNews } from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const SingleNews = async ({ params }) => {
  const { data: news } = await getSingleNews(params.newsId);

  return (
    <Box sx={{ margin: "20px 0px" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Image
              src={news.thumbnail_url}
              width={800}
              height={500}
              alt="Thumbnail"
            />

            <Grid container spacing={2} className="mt-2">
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  width={800}
                  height={500}
                  alt="news"
                />
              </Grid>
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  width={800}
                  height={500}
                  alt="news"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h5" component="h2">
              {news.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3
              }}
            >
              <Avatar alt="Author" src={news.author.img} />
              <Typography>By {news.author.name}</Typography>
              <Typography>Published:{news.author.published_date}</Typography>
            </Box>
            <Typography
              style={{
                textAlign: "justify",
                whiteSpace: "pre-line",
                margin: "20px 0px",
                color:"gray"
              }}
            >
              {news.details}
            </Typography>
            <Typography variant="h5">
                ``Many desktop publishing packages and web pages editors now use as their default Model text!
            </Typography>
            <Typography variant="h6">
              _Md Nurullah Bhuiyan
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SingleNews;
