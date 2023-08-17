import React from 'react'
import { Box,  Dialog, Grid, Stack, Typography } from '@mui/material'
import CustomBreadCrumb from '../../Components/CustomBreadCrumb/CustomBreadCrumb'
import './ContractDetail.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CreateIcon from '@mui/icons-material/Create';
import CustomTextCard from '../../Components/CustomTextCard/CustomTextCard'
import { generalDetails, address, contractDetails, editor, bankDetails, contractListUnderProject } from '../../Utils/dummyData'
import FolderIcon from '@mui/icons-material/Folder';
import CustomCard, { PaymentDetailCard } from '../../Components/CustomCard/CustomCard'
import CustomToggleButton from '../../Components/CustomToggleButton/CustomToggleButton'
import GridView from '../../Components/GridView/GridView'
import { GridToolbar } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'
import '../ContractDetail/ContractDetail.css'
import { hideParentDialog, showParentDialog } from '../../Redux/parentDialogSlice';
import { useDispatch, useSelector } from 'react-redux';
import CustomCardModal from '../../Components/CustomCardModal/CustomCardModal';
import CustomNestedAndDualNestedDialog from '../../Components/CustomNestedAndDualNestedDialog/CustomNestedAndDualNestedDialog';
import AllParentDialogBoxs from '../../Components/AllParentDialogBoxs/AllParentDialogBoxs';
// 



function ContractDetail({ onlyContractList = false }) {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleParentDialogShow = (dialogType) => {
        dispatch(showParentDialog(dialogType))
    }


    const goBack = () => {
        navigate(-1);
    }

    return (
        <>
            <CustomCardModal></CustomCardModal>
            <CustomNestedAndDualNestedDialog/>
            <AllParentDialogBoxs/>

            {
                !onlyContractList &&
                <>
                    <CustomBreadCrumb className='pl-4' breadcrumbNames={['Contract', 'Contract Detail']}></CustomBreadCrumb>
                    <Grid container className='header-style' >
                        <Grid item xs={1} className='text-left pl-4 cursor-pointer' onClick={goBack}>
                            <ArrowBackIosNewIcon className='font-16px ' />
                            <Typography variant={'string'} className='pl-1' >Back</Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography className='title-style'>Supalai @ thonglor</Typography>
                        </Grid>
                        <Grid item xs={1} className='text-right fs-2' >
                            <CreateIcon className='p-1 pr-2 cursor-pointer border-0' fontSize={'large'} onClick={() => handleParentDialogShow('edit-contract')} />
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
                            <Box className=' p-3'>
                                <CustomTextCard keys={contractDetails.keys} values={contractDetails.values} title={'Contract Detail'} />
                            </Box>
                            <Box className='text-card-border p-3'>
                                <Stack className='text-left card-title'>
                                    Attachment
                                </Stack>
                                <Stack className='border d-flex flex-row  justify-content-center pt-3 rounded' sx={{ height: '7rem' }}>
                                    <a
                                        href="/dummy.pdf"
                                        download="Example-PDF-document"
                                        // target="_blank"
                                        rel="noreferrer"

                                    >
                                        <FolderIcon></FolderIcon>
                                    </a>
                                    <Typography className='pl-2'>Supalai @ thonglor</Typography>
                                </Stack>
                            </Box>

                            <Box className='text-card-border p-3'>
                                <CustomTextCard keys={editor.keys} values={editor.values} title={'Editor'} button={true} titleStyle={'justify-content-between'} />
                            </Box>
                        </Box>
                        <Box className='juristic-contact-section box-border'>
                            <Box className='card-border p-3'>
                                <Stack className='card-title  text-left'>
                                    Juristic contact
                                </Stack>
                                <Box className='scroll-container'>
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
                                        {/* <Box>
                                            <CustomCard className='mb-2 singleCard' cardType={'contact'} />
                                        </Box>
                                        <Box>
                                            <CustomCard className='mb-2 singleCard' cardType={'contact'} />
                                        </Box>
                                        <Box>
                                            <CustomCard className='mb-2 singleCard' cardType={'contact'} />
                                        </Box> */}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={'payment-detail-section box-border'} >
                            <Box className='card-border p-3'>
                                <Stack className='card-title  text-left'>
                                    Payment details
                                </Stack>
                                <Box className='scroll-container'>
                                    <Box className='content'>
                                        <Box>
                                            <PaymentDetailCard className='mb-2 singleCard ' bankdetail={bankDetails.scbBank} />
                                        </Box>
                                        <Box>
                                            <PaymentDetailCard className='mb-2 singleCard' bankdetail={bankDetails.KTB} />
                                        </Box>
                                        <Box>
                                            <PaymentDetailCard className='mb-2 singleCard' bankdetail={bankDetails.KBank} />
                                        </Box>
                                        <Box>
                                            <PaymentDetailCard className='mb-2 singleCard' bankdetail={bankDetails.KTB} />
                                        </Box>
                                        <Box>
                                            <PaymentDetailCard className='mb-2 singleCard' bankdetail={bankDetails.KBank} />
                                        </Box>
                                        <Box>
                                            <PaymentDetailCard className='mb-2 singleCard' bankdetail={bankDetails.scbBank} />
                                        </Box>
                                        <Box>
                                            <PaymentDetailCard className='mb-2 singleCard' bankdetail={bankDetails.KTB} />
                                        </Box>
                                        <Box>
                                            <PaymentDetailCard className='mb-2 singleCard' bankdetail={bankDetails.KBank} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={'AE-section box-border'}>
                            <Box className='card-border p-3' sx={{ borderRight: 'none' }}>
                                <Stack className='card-title  text-left'>
                                    AE
                                </Stack>
                                <Box className='scroll-container'>
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

                                        {/* <Box>
                                            <CustomCard className='mb-2 singleCard' cardType={'AECard'} />
                                        </Box>
                                        <Box>
                                            <CustomCard className='mb-2 singleCard' cardType={'AECard'} />
                                        </Box>
                                        <Box>
                                            <CustomCard className='mb-2 singleCard' cardType={'AECard'} />
                                        </Box> */}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </>
            }



            <Box className={'d-flex justify-content-between py-2 border-top-bottom '}>
                <Typography className='second-title-bold-text align-self-center pl-3'>Contract List under project</Typography>
                <CustomToggleButton className='pr-2'></CustomToggleButton>
            </Box>

            <Box>
                <GridView checkboxSelection rows={contractListUnderProject.rows} columns={contractListUnderProject.columns} slots={{ toolbar: GridToolbar }} dialogType='add-contract-by-project' sdIcon={'CreateIcon'} />
            </Box>


        </>
    )
}

export default ContractDetail