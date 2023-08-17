import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { GridToolbarQuickFilter } from '@mui/x-data-grid';
import './GridView.css';
import CustomSpeedDial from '../CustomSpeedDial/CustomSpeedDial';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { useDispatch } from 'react-redux';
// import { closeDualNested } from '../../../Redux/dualNestedFormDialogSlice';
import { showParentDialog } from '../../Redux/parentDialogSlice';
import { Box, Button, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { address, contractDetails, generalDetails } from '../../Utils/dummyData';
import CustomTextCard from '../CustomTextCard/CustomTextCard';
import CustomButtonGroup from '../CustomButtonGroup/CustomButtonGroup';
import CustomChipCard from '../CustomChipCard/CustomChipCard';
import CustomCircularProgress from '../CustomCircularProgress/CustomCircularProgress';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';


export default function GridView({sdIcon='',  gridType = '', setOpenDialog = () => { }, dialogType = '', ...restProps }) {
    const navigate = useNavigate();

    const handleClick = (e) => {
    const modalCell = ["Juristic_Payment_Details", "Juristic_Contact", "Current_AE","Ae"];
     modalCell.includes(e?.field);
     if(!modalCell.includes(e?.field)){
        if (gridType == 'project') {
            //     document.getElementById('project-drawer').style.display = 'block';
            // document.getElementById('speedDial').style.right = '332px';
    
            navigate('/project/2');
    
            }
            if (gridType == 'contract') {
                // document.getElementById('contract-drawer').style.display = 'block';
                // document.getElementById('speedDial').style.right = '332px';
            navigate('/contract/2');
            }
     }


    }

    // const handleClose = (drawer) => {
    //     document.getElementById(drawer).style.display = 'none';
    //     document.getElementById('speedDial').style.right = '32px';

    // }

    const dispatch = useDispatch()

    const showParentDialogs = (dialogType) => {
        dispatch(showParentDialog(dialogType))
    }

    return (
        <>
            <div style={{ height: '81vh', width: '100%', padding: '0px', position: 'relative', display: 'flex' }}>

                {/* <div style={{ height: '600px', width: '80%', padding: '0px', position: 'relative', display: 'flex' }}> */}
                    <DataGrid  {...restProps} componentsProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                        },
                    }}
                        className='p-0 data-grid'
                        onCellClick={handleClick}
                    />
                    <SpeedDial
                        ariaLabel="SpeedDial basic example"
                        sx={{ position: 'absolute', bottom: '6rem', right: '2rem' }}
                        icon={ sdIcon == 'CreateIcon' ? <CreateIcon /> : <SpeedDialIcon />}
                        onClick={() => {
                            setOpenDialog(true)
                            showParentDialogs(dialogType)
                        }}
                        id='speedDial'
                    >
                    </SpeedDial>
                {/* </div> */}



                <Box className='drawer' id='project-drawer' sx={{ position: 'sticky' }}>
                    <Box className={'text-right'}>
                        {/* <CloseIcon onClick={() => handleClose('project-drawer')}></CloseIcon> */}
                    </Box>
                    <CustomTextCard keys={generalDetails.keys} values={generalDetails.values} title={'Project Detail '} titleStyle={' mt-3 justify-content-center'} />
                    <CustomTextCard keys={address.keys} values={address.values} title={'Address'} titleStyle={'mt-3 justify-content-center'} />

                    <Box className='p-3'>
                        <Stack className=' card-title  text-center'>
                            Map
                        </Stack>
                        <Box>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387198.0686934273!2d-74.60353102261044!3d40.69632994818312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1689327765412!5m2!1sen!2s"
                                width='250'
                                height="250"
                                style={{ border: 0, borderRadius: 15, }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">

                            </iframe>
                        </Box>
                        <CustomButtonGroup />
                        <Typography className='contract-card-text mt-2'>Latitude : 66.156844</Typography>
                        <Typography className='contract-card-text'>Longitude : 103.161431</Typography>
                    </Box>

                    <CustomChipCard dataType='JC' title={'Juristic contact'} />
                    <CustomChipCard dataType='payment-detail' title={'Payment detail'} />
                    <CustomChipCard dataType='AE' title={'AE (CareTaker)'} />

                    <Box className=''>
                        <Stack className='card-title p-3  text-center'>
                            Connection
                        </Stack>
                        <Box className='
                        '>
                            <Box>
                                <CustomCircularProgress className='my-2' />
                            </Box>
                            <Box>
                                <Typography variant="body2" className={'contract-card-text'} >
                                    Connection (%) : 89.77%
                                </Typography>
                                <Typography variant="body2" className={'contract-card-text'} >
                                    Port quantity : 1320
                                </Typography>
                                <Typography variant="body2" className={'contract-card-text'} >
                                    Port Connected : 1185
                                </Typography>

                                <Button variant="outlined" size='small' className='my-2'>
                                    MORE DETAIL
                                </Button>
                            </Box>

                            <Box className='mt-3'>
                                <Typography variant="body2" className={'card-footer-text'}>
                                    <b>Editor</b>  : Mr. Nitikarn N Kalasil
                                </Typography>


                                <Typography variant="body2" className={'card-footer-text'}>
                                    12/09/2019
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box>


                <Box className='drawer' id='contract-drawer' sx={{ position: 'sticky' }}>
                    <Box className={'text-right'}>
                        {/* <CloseIcon onClick={() => handleClose('contract-drawer')}></CloseIcon> */}
                    </Box>
                    <CustomTextCard keys={generalDetails.keys} values={generalDetails.values} title={'Project Detail '} titleStyle={' mt-3 justify-content-center'} />
                    <CustomTextCard keys={contractDetails.keys} values={contractDetails.values} title={'Contract Detail '} titleStyle={' mt-3 justify-content-center'} />
                    <CustomTextCard keys={address.keys} values={address.values} title={'Address'} titleStyle={'mt-3 justify-content-center'} />


                    <CustomChipCard dataType='JC' title={'Juristic contact'} />
                    <CustomChipCard dataType='payment-detail' title={'Payment detail'} />
                    <CustomChipCard dataType='AE' title={'AE (CareTaker)'} />

                    <CustomChipCard dataType='attachment' title={'Attachment'} />


                        <Box className='
                        '>
                            <Box>
                                <Button variant="outlined" size='small' className='my-2'>
                                    MORE DETAIL
                                </Button>
                            </Box>

                            <Box className='mt-3'>
                                <Typography variant="body2" className={'card-footer-text'}>
                                    <b>Editor</b>  : Mr. Nitikarn N Kalasil
                                </Typography>


                                <Typography variant="body2" className={'card-footer-text'}>
                                    12/09/2019
                                </Typography>
                            </Box>
                        </Box>

                </Box>

            </div>
        </>
    );
}