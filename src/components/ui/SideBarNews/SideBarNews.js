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
              blurDataURL="data:image/webp;base64,UklGRmoFAABXRUJQVlA4WAoAAAAgAAAApQIAaAEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggfAMAAFBDAJ0BKqYCaQE+7Xa3VqmnJSOgCAEwHYlpbuFnb7zEJbzqZQwTgfGP0AJ7APoZkWlQwrtMqQXaVAsl2vF5mAsG9vp4Ii5vC9B1V7QhuEogYBgfa2TtUJrr5Dimye66UghEOvM2TA3oQ2C7lTi+RJyGiojpLtOKT3ZITPo3NloAkBApBCvUxyAJHQBzooB46ya8gqyQwZLtISLZYPi7CgqYl9rzcgG7UoKJ1M77bDnxXicyd29gFDsXS7citehu89RSwgIMYI8OV9jqs0IpS+s2l1SV6KUIdZYtCvE3cnJ+ajmT6aaU8i4AWO1xZOLyN320Fku6xaSL0kbSiILvRZdFT9zJdu6A9G8255xgItwiScQl/CQ0JYjrJt4S0Du2vF1OUrPiXLNpUGda3YPEAtmb5qVrxcnIe/iPZnyiceCdSV3PVG7VP/an09snKsW4PM67ZjdAkd2oqfvPU/OElge+2TxDrPRV188nIgLbEp+88zmvQr+eTkPfv09N3bzwHP2J02l5lr9DT5SwD32yciytCeUOIslWSLvPNSr3PFWsOEF2lQLJjsXv8gnWsjxDrJrq9BbtKgWS7Xi5bBTMddt/2OsmbFCfBFS1P57ZOQ99snI/8erNCRZHL44lPZv7Dych77ZOQ+NjHIg0Q7UoeIMbNKgWS7Xi5OQ99snH/RIQBU/gh/szZJh77ZOQ99snOUi+l25HLuAsYpGEi0qBZLteLWAA/vlPCqAL/yWqOSN9idUTOSCDwdJGNZXMlms/DZbk/cCgS/bbYuvBVWrm21kgH3hFtyxdq/C+Y/wRrpKWnOeQmd9LJfTYa7fQoQoSQlMujZ8kyHW1/kd+scEiJ16aNV/2AiJ4ncSuk7oSxoNuFCny5l7RxfGR9orZTA+zBzkDSVClMTBGnCh25xnBjjt7248L7Kr2xyJz2VS4I8yXdxEUfHhaPGwlDHKf2IqyIcpAUdCOknVHWDIjaC3jaTiawrgWPzHWiBM9D/txLZ0LWBR89THQng2phsmIcT2KkapqlUeWcFido6o869bYcko778EL9aFE66saBmWYUtYfrp25TN/DIex6PIhy78RVjERIXUJrSsfgNMYhsunsFGRmUUdamQRT8CaHgHHzBghtho8O36AAKoucJIkp24ho4AlQQ+h/+EsGLvJOIAigQKQqIDuFAWMcbjMAAAA="
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
          blurDataURL="data:image/webp;base64,UklGRmoFAABXRUJQVlA4WAoAAAAgAAAApQIAaAEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggfAMAAFBDAJ0BKqYCaQE+7Xa3VqmnJSOgCAEwHYlpbuFnb7zEJbzqZQwTgfGP0AJ7APoZkWlQwrtMqQXaVAsl2vF5mAsG9vp4Ii5vC9B1V7QhuEogYBgfa2TtUJrr5Dimye66UghEOvM2TA3oQ2C7lTi+RJyGiojpLtOKT3ZITPo3NloAkBApBCvUxyAJHQBzooB46ya8gqyQwZLtISLZYPi7CgqYl9rzcgG7UoKJ1M77bDnxXicyd29gFDsXS7citehu89RSwgIMYI8OV9jqs0IpS+s2l1SV6KUIdZYtCvE3cnJ+ajmT6aaU8i4AWO1xZOLyN320Fku6xaSL0kbSiILvRZdFT9zJdu6A9G8255xgItwiScQl/CQ0JYjrJt4S0Du2vF1OUrPiXLNpUGda3YPEAtmb5qVrxcnIe/iPZnyiceCdSV3PVG7VP/an09snKsW4PM67ZjdAkd2oqfvPU/OElge+2TxDrPRV188nIgLbEp+88zmvQr+eTkPfv09N3bzwHP2J02l5lr9DT5SwD32yciytCeUOIslWSLvPNSr3PFWsOEF2lQLJjsXv8gnWsjxDrJrq9BbtKgWS7Xi5bBTMddt/2OsmbFCfBFS1P57ZOQ99snI/8erNCRZHL44lPZv7Dych77ZOQ+NjHIg0Q7UoeIMbNKgWS7Xi5OQ99snH/RIQBU/gh/szZJh77ZOQ99snOUi+l25HLuAsYpGEi0qBZLteLWAA/vlPCqAL/yWqOSN9idUTOSCDwdJGNZXMlms/DZbk/cCgS/bbYuvBVWrm21kgH3hFtyxdq/C+Y/wRrpKWnOeQmd9LJfTYa7fQoQoSQlMujZ8kyHW1/kd+scEiJ16aNV/2AiJ4ncSuk7oSxoNuFCny5l7RxfGR9orZTA+zBzkDSVClMTBGnCh25xnBjjt7248L7Kr2xyJz2VS4I8yXdxEUfHhaPGwlDHKf2IqyIcpAUdCOknVHWDIjaC3jaTiawrgWPzHWiBM9D/txLZ0LWBR89THQng2phsmIcT2KkapqlUeWcFido6o869bYcko778EL9aFE66saBmWYUtYfrp25TN/DIex6PIhy78RVjERIXUJrSsfgNMYhsunsFGRmUUdamQRT8CaHgHHzBghtho8O36AAKoucJIkp24ho4AlQQ+h/+EsGLvJOIAigQKQqIDuFAWMcbjMAAAA="
          placeholder="blur"
        />
      </Box>
    </Box>
  );
};

export default SideBarNews;
