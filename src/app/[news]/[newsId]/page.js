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
              blurDataURL="data:image/webp;base64,UklGRmoFAABXRUJQVlA4WAoAAAAgAAAApQIAaAEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggfAMAAFBDAJ0BKqYCaQE+7Xa3VqmnJSOgCAEwHYlpbuFnb7zEJbzqZQwTgfGP0AJ7APoZkWlQwrtMqQXaVAsl2vF5mAsG9vp4Ii5vC9B1V7QhuEogYBgfa2TtUJrr5Dimye66UghEOvM2TA3oQ2C7lTi+RJyGiojpLtOKT3ZITPo3NloAkBApBCvUxyAJHQBzooB46ya8gqyQwZLtISLZYPi7CgqYl9rzcgG7UoKJ1M77bDnxXicyd29gFDsXS7citehu89RSwgIMYI8OV9jqs0IpS+s2l1SV6KUIdZYtCvE3cnJ+ajmT6aaU8i4AWO1xZOLyN320Fku6xaSL0kbSiILvRZdFT9zJdu6A9G8255xgItwiScQl/CQ0JYjrJt4S0Du2vF1OUrPiXLNpUGda3YPEAtmb5qVrxcnIe/iPZnyiceCdSV3PVG7VP/an09snKsW4PM67ZjdAkd2oqfvPU/OElge+2TxDrPRV188nIgLbEp+88zmvQr+eTkPfv09N3bzwHP2J02l5lr9DT5SwD32yciytCeUOIslWSLvPNSr3PFWsOEF2lQLJjsXv8gnWsjxDrJrq9BbtKgWS7Xi5bBTMddt/2OsmbFCfBFS1P57ZOQ99snI/8erNCRZHL44lPZv7Dych77ZOQ+NjHIg0Q7UoeIMbNKgWS7Xi5OQ99snH/RIQBU/gh/szZJh77ZOQ99snOUi+l25HLuAsYpGEi0qBZLteLWAA/vlPCqAL/yWqOSN9idUTOSCDwdJGNZXMlms/DZbk/cCgS/bbYuvBVWrm21kgH3hFtyxdq/C+Y/wRrpKWnOeQmd9LJfTYa7fQoQoSQlMujZ8kyHW1/kd+scEiJ16aNV/2AiJ4ncSuk7oSxoNuFCny5l7RxfGR9orZTA+zBzkDSVClMTBGnCh25xnBjjt7248L7Kr2xyJz2VS4I8yXdxEUfHhaPGwlDHKf2IqyIcpAUdCOknVHWDIjaC3jaTiawrgWPzHWiBM9D/txLZ0LWBR89THQng2phsmIcT2KkapqlUeWcFido6o869bYcko778EL9aFE66saBmWYUtYfrp25TN/DIex6PIhy78RVjERIXUJrSsfgNMYhsunsFGRmUUdamQRT8CaHgHHzBghtho8O36AAKoucJIkp24ho4AlQQ+h/+EsGLvJOIAigQKQqIDuFAWMcbjMAAAA="
              placeholder="blur"
            />

            <Grid container spacing={2} className="mt-2">
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  width={800}
                  height={500}
                  alt="news"
                  blurDataURL="data:image/webp;base64,UklGRmoFAABXRUJQVlA4WAoAAAAgAAAApQIAaAEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggfAMAAFBDAJ0BKqYCaQE+7Xa3VqmnJSOgCAEwHYlpbuFnb7zEJbzqZQwTgfGP0AJ7APoZkWlQwrtMqQXaVAsl2vF5mAsG9vp4Ii5vC9B1V7QhuEogYBgfa2TtUJrr5Dimye66UghEOvM2TA3oQ2C7lTi+RJyGiojpLtOKT3ZITPo3NloAkBApBCvUxyAJHQBzooB46ya8gqyQwZLtISLZYPi7CgqYl9rzcgG7UoKJ1M77bDnxXicyd29gFDsXS7citehu89RSwgIMYI8OV9jqs0IpS+s2l1SV6KUIdZYtCvE3cnJ+ajmT6aaU8i4AWO1xZOLyN320Fku6xaSL0kbSiILvRZdFT9zJdu6A9G8255xgItwiScQl/CQ0JYjrJt4S0Du2vF1OUrPiXLNpUGda3YPEAtmb5qVrxcnIe/iPZnyiceCdSV3PVG7VP/an09snKsW4PM67ZjdAkd2oqfvPU/OElge+2TxDrPRV188nIgLbEp+88zmvQr+eTkPfv09N3bzwHP2J02l5lr9DT5SwD32yciytCeUOIslWSLvPNSr3PFWsOEF2lQLJjsXv8gnWsjxDrJrq9BbtKgWS7Xi5bBTMddt/2OsmbFCfBFS1P57ZOQ99snI/8erNCRZHL44lPZv7Dych77ZOQ+NjHIg0Q7UoeIMbNKgWS7Xi5OQ99snH/RIQBU/gh/szZJh77ZOQ99snOUi+l25HLuAsYpGEi0qBZLteLWAA/vlPCqAL/yWqOSN9idUTOSCDwdJGNZXMlms/DZbk/cCgS/bbYuvBVWrm21kgH3hFtyxdq/C+Y/wRrpKWnOeQmd9LJfTYa7fQoQoSQlMujZ8kyHW1/kd+scEiJ16aNV/2AiJ4ncSuk7oSxoNuFCny5l7RxfGR9orZTA+zBzkDSVClMTBGnCh25xnBjjt7248L7Kr2xyJz2VS4I8yXdxEUfHhaPGwlDHKf2IqyIcpAUdCOknVHWDIjaC3jaTiawrgWPzHWiBM9D/txLZ0LWBR89THQng2phsmIcT2KkapqlUeWcFido6o869bYcko778EL9aFE66saBmWYUtYfrp25TN/DIex6PIhy78RVjERIXUJrSsfgNMYhsunsFGRmUUdamQRT8CaHgHHzBghtho8O36AAKoucJIkp24ho4AlQQ+h/+EsGLvJOIAigQKQqIDuFAWMcbjMAAAA="
                  placeholder="blur"
                />
              </Grid>
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  width={800}
                  height={500}
                  alt="news"
                  blurDataURL="data:image/webp;base64,UklGRmoFAABXRUJQVlA4WAoAAAAgAAAApQIAaAEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggfAMAAFBDAJ0BKqYCaQE+7Xa3VqmnJSOgCAEwHYlpbuFnb7zEJbzqZQwTgfGP0AJ7APoZkWlQwrtMqQXaVAsl2vF5mAsG9vp4Ii5vC9B1V7QhuEogYBgfa2TtUJrr5Dimye66UghEOvM2TA3oQ2C7lTi+RJyGiojpLtOKT3ZITPo3NloAkBApBCvUxyAJHQBzooB46ya8gqyQwZLtISLZYPi7CgqYl9rzcgG7UoKJ1M77bDnxXicyd29gFDsXS7citehu89RSwgIMYI8OV9jqs0IpS+s2l1SV6KUIdZYtCvE3cnJ+ajmT6aaU8i4AWO1xZOLyN320Fku6xaSL0kbSiILvRZdFT9zJdu6A9G8255xgItwiScQl/CQ0JYjrJt4S0Du2vF1OUrPiXLNpUGda3YPEAtmb5qVrxcnIe/iPZnyiceCdSV3PVG7VP/an09snKsW4PM67ZjdAkd2oqfvPU/OElge+2TxDrPRV188nIgLbEp+88zmvQr+eTkPfv09N3bzwHP2J02l5lr9DT5SwD32yciytCeUOIslWSLvPNSr3PFWsOEF2lQLJjsXv8gnWsjxDrJrq9BbtKgWS7Xi5bBTMddt/2OsmbFCfBFS1P57ZOQ99snI/8erNCRZHL44lPZv7Dych77ZOQ+NjHIg0Q7UoeIMbNKgWS7Xi5OQ99snH/RIQBU/gh/szZJh77ZOQ99snOUi+l25HLuAsYpGEi0qBZLteLWAA/vlPCqAL/yWqOSN9idUTOSCDwdJGNZXMlms/DZbk/cCgS/bbYuvBVWrm21kgH3hFtyxdq/C+Y/wRrpKWnOeQmd9LJfTYa7fQoQoSQlMujZ8kyHW1/kd+scEiJ16aNV/2AiJ4ncSuk7oSxoNuFCny5l7RxfGR9orZTA+zBzkDSVClMTBGnCh25xnBjjt7248L7Kr2xyJz2VS4I8yXdxEUfHhaPGwlDHKf2IqyIcpAUdCOknVHWDIjaC3jaTiawrgWPzHWiBM9D/txLZ0LWBR89THQng2phsmIcT2KkapqlUeWcFido6o869bYcko778EL9aFE66saBmWYUtYfrp25TN/DIex6PIhy78RVjERIXUJrSsfgNMYhsunsFGRmUUdamQRT8CaHgHHzBghtho8O36AAKoucJIkp24ho4AlQQ+h/+EsGLvJOIAigQKQqIDuFAWMcbjMAAAA="
                  placeholder="blur"
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
                gap: 3,
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
                color: "gray",
              }}
            >
              {news.details}
            </Typography>
            <Typography variant="h5">
              ``Many desktop publishing packages and web pages editors now use
              as their default Model text!
            </Typography>
            <Typography variant="h6">_Md Nurullah Bhuiyan</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SingleNews;
