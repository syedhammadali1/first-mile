import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ReorderIcon from '@mui/icons-material/Reorder';

export default function CustomToggleButton({className,handleGridView = () => {}}) {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


 

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      className={`${className}`}
    >
  <ToggleButton value="left" aria-label="left" size='small' onClick={ () => handleGridView(true)}>
    <ReorderIcon />
  </ToggleButton>
  <ToggleButton value="module" aria-label="module" size='small' onClick={() => handleGridView(false)} >
    <ViewModuleIcon />
  </ToggleButton>
    </ToggleButtonGroup>
  );
}
