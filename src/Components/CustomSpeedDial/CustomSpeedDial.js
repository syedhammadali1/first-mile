import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

export default function CustomSpeedDial({style,size}) {
  return (
    // <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={style}
        icon={<SpeedDialIcon />}
        FabProps={{ size: size }}
        // onClick={()=>alert('hello')}
      >
      </SpeedDial>
    // </Box>
  );
}
