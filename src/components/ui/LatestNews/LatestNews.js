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
import Image from "next/image";
import { getAllNews } from "@/utils/getAllNews";
import Link from "next/link";
const LatestNews = async () => {
  const { data: allNews } = await getAllNews();
  const firstNews = allNews[0];
  const { category, author, thumbnail_url, title, details } = firstNews;
  const homePageNews = allNews.length > 4 ? allNews.slice(0, 4) : allNews;
  return (
    <Box>
      <Link href={`/${firstNews.category.toLowerCase()}/${firstNews._id}`}>
        <Card className="w-full my-5">
          <CardActionArea>
            <CardMedia>
              <Image
                width={800}
                height={500}
                src={thumbnail_url}
                alt="Thumbnail"
              />
            </CardMedia>
            <CardContent>
              <span className="bg-red-500 px-2 text-white my-5 rounded">
                {category}
              </span>
              <Typography variant="h5" gutterBottom className="my-3">
                {title.length > 50 ? title.slice(0, 50) + "..." : title}
              </Typography>
              <Typography gutterBottom className="my-3">
                By {author?.name} - {author?.published_date}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {details?.length > 200
                  ? details.slice(0, 200) + "..."
                  : details}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {homePageNews.map((news) => (
          
            <Grid key={news.id} item lg={6}>
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
                      width={800}
                      height={500}
                      src={news.thumbnail_url}
                      alt="Thumbnail"
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography variant="h5" gutterBottom className="my-3">
                      {title.length > 30 ? title.slice(0, 30) + "..." : title}
                    </Typography>
                    <span className="w-[100px] bg-red-500 px-2 text-white my-5 rounded">
                      {news.category}
                    </span>
                    <Typography gutterBottom className="my-3">
                      By_<span className="font-bold">{news.author.name}</span> _
                      {news.author.published_date}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {news.details?.length > 200
                        ? news.details.slice(0, 200) + "..."
                        : news.details} <Link className="text-blue-500" key={news.id} href={`/${news.category.toLowerCase()}/${news._id}`}>Read more</Link>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
       
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNews;
