'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
    </Box>
  );
}
