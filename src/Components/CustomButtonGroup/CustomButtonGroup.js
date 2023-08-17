import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CreateIcon from '@mui/icons-material/Create';
import RoomIcon from '@mui/icons-material/Room';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useDispatch } from 'react-redux';
import { showParentDialog } from '../../Redux/parentDialogSlice';






export default function CustomButtonGroup() {
  const dispatch = useDispatch();
const handleParentDialogShow = (dialogType) => {
  dispatch(showParentDialog(dialogType))
}

const buttons = [
  <Button key="one" startIcon={<CreateIcon/>} onClick={() => handleParentDialogShow('edit-project')} >Edit</Button>,
  <Button key="two" startIcon={<ContentCopyIcon />}>Copy</Button>,
  <Button key="three" startIcon={<RoomIcon/>}>Map</Button>,
];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" aria-label="small button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
