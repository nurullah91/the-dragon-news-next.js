import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
import Image from "next/image";
const LatestNews = () => {
  return (
    <Box>
      <Card className="w-full my-5">
        <CardActionArea>
          <CardMedia>
            <Image width={800} src={topNews} alt="Thumbnail" />
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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Card className="w-full my-5">
            <CardActionArea>
              <CardMedia>
                <Image width={800} src={topNews2} alt="Thumbnail" />
              </CardMedia>
              <CardContent>
                <p className="w-[100px] bg-red-500 px-2 text-white my-5 rounded">
                  Technology
                </p>
                <Typography gutterBottom className="my-3">
                  By Nurullah Bhuiyan - Mar 18 2024
                </Typography>
                <Typography color="text.secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout........
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className="w-full my-5">
            <CardActionArea>
              <CardMedia>
                <Image width={800} src={topNews2} alt="Thumbnail" />
              </CardMedia>
              <CardContent>
                <p className="w-[100px] bg-red-500 px-2 text-white my-5 rounded">
                  Technology
                </p>
                <Typography gutterBottom className="my-3">
                  By Nurullah Bhuiyan - Mar 18 2024
                </Typography>
                <Typography color="text.secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout........
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className="w-full my-5">
            <CardActionArea>
              <CardMedia>
                <Image width={800} src={topNews2} alt="Thumbnail" />
              </CardMedia>
              <CardContent>
                <p className="w-[100px] bg-red-500 px-2 text-white my-5 rounded">
                  Technology
                </p>
                <Typography gutterBottom className="my-3">
                  By Nurullah Bhuiyan - Mar 18 2024
                </Typography>
                <Typography color="text.secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout........
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className="w-full my-5">
            <CardActionArea>
              <CardMedia>
                <Image width={800} src={topNews2} alt="Thumbnail" />
              </CardMedia>
              <CardContent>
                <p className="w-[100px] bg-red-500 px-2 text-white my-5 rounded">
                  Technology
                </p>
                <Typography gutterBottom className="my-3">
                  By Nurullah Bhuiyan - Mar 18 2024
                </Typography>
                <Typography color="text.secondary">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout........
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LatestNews;
