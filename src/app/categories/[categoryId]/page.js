import { getCategoryNews } from "@/utils/getCategoryNews";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DynamicNewsPage = async ({ searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category);

  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data.map((news) => (
          <Grid key={news.id} item md={6} xs={12}>
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
              <Card className="w-full my-5">
                <CardActionArea>
                  <CardMedia
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "250px",
                      },
                    }}
                  >
                    <Image
                      width={500}
                      height={500}
                      src={news.thumbnail_url}
                      alt="Thumbnail"
                      blurDataURL="https://i.ibb.co/0cff2XW/3704115-1.jpg"
                      placeholder="blur"
                    />
                  </CardMedia>
                  <CardContent>
                    <span className="bg-red-500 px-2 text-white my-3 rounded">
                      {news.category}
                    </span>
                    <Typography gutterBottom variant="h5">
                      {news.title.length > 30
                        ? news.title.slice(0, 30) + "..."
                        : news.title}
                    </Typography>
                    <Typography gutterBottom className="my-3">
                      By {news.author.name} - Mar 18 2024
                    </Typography>
                    <Typography color="text.secondary">
                      {news.details.length > 200
                        ? news.details.slice(0, 200) + "..."
                        : news.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DynamicNewsPage;
