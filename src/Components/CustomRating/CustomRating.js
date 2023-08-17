import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function CustomRating({size,className}) {
  const [value, setValue] = React.useState(2);

  return (

      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        size={size}
        className='rating'  
      />  
  );
}
