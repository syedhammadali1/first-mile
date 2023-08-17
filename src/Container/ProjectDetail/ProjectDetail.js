import React from 'react'
import CustomBreadCrumb from '../../Components/CustomBreadCrumb/CustomBreadCrumb'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CreateIcon from '@mui/icons-material/Create';
import { Box,  Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, SpeedDial, SpeedDialIcon, Stack, Typography } from '@mui/material'
import { BuildingListData, address, addressFormCardData,  bankDetails, buildingInfoFormCardData, buildingSpecificDetailFormCardData, connection1, connection2, editor, generalDetails,  locationFormCardData, operatingTime, operatingTimeFormCardData,  projectInfoFormCardData } from '../../Utils/dummyData';
import CustomTextCard from '../../Components/CustomTextCard/CustomTextCard';
import CustomButtonGroup from '../../Components/CustomButtonGroup/CustomButtonGroup';
import CustomCard, { CardWithImage, PaymentDetailCard } from '../../Components/CustomCard/CustomCard';
import '../ContractDetail/ContractDetail.css'
import './ProjectDetail.css'
import CustomCircularProgress from '../../Components/CustomCircularProgress/CustomCircularProgress';
import BasicTabs from '../../Components/CustomTab/CustomTab';
import ContractDetail from '../ContractDetail/ContractDetail';
import BuildingList from '../BuildingList/BuildingList';
import { hideParentDialog, showParentDialog } from '../../Redux/parentDialogSlice';
import { useDispatch, useSelector } from 'react-redux';
import CustomCardModal from '../../Components/CustomCardModal/CustomCardModal';
import { useNavigate } from 'react-router-dom';
import CustomNestedAndDualNestedDialog from '../../Components/CustomNestedAndDualNestedDialog/CustomNestedAndDualNestedDialog';
import AllParentDialogBoxs from '../../Components/AllParentDialogBoxs/AllParentDialogBoxs';



