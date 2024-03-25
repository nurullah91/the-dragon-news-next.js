import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "@/assets/the-dragon-news.png";
import getCurrentDate from "@/utils/getCurrentDate";
const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box>
      <Container className="text-center my-5">
        <Image
          className="mx-auto"
          width={500}
          height={500}
          src={logo}
          alt="Logo"
          blurDataURL="data:image/webp;base64,UklGRmoFAABXRUJQVlA4WAoAAAAgAAAApQIAaAEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggfAMAAFBDAJ0BKqYCaQE+7Xa3VqmnJSOgCAEwHYlpbuFnb7zEJbzqZQwTgfGP0AJ7APoZkWlQwrtMqQXaVAsl2vF5mAsG9vp4Ii5vC9B1V7QhuEogYBgfa2TtUJrr5Dimye66UghEOvM2TA3oQ2C7lTi+RJyGiojpLtOKT3ZITPo3NloAkBApBCvUxyAJHQBzooB46ya8gqyQwZLtISLZYPi7CgqYl9rzcgG7UoKJ1M77bDnxXicyd29gFDsXS7citehu89RSwgIMYI8OV9jqs0IpS+s2l1SV6KUIdZYtCvE3cnJ+ajmT6aaU8i4AWO1xZOLyN320Fku6xaSL0kbSiILvRZdFT9zJdu6A9G8255xgItwiScQl/CQ0JYjrJt4S0Du2vF1OUrPiXLNpUGda3YPEAtmb5qVrxcnIe/iPZnyiceCdSV3PVG7VP/an09snKsW4PM67ZjdAkd2oqfvPU/OElge+2TxDrPRV188nIgLbEp+88zmvQr+eTkPfv09N3bzwHP2J02l5lr9DT5SwD32yciytCeUOIslWSLvPNSr3PFWsOEF2lQLJjsXv8gnWsjxDrJrq9BbtKgWS7Xi5bBTMddt/2OsmbFCfBFS1P57ZOQ99snI/8erNCRZHL44lPZv7Dych77ZOQ+NjHIg0Q7UoeIMbNKgWS7Xi5OQ99snH/RIQBU/gh/szZJh77ZOQ99snOUi+l25HLuAsYpGEi0qBZLteLWAA/vlPCqAL/yWqOSN9idUTOSCDwdJGNZXMlms/DZbk/cCgS/bbYuvBVWrm21kgH3hFtyxdq/C+Y/wRrpKWnOeQmd9LJfTYa7fQoQoSQlMujZ8kyHW1/kd+scEiJ16aNV/2AiJ4ncSuk7oSxoNuFCny5l7RxfGR9orZTA+zBzkDSVClMTBGnCh25xnBjjt7248L7Kr2xyJz2VS4I8yXdxEUfHhaPGwlDHKf2IqyIcpAUdCOknVHWDIjaC3jaTiawrgWPzHWiBM9D/txLZ0LWBR89THQng2phsmIcT2KkapqlUeWcFido6o869bYcko778EL9aFE66saBmWYUtYfrp25TN/DIex6PIhy78RVjERIXUJrSsfgNMYhsunsFGRmUUdamQRT8CaHgHHzBghtho8O36AAKoucJIkp24ho4AlQQ+h/+EsGLvJOIAigQKQqIDuFAWMcbjMAAAA="
          placeholder="blur"
        />
        <Typography variant="body2" color="gray">
          Journalism without fear and favour
        </Typography>
        <Typography color="gray">{currentDate}</Typography>
      </Container>
    </Box>
  );
};

export default Header;
