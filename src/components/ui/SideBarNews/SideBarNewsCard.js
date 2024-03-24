import { Box, Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import blankImage from '@/assets/blankImage.png'

const SideBarNewsCard = () => {
    return (
        <>
      <Box
        sx={{
          display: "flex",
          gap: 3,
        }}
      >
        <Box>
          <Image src={blankImage} height={100} width={100} alt="rectangle" />
        </Box>
        <Box>
          <Stack rowGap={2}>
            <Typography variant="body1" fontWeight={700}>
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it{" "}
            </Typography>
            <Typography variant="body2" color="secondary.main">
              Mar 25 2024
            </Typography>
          </Stack>
        </Box>
      </Box>
      <Divider sx={{ mt: 1, mb: 2 }} />
    </>
    );
};

export default SideBarNewsCard;