function ProjectDetail() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleParentDialogShow = (dialogType) => {
        dispatch(showParentDialog(dialogType))
    }


    const tabs = [
        {
            label: "BUILDING LIST",
            Component: <BuildingList />,
            class: 'nav-text'
        },
        {
            label: "CONTRACT",
            Component: <ContractDetail onlyContractList={true} />,
            class: 'nav-text'

        }
    ];

    const goBack = () => {
        navigate(-1);
    }

    return (
        <>
          <CustomCardModal></CustomCardModal>
          <AllParentDialogBoxs/>
          <CustomNestedAndDualNestedDialog/>
            <CustomBreadCrumb className='pl-4' breadcrumbNames={['Project', 'Project Detail']}></CustomBreadCrumb>

            <Grid container className='header-style' >
                <Grid item xs={1} className='text-left pl-4 cursor-pointer' onClick={goBack}>
                    <ArrowBackIosNewIcon className='font-16px ' />
                    <Typography variant={'string'} className='pl-1' >Back</Typography>
                </Grid>
                <Grid item xs={10}>
                    <Typography className='title-style'>Supalai @ thonglor</Typography>
                </Grid>
                <Grid item xs={1} className='text-right fs-2' >
                    <CreateIcon className='p-1 pr-2  border-0 cursor-pointer' fontSize={'large'} onClick={() => handleParentDialogShow('edit-project')} />
                </Grid>
            </Grid>


            <Box className='d-flex justify-content-center'>
                <Box className='box-border'>
                    <Box className='card-border border-left-right-0 p-3'>
                        <CustomTextCard keys={generalDetails.keys} values={generalDetails.values} title={'General details '} />
                    </Box>
                    <Box className='text-card-border p-3'>
                        <CustomTextCard keys={address.keys} values={address.values} title={'Address'} />
                    </Box>
                </Box>
                <Box className='box-border'>
                    <Box className='p-3'>
                        <Stack className='align-items-center card-title  d-flex flex-row justify-content-between text-left'>
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
                    <Box className='text-card-border p-3'>
                        <CustomTextCard keys={editor.keys} values={editor.values} title={'Editor'} button={true} titleStyle={'justify-content-between'} />
                    </Box>
                </Box>
                <Box className='box-border project-detail-sections'>
                    <Box className='card-border pt-3 pl-4'>
                        <Stack className='card-title  text-left'>
                            Juristic contact
                        </Stack>
                        <Box className='project-page-scroll-container'>
                            <Box className='content'>
                                <Box>
                                    <CustomCard className='small-card mb-2 card-transition-effect' cardType={'contact'} />
                                </Box>
                                <Box>
                                    <CustomCard className='small-card mb-2 card-transition-effect' cardType={'contact'} />
                                </Box>
                                <Box>
                                    <CustomCard className='small-card mb-2 card-transition-effect' cardType={'contact'} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='text-card-border  p-3'>
                        <CustomTextCard keys={operatingTime.keys} values={operatingTime.values} title={'Operating time'} />
                    </Box>

                </Box>
                <Box className={'d-flex flex-column box-border'}>
                    <Box className={'d-flex'}>
                        <Box className={'project-detail-sections payment-detail-section-height box-border'} >
                            <Box className='card-border pt-3 pl-4'>
                                <Stack className='card-title  text-left'>
                                    Payment details
                                </Stack>
                                <Box className='project-page-scroll-container'>
                                    <Box className='content'>
                                        <Box>
                                            <PaymentDetailCard className='mb-2 card-transition-effect ' bankdetail={bankDetails.scbBank} />
                                        </Box>
                                        <Box>
                                            <PaymentDetailCard className='mb-2 card-transition-effect' bankdetail={bankDetails.KTB} />
                                        </Box>
                                        <Box>
                                            <PaymentDetailCard className='mb-2 card-transition-effect' bankdetail={bankDetails.KBank} />
                                        </Box>
                                        <Box>
                                            <PaymentDetailCard className='mb-2 card-transition-effect' bankdetail={bankDetails.KTB} />
                                        </Box>
                                        <Box>
                                            <PaymentDetailCard className='mb-2 card-transition-effect' bankdetail={bankDetails.KBank} />
                                        </Box>
                                        <Box>
                                            <PaymentDetailCard className='mb-2 card-transition-effect' bankdetail={bankDetails.scbBank} />
                                        </Box>
                                        <Box>
                                            <PaymentDetailCard className='mb-2 card-transition-effect' bankdetail={bankDetails.KTB} />
                                        </Box>
                                        <Box>
                                            <PaymentDetailCard className='mb-2 card-transition-effect' bankdetail={bankDetails.KBank} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={'project-detail-sections payment-detail-section-height box-border'}>
                            <Box className='card-border p-3' sx={{ borderRight: 'none' }}>
                                <Stack className='card-title  text-left'>
                                    AE
                                </Stack>
                                <Box className='project-page-scroll-container'>
                                    <Box className='content'>
                                        <Box>
                                            <CustomCard className='small-card mb-2 card-transition-effect' cardType={'AECard'} />
                                        </Box>
                                        <Box>
                                            <CustomCard className='small-card mb-2 card-transition-effect' cardType={'AECard'} />
                                        </Box>
                                        <Box>
                                            <CustomCard className='small-card mb-2 card-transition-effect' cardType={'AECard'} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                    <Box className=''>
                        <Stack className='card-title p-3  text-left'>
                            Connection
                        </Stack>
                        <Box className='d-flex justify-content-end
                        '>
                            <Box>
                                <CustomCircularProgress />
                            </Box>
                            <Box sx={{ width: '205px', }}>
                                <CustomTextCard keys={connection1.keys} values={connection1.values} />
                            </Box>
                            <Box sx={{ width: '205px', }}>
                                <CustomTextCard keys={connection2.keys} values={connection2.values} />
                            </Box>
                            {/* <Box></Box> */}
                        </Box>
                    </Box>

                </Box>

            </Box>

            <Box className={'d-flex justify-content-between py-2 border-top-bottom '}>
                <BasicTabs tabs={tabs} />
            </Box>
        </>
    )
}

export default ProjectDetail