import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './CustomTextCard.css'

function CustomTextCard({ keys, values, title, button ,titleStyle='' }) {
    return (
        <>
            {title &&
                <>
                    <Stack className={`align-items-center card-title  d-flex flex-row  text-left ${titleStyle}`}>
                        {title}
                        {
                            button &&
                            <Button variant="outlined" size='small' startIcon={<OpenInNewIcon />}>
                                TIMELINE
                            </Button>
                        }
                    </Stack>

                </>
            }

            <div style={{ display: 'flex',justifyContent:'center' }}>

                <Box className={'w-max-content text-right'}>
                    {keys.length > 0 && keys.map((key) => {
                        return (<Typography variant="body2" className={'contract-card-text'} >
                            {key} :
                        </Typography>)
                    })}
                </Box>
                <Box className={'w-auto text-left'}>
                    {values.length > 0 && values.map((value) => {
                        return (<Typography variant="body2" className={'contract-card-text ml-2 w-max-content text-width'}>
                            {value}
                        </Typography>)
                    })}
                </Box>
            </div>
        </>
    )
}

export default CustomTextCard