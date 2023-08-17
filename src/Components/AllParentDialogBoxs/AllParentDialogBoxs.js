import { Box, Button, Dialog, DialogActions, DialogContent, FormControl, InputLabel, MenuItem, Select, SpeedDial, SpeedDialIcon, Stack } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CustomDialogTitle } from '../CustomDialogTitle/CustomDialogTitle'
import CustomFormCard, { CustomAttachmentCard, CustomFormCardB, CustomFormMapCard } from '../CustomFormCard/CustomFormCard'
import { BuildingListData, addressFormCardData, buildingInfoFormCardData, buildingSpecificDetailFormCardData, contractInfoFormCardData, locationFormCardData, operatingTimeFormCardData, projectInfoFormCardData, specificDetailFormCardData } from '../../Utils/dummyData'
import { hideParentDialog } from '../../Redux/parentDialogSlice'
import { open } from '../../Redux/nestedFormDialogSlice'
import { CustomAvatarChip, CustomColouredAvatarChip } from '../CustomChip/CustomChip'
import DeleteIcon from '@mui/icons-material/Delete';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CreateIcon from '@mui/icons-material/Create';
import { CardWithImage } from '../CustomCard/CustomCard'
import { addBuildingByProjectIV, addBuildingByProjectVS, addContractByProjectIV, addContractByProjectVS, contractInfoIV, contractInfoVS, projectInfoIV, projectInfoVS } from '../../Utils/customFormErrorHandling'
import { Form, Formik } from 'formik'
import * as Yup from 'yup';



function AllParentDialogBoxs() {
    const parentDialog = useSelector((state) => state.parentDialog.dialogType)
    const projectInfo = useSelector((state) => state.projectInfo);
    const [showParentDialog2, setShowParentDialog2] = useState(false)

    const dispatch = useDispatch();

    const handleParentDialogHide = () => {
        dispatch(hideParentDialog())
    }

    const handleNestedModalOpen2 = (cardType) => {
        dispatch(open(cardType))
    }

    const handleSubmit = (values) => {
        // console.log(values);
        handleParentDialogHide();
        setShowParentDialog2(false)
    };

    return (
        <>
            {/* add project dialog */}

            {
                parentDialog == 'add-project' &&
                <Dialog
                    aria-labelledby="customized-dialog-title"
                    open={true}
                    fullScreen={false}
                    maxWidth={'xl'}
                >
                    <Formik
                        initialValues={projectInfoIV}
                        validationSchema={projectInfoVS}
                        onSubmit={handleSubmit}
                    >

                                <Form>
                                    <CustomDialogTitle id="customized-dialog-title" onClose={handleParentDialogHide}>
                                        Add Project
                                    </CustomDialogTitle>
                                    <DialogContent dividers>
                                        <Box className={'d-flex'}>
                                            <Box className={'mx-2'}>
                                                <CustomFormCard
                                                    customBoxClass='form-card-a pb-4'
                                                    title={'Project Information *'}
                                                    titleClass={'form-card-title'}
                                                    data={projectInfoFormCardData}
                                                // validationSchema={projectInfoVS}
                                                // initialValues={projectInfoIV}
                                                />
                                            </Box>
                                            <Box className={'mx-2'}>
                                                <CustomFormCard
                                                    customBoxClass='form-card-a pb-3'
                                                    title={'Address'}
                                                    titleClass={'form-card-title'}
                                                    data={addressFormCardData}
                                                />
                                            </Box>
                                            <Box>

                                                <Box className={'mx-2 mb-2'}>
                                                    <CustomFormCardB
                                                        customBoxClass='form-card-b'
                                                        title={'Juristic contact'}
                                                        titleClass={'form-card-title'}
                                                        setOpenDialog={() => handleNestedModalOpen2('add-juristic-contract')}
                                                    />
                                                </Box>
                                                <Box className={'mx-2 mb-2'}>
                                                    <CustomFormCardB
                                                        customBoxClass='form-card-b'
                                                        title={'Payment detail'}
                                                        titleClass={'form-card-title'}
                                                        setOpenDialog={() => handleNestedModalOpen2('add-payment-detail')}
                                                    />
                                                </Box>
                                                <Box className={'mx-2'}>
                                                    <CustomFormCardB
                                                        customBoxClass='form-card-b'
                                                        title={'AE'}
                                                        titleClass={'form-card-title'}
                                                        setOpenDialog={() => handleNestedModalOpen2('add-responsible-ae')}
                                                    />
                                                </Box>
                                            </Box>

                                            <Box>
                                                <Box>
                                                    <CustomFormMapCard
                                                        customBoxClass='form-card-a pb-4'
                                                        title={'Location'}
                                                        titleClass={'form-card-title'}
                                                        data={locationFormCardData}

                                                    />
                                                </Box>
                                                <Box>
                                                    <CustomFormCard
                                                        customBoxClass='form-card-a pb-4 mt-2'
                                                        title={'Operating time'}
                                                        titleClass={'form-card-title'}
                                                        data={operatingTimeFormCardData}
                                                    />
                                                </Box>

                                            </Box>


                                        </Box>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleParentDialogHide} variant="text" size={'medium'} >
                                            cancel
                                        </Button>
                                        <Button variant="contained" size={'medium'} type='submit'>Save</Button>
                                    </DialogActions>
                                </Form>

                    </Formik>
                </Dialog>
            }

            {/* edit project dialog */}

            {
                parentDialog == 'edit-project' &&
                <Dialog
                    aria-labelledby="customized-dialog-title"
                    open={true}
                    fullScreen={false}
                    maxWidth={'xl'}
                >
                    <Formik
                        initialValues={projectInfoIV}
                        validationSchema={projectInfoVS}
                        onSubmit={handleSubmit}
                    >



                                <Form>
                                    <CustomDialogTitle id="customized-dialog-title" onClose={handleParentDialogHide}>
                                        Edit Project
                                    </CustomDialogTitle>
                                    <DialogContent dividers>
                                        <Box className={'d-flex'}>
                                            <Box className={'mx-2'}>
                                                <CustomFormCard
                                                    customBoxClass='form-card-a pb-4'
                                                    title={'Project Information *'}
                                                    titleClass={'form-card-title'}
                                                    data={projectInfoFormCardData}
                                                    setInputValues={() => { }}
                                                    inputValues={''}
                                                />
                                            </Box>
                                            <Box className={'mx-2'}>
                                                <CustomFormCard
                                                    customBoxClass='form-card-a pb-3'
                                                    title={'Address'}
                                                    titleClass={'form-card-title'}
                                                    data={addressFormCardData}
                                                    setInputValues={() => { }}
                                                    inputValues={''}
                                                />
                                            </Box>
                                            <Box>

                                                <Box className={'mx-2 mb-3'}>
                                                    <CustomFormCardB
                                                        customBoxClass='form-card-b'
                                                        title={'Juristic contact'}
                                                        titleClass={'form-card-title'}
                                                        setOpenDialog={() => handleNestedModalOpen2('add-juristic-contract')}
                                                    >
                                                        {projectInfo?.juristicContact && projectInfo?.juristicContact.map((singleContact) => {
                                                            return (
                                                                <Box className={'my-1'}>
                                                                    <CustomAvatarChip value={singleContact} modalCardType='contact' chipStyle={'bg-lightGrey'} />
                                                                    <Box component="span" m="{1}">
                                                                        <StarBorderIcon className='text-darkGrey ' />
                                                                        <CreateIcon className='text-darkGrey' />
                                                                        <DeleteIcon className='text-darkGrey' />
                                                                    </Box>
                                                                </Box>
                                                            )
                                                        })}


                                                    </CustomFormCardB>
                                                </Box>
                                                <Box className={'mx-2 mb-3'}>
                                                    <CustomFormCardB
                                                        customBoxClass='form-card-b'
                                                        title={'Payment detail'}
                                                        titleClass={'form-card-title'}
                                                        setOpenDialog={() => handleNestedModalOpen2('add-payment-detail')}
                                                    >
                                                        {projectInfo?.paymentDetail && projectInfo?.paymentDetail.map((singleDetail) => {
                                                            return (
                                                                <Box className={'my-1'}>
                                                                    <CustomColouredAvatarChip value={singleDetail} modalCardType='payment-card-modal' chipStyle={'bg-lightGrey'} chipColor='blue' />
                                                                    <Box component="span" m="{1}">
                                                                        <StarBorderIcon className='text-darkGrey ' />
                                                                        <CreateIcon className='text-darkGrey' />
                                                                        <DeleteIcon className='text-darkGrey' />
                                                                    </Box>
                                                                </Box>
                                                            )
                                                        })}
                                                    </CustomFormCardB>
                                                </Box>
                                                <Box className={'mx-2'}>
                                                    <CustomFormCardB
                                                        customBoxClass='form-card-b'
                                                        title={'AE'}
                                                        titleClass={'form-card-title'}
                                                        setOpenDialog={() => handleNestedModalOpen2('add-responsible-ae')}
                                                    >
                                                        {projectInfo?.responsibleAE && projectInfo?.responsibleAE.map((singleDetail) => {
                                                            return (
                                                                <Box className={'my-1'}>
                                                                    <CustomAvatarChip value={singleDetail.AE} modalCardType='AECard' chipStyle={'bg-lightGrey'} />
                                                                    <Box component="span" m="{1}">
                                                                        <StarBorderIcon className='text-darkGrey ' />
                                                                        <CreateIcon className='text-darkGrey' />
                                                                        <DeleteIcon className='text-darkGrey' />
                                                                    </Box>
                                                                </Box>
                                                            )
                                                        })}

                                                    </CustomFormCardB>
                                                </Box>
                                            </Box>

                                            <Box>
                                                <Box>
                                                    <CustomFormMapCard
                                                        customBoxClass='form-card-a pb-4'
                                                        title={'Location'}
                                                        titleClass={'form-card-title'}
                                                        data={locationFormCardData}
                                                    // setInputValues={setOperatingTime}
                                                    // inputValues={operatingTime}
                                                    />
                                                </Box>
                                                <Box>
                                                    <CustomFormCard
                                                        customBoxClass='form-card-a pb-4 mt-2'
                                                        title={'Operating time'}
                                                        titleClass={'form-card-title'}
                                                        data={operatingTimeFormCardData}
                                                    // setInputValues={setOperatingTime}
                                                    // inputValues={operatingTime}
                                                    />
                                                </Box>

                                            </Box>


                                        </Box>
                                    </DialogContent>
                                    <DialogActions className='d-flex justify-content-between px-3'>

                                        <Button autoFocus variant="outlined" color='error' size={'medium'}>
                                            DELETE
                                        </Button>
                                        <Box>
                                            <Button autoFocus onClick={handleParentDialogHide} variant="text" size={'medium'} >
                                                cancel
                                            </Button>
                                            <Button variant="contained" size={'medium'} type='submit'>Save</Button>
                                        </Box>
                                    </DialogActions>
                                </Form>


                    </Formik>

                </Dialog>
            }

            {/* edit building list under project */}

            {
                parentDialog == 'edit-building-list' &&
                <Dialog
                    aria-labelledby="customized-dialog-title"
                    open={true}
                    fullScreen={false}
                    maxWidth={'xl'}
                >
                    <CustomDialogTitle id="customized-dialog-title" onClose={handleParentDialogHide}>
                        Edit Building List under project
                    </CustomDialogTitle>
                    <DialogContent dividers>
                        <Box className={'d-flex edit-building-list'}>
                            <Box className={'d-flex align-items-center flex-column mx-2 sec-1 position-relative'} sx={{ width: '372px' }}>
                                <Stack className={`form-card-title w-100 p-3`}>Buildings</Stack>

                                <Box>


                                    <FormControl variant="standard" className='' sx={{ minWidth: 340 }}>
                                        <InputLabel id="demo-simple-select-standard-label">Select building</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"

                                            label="Age"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box>
                                    <CardWithImage data={{ image: 'istockphoto.jpg', details: BuildingListData, title: 'Tower A' }} className={'mx-2 my-4'} />
                                </Box>
                                <Box>
                                    <Button variant="contained" size={'medium'}>ADD</Button>
                                </Box>
                                <Box>
                                    <SpeedDial
                                        ariaLabel="SpeedDial basic example"
                                        sx={{ position: 'absolute', bottom: '1rem', right: '1rem' }}
                                        icon={<SpeedDialIcon />}
                                        onClick={() => {
                                            setShowParentDialog2(true)
                                        }}
                                    >
                                    </SpeedDial>
                                </Box>


                            </Box>

                            <Box className={'mx-2 sec-2'} sx={{ width: '800px' }}>

                                <Stack spacing={2} className={`form-card-title w-100 p-3`} >Building List </Stack>

                                <Box className={`box-section `} >
                                    <Box className={'mx-2 d-inline-block mt-3'}>
                                        <CardWithImage data={{ image: 'istockphoto.jpg', details: BuildingListData, title: 'Tower A' }} className={'mx-2'} clearIcon={true} />
                                    </Box>
                                    <Box className={'mx-2 d-inline-block mt-3'}>
                                        <CardWithImage data={{ image: 'istockphoto.jpg', details: BuildingListData, title: 'Tower A' }} className={'mx-2 '} clearIcon={true} />
                                    </Box>
                                    <Box className={'mx-2 d-inline-block mt-3'}>
                                        <CardWithImage data={{ image: 'istockphoto.jpg', details: BuildingListData, title: 'Tower A' }} className={'mx-2 '} clearIcon={true} />
                                    </Box>
                                    <Box className={'mx-2 d-inline-block mt-3'}>
                                        <CardWithImage data={{ image: 'istockphoto.jpg', details: BuildingListData, title: 'Tower A' }} className={'mx-2 '} clearIcon={true} />
                                    </Box>
                                    <Box className={'mx-2 d-inline-block mt-3'}>
                                        <CardWithImage data={{ image: 'istockphoto.jpg', details: BuildingListData, title: 'Tower A' }} className={'mx-2 '} clearIcon={true} />
                                    </Box>
                                    <Box className={'mx-2 d-inline-block mt-3'}>
                                        <CardWithImage data={{ image: 'istockphoto.jpg', details: BuildingListData, title: 'Tower A' }} className={'mx-2 '} clearIcon={true} />
                                    </Box>

                                </Box>
                            </Box>

                        </Box>
                    </DialogContent>
                    {/* <DialogActions>
                        <Button autoFocus onClick={handleParentDialogHide} variant="text" size={'medium'} >
                            cancel
                        </Button>
                        <Button variant="contained" size={'medium'} onClick={handleParentDialogHide}>Save</Button>
                    </DialogActions> */}

                    <DialogActions className='d-flex justify-content-between px-3'>

                        <Button autoFocus variant="outlined" color='error' size={'medium'}>
                            DELETE
                        </Button>
                        <Box>
                            <Button autoFocus onClick={handleParentDialogHide} variant="text" size={'medium'} >
                                cancel
                            </Button>
                            <Button variant="contained" size={'medium'} onClick={handleParentDialogHide}>Save</Button>
                        </Box>
                    </DialogActions>
                </Dialog>

            }


            {/* add building by project */}

            <Dialog
                aria-labelledby="customized-dialog-title"
                open={showParentDialog2}
                fullScreen={false}
                maxWidth={'xl'}
            >
                <Formik
                    initialValues={addBuildingByProjectIV}
                    validationSchema={addBuildingByProjectVS}
                    onSubmit={handleSubmit}
                >



                            <Form>
                                <CustomDialogTitle id="customized-dialog-title" onClose={() => { setShowParentDialog2(false) }}>
                                    Add Building (By Project)
                                </CustomDialogTitle>
                                <DialogContent dividers>
                                    <Box className={'d-flex'}>
                                        <Box className={'mx-2'}>
                                            <CustomFormCard
                                                customBoxClass='form-card-a pb-4'
                                                title={'Building Information *'}
                                                titleClass={'form-card-title'}
                                                data={buildingInfoFormCardData}

                                            />
                                        </Box>
                                        <Box>
                                            <Box className={'mx-2'}>
                                                <CustomFormCard
                                                    customBoxClass='form-card-a pb-4'
                                                    title={'Specific detail'}
                                                    titleClass={'form-card-title'}
                                                    data={buildingSpecificDetailFormCardData}

                                                />
                                            </Box>

                                            <Box className={'mx-2 my-3'}>
                                                <CustomFormCardB
                                                    customBoxClass='form-card-b'
                                                    title={'Building Contact'}
                                                    titleClass={'form-card-title'}
                                                    setOpenDialog={() => handleNestedModalOpen2('add-juristic-contract')}
                                                >
                                                    {projectInfo?.juristicContact && projectInfo?.juristicContact.map((singleContact) => {
                                                        return (
                                                            <Box className={'my-1'}>
                                                                <CustomAvatarChip value={singleContact} modalCardType='contact' chipStyle={'bg-lightGrey'} />
                                                                <Box component="span" m="{1}">
                                                                    <StarBorderIcon className='text-darkGrey ' />
                                                                    <CreateIcon className='text-darkGrey' />
                                                                    <DeleteIcon className='text-darkGrey' />
                                                                </Box>
                                                            </Box>
                                                        )
                                                    })}


                                                </CustomFormCardB>
                                            </Box>

                                        </Box>


                                        <Box className={'mx-2'}>
                                            <CustomFormCard
                                                customBoxClass='form-card-a pb-3'
                                                title={'Address'}
                                                titleClass={'form-card-title'}
                                                data={addressFormCardData}
                                            />
                                        </Box>

                                        <Box>
                                            <CustomFormMapCard
                                                customBoxClass='form-card-a pb-4 h-570'
                                                title={'Location'}
                                                titleClass={'form-card-title'}
                                                data={locationFormCardData}
                                                inputBoxStyle='mt-300'
                                            />
                                        </Box>




                                    </Box>
                                </DialogContent>
                                <DialogActions>
                                    <Button autoFocus onClick={() => { setShowParentDialog2(false) }} variant="text" size={'medium'} >
                                        cancel
                                    </Button>
                                    {/* <Button variant="contained" size={'medium'} onClick={() => { setShowParentDialog2(false) }} type='submit' >Save</Button> */}
                                    <Button variant="contained" size={'medium'} type='submit'>Save</Button>
                                </DialogActions>
                            </Form>



                </Formik>
            </Dialog>


            {/* add contract*/}
            {
                parentDialog == 'add-contract' &&
                <Dialog
                    aria-labelledby="customized-dialog-title"
                    open={true}
                    fullScreen={false}
                    maxWidth={'xl'}
                >
                    <Formik
                        initialValues={contractInfoIV}
                        validationSchema={contractInfoVS}
                        onSubmit={handleSubmit}
                    >



                                <Form>
                                    <CustomDialogTitle id="customized-dialog-title" onClose={handleParentDialogHide}>
                                        Add Contract
                                    </CustomDialogTitle>
                                    <DialogContent dividers>
                                        <Box className={'d-flex'}>
                                            <Box className={'mx-2'}>
                                                <CustomFormCard
                                                    customBoxClass='form-card-a pb-4'
                                                    title={'Contract Information *'}
                                                    titleClass={'form-card-title'}
                                                    data={contractInfoFormCardData}
                                                />
                                            </Box>
                                            <Box className={'mx-2'}>
                                                <Box>
                                                    <CustomFormCard
                                                        customBoxClass='form-card-a pb-3'
                                                        title={'Specific detail'}
                                                        titleClass={'form-card-title'}
                                                        data={specificDetailFormCardData}
                                                    />
                                                </Box>
                                                <Box>
                                                    <CustomFormCardB
                                                        customBoxClass='form-card-b mt-2'
                                                        title={'AE (Caretaker)'}
                                                        titleClass={'form-card-title'}
                                                        setOpenDialog={() => handleNestedModalOpen2('add-responsible-ae')}
                                                    />
                                                </Box>


                                            </Box>

                                            <Box className={'mx-2'}>
                                                <CustomFormCard
                                                    customBoxClass='form-card-a pb-3'
                                                    title={'Address'}
                                                    titleClass={'form-card-title'}
                                                    data={addressFormCardData}
                                                />
                                            </Box>

                                            <Box>

                                                <Box className={'mx-2 mb-3'}>
                                                    <CustomFormCardB
                                                        customBoxClass='form-card-b'
                                                        title={'Juristic contact'}
                                                        titleClass={'form-card-title'}
                                                        setOpenDialog={() => handleNestedModalOpen2('add-juristic-contract')}
                                                    />
                                                </Box>
                                                <Box className={'mx-2 mb-3'}>
                                                    <CustomFormCardB
                                                        customBoxClass='form-card-b'
                                                        title={'Payment detail'}
                                                        titleClass={'form-card-title'}
                                                        setOpenDialog={() => handleNestedModalOpen2('add-payment-detail')}
                                                    />
                                                </Box>
                                                <Box className={'mx-2'}>
                                                    <CustomAttachmentCard
                                                        customBoxClass='form-card-b'
                                                        title={'Attachment'}
                                                        titleClass={'form-card-title'}
                                                    />
                                                </Box>
                                            </Box>

                                        </Box>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleParentDialogHide} variant="text" size={'medium'} >
                                            cancel
                                        </Button>
                                        <Button variant="contained" size={'medium'} type='submit'>Save</Button>
                                    </DialogActions>
                                </Form>


                    </Formik>
                </Dialog>
            }

            {/* edit contract */}

            {
                parentDialog == 'edit-contract' &&
                <Dialog
                    aria-labelledby="customized-dialog-title"
                    open={true}
                    fullScreen={false}
                    maxWidth={'xl'}
                >
                    <Formik
                        initialValues={contractInfoIV}
                        validationSchema={contractInfoVS}
                        onSubmit={handleSubmit}
                    >



                                <Form>
                                    <CustomDialogTitle id="customized-dialog-title" onClose={handleParentDialogHide}>
                                        Edit Contract
                                    </CustomDialogTitle>
                                    <DialogContent dividers>
                                        <Box className={'d-flex'}>
                                            <Box className={'mx-2'}>
                                                <CustomFormCard
                                                    customBoxClass='form-card-a pb-4'
                                                    title={'Contract Information *'}
                                                    titleClass={'form-card-title'}
                                                    data={contractInfoFormCardData}

                                                />
                                            </Box>
                                            <Box className={'mx-2'}>
                                                <Box>
                                                    <CustomFormCard
                                                        customBoxClass='form-card-a pb-3'
                                                        title={'Specific detail'}
                                                        titleClass={'form-card-title'}
                                                        data={specificDetailFormCardData}
                                                    />
                                                </Box>
                                                <Box>
                                                    <CustomFormCardB
                                                        customBoxClass='form-card-b'
                                                        title={'AE'}
                                                        titleClass={'form-card-title'}
                                                        setOpenDialog={() => handleNestedModalOpen2('add-responsible-ae')}
                                                    >
                                                        {projectInfo?.responsibleAE && projectInfo?.responsibleAE.map((singleDetail) => {
                                                            return (
                                                                <Box className={'my-1'}>
                                                                    <CustomAvatarChip value={singleDetail.AE} modalCardType='AECard' chipStyle={'bg-lightGrey'} />
                                                                    <Box component="span" m="{1}">
                                                                        <StarBorderIcon className='text-darkGrey ' />
                                                                        <CreateIcon className='text-darkGrey' />
                                                                        <DeleteIcon className='text-darkGrey' />
                                                                    </Box>
                                                                </Box>
                                                            )
                                                        })}

                                                    </CustomFormCardB>
                                                </Box>


                                            </Box>

                                            <Box className={'mx-2'}>
                                                <CustomFormCard
                                                    customBoxClass='form-card-a pb-3'
                                                    title={'Address'}
                                                    titleClass={'form-card-title'}
                                                    data={addressFormCardData}

                                                />
                                            </Box>

                                            <Box>

                                                <Box className={'mx-2 mb-3'}>
                                                    <CustomFormCardB
                                                        customBoxClass='form-card-b'
                                                        title={'Juristic Contact'}
                                                        titleClass={'form-card-title'}
                                                        setOpenDialog={() => handleNestedModalOpen2('add-juristic-contract')}
                                                    >
                                                        {projectInfo?.juristicContact && projectInfo?.juristicContact.map((singleContact) => {
                                                            return (
                                                                <Box className={'my-1'}>
                                                                    <CustomAvatarChip value={singleContact} modalCardType='contact' chipStyle={'bg-lightGrey'} />
                                                                    <Box component="span" m="{1}">
                                                                        <StarBorderIcon className='text-darkGrey ' />
                                                                        <CreateIcon className='text-darkGrey' />
                                                                        <DeleteIcon className='text-darkGrey' />
                                                                    </Box>
                                                                </Box>
                                                            )
                                                        })}


                                                    </CustomFormCardB>
                                                </Box>
                                                <Box className={'mx-2 mb-3'}>
                                                    <CustomFormCardB
                                                        customBoxClass='form-card-b'
                                                        title={'Payment detail'}
                                                        titleClass={'form-card-title'}
                                                        setOpenDialog={() => handleNestedModalOpen2('add-payment-detail')}
                                                    >
                                                        {projectInfo?.paymentDetail && projectInfo?.paymentDetail.map((singleDetail) => {
                                                            return (
                                                                <Box className={'my-1'}>
                                                                    <CustomColouredAvatarChip value={singleDetail} modalCardType='payment-card-modal' chipStyle={'bg-lightGrey'} chipColor='green' />
                                                                    <Box component="span" m="{1}">
                                                                        <StarBorderIcon className='text-darkGrey ' />
                                                                        <CreateIcon className='text-darkGrey' />
                                                                        <DeleteIcon className='text-darkGrey' />
                                                                    </Box>
                                                                </Box>
                                                            )
                                                        })}
                                                    </CustomFormCardB>
                                                </Box>
                                                <Box className={'mx-2'}>
                                                    <CustomAttachmentCard
                                                        customBoxClass='form-card-b'
                                                        title={'Attachment'}
                                                        titleClass={'form-card-title'}
                                                    />
                                                </Box>
                                            </Box>

                                        </Box>
                                    </DialogContent>
                                    <DialogActions className='d-flex justify-content-between px-3'>

                                        <Button autoFocus variant="outlined" color='error' size={'medium'}>
                                            DELETE
                                        </Button>
                                        <Box>
                                            <Button autoFocus onClick={handleParentDialogHide} variant="text" size={'medium'} >
                                                cancel
                                            </Button>
                                            <Button variant="contained" size={'medium'} type='submit'>Save</Button>
                                        </Box>
                                    </DialogActions>
                                </Form>


                    </Formik>
                </Dialog>
            }

            {/* add contract by project  */}
            {
                parentDialog == 'add-contract-by-project' &&
                <Dialog
                    aria-labelledby="customized-dialog-title"
                    open={true}
                    fullScreen={false}
                    maxWidth={'xl'}
                >
                    <Formik
                        initialValues={addContractByProjectIV}
                        validationSchema={addContractByProjectVS}
                        onSubmit={handleSubmit}
                    >




                                <Form>
                                    <CustomDialogTitle id="customized-dialog-title" onClose={handleParentDialogHide}>
                                        Add Contract (By Project)
                                    </CustomDialogTitle>
                                    <DialogContent dividers>
                                        <Box className={'d-flex'}>
                                            <Box className={'mx-2'}>
                                                <CustomFormCard
                                                    customBoxClass='form-card-a pb-4'
                                                    title={'Contract Information *'}
                                                    titleClass={'form-card-title'}
                                                    data={contractInfoFormCardData}

                                                />
                                            </Box>
                                            <Box className={'mx-2'}>
                                                <Box>
                                                    <CustomFormCard
                                                        customBoxClass='form-card-a pb-3'
                                                        title={'Specific detail'}
                                                        titleClass={'form-card-title'}
                                                        data={specificDetailFormCardData}
                                                    />
                                                </Box>
                                                <Box>
                                                    <CustomFormCardB
                                                        customBoxClass='form-card-b'
                                                        title={'AE'}
                                                        titleClass={'form-card-title'}
                                                        setOpenDialog={() => handleNestedModalOpen2('add-responsible-ae')}
                                                    >
                                                        {projectInfo?.responsibleAE && projectInfo?.responsibleAE.map((singleDetail) => {
                                                            return (
                                                                <Box className={'my-1'}>
                                                                    <CustomAvatarChip value={singleDetail.AE} modalCardType='AECard' chipStyle={'bg-lightGrey'} />
                                                                    <Box component="span" m="{1}">
                                                                        <StarBorderIcon className='text-darkGrey ' />
                                                                        <CreateIcon className='text-darkGrey' />
                                                                        <DeleteIcon className='text-darkGrey' />
                                                                    </Box>
                                                                </Box>
                                                            )
                                                        })}

                                                    </CustomFormCardB>
                                                </Box>


                                            </Box>

                                            <Box className={'mx-2'}>
                                                <CustomFormCard
                                                    customBoxClass='form-card-a pb-3'
                                                    title={'Address'}
                                                    titleClass={'form-card-title'}
                                                    data={addressFormCardData}

                                                />
                                            </Box>

                                            <Box>

                                                <Box className={'mx-2 mb-3'}>
                                                    <CustomFormCardB
                                                        customBoxClass='form-card-b'
                                                        title={'Juristic Contact'}
                                                        titleClass={'form-card-title'}
                                                        setOpenDialog={() => handleNestedModalOpen2('add-juristic-contract')}
                                                    >
                                                        {projectInfo?.juristicContact && projectInfo?.juristicContact.map((singleContact) => {
                                                            return (
                                                                <Box className={'my-1'}>
                                                                    <CustomAvatarChip value={singleContact} modalCardType='contact' chipStyle={'bg-lightGrey'} />
                                                                    <Box component="span" m="{1}">
                                                                        <StarBorderIcon className='text-darkGrey ' />
                                                                        <CreateIcon className='text-darkGrey' />
                                                                        <DeleteIcon className='text-darkGrey' />
                                                                    </Box>
                                                                </Box>
                                                            )
                                                        })}


                                                    </CustomFormCardB>
                                                </Box>
                                                <Box className={'mx-2 mb-3'}>
                                                    <CustomFormCardB
                                                        customBoxClass='form-card-b'
                                                        title={'Payment detail'}
                                                        titleClass={'form-card-title'}
                                                        setOpenDialog={() => handleNestedModalOpen2('add-payment-detail')}
                                                    >
                                                        {projectInfo?.paymentDetail && projectInfo?.paymentDetail.map((singleDetail) => {
                                                            return (
                                                                <Box className={'my-1'}>
                                                                    <CustomColouredAvatarChip value={singleDetail} modalCardType='payment-card-modal' chipStyle={'bg-lightGrey'} chipColor='green' />
                                                                    <Box component="span" m="{1}">
                                                                        <StarBorderIcon className='text-darkGrey ' />
                                                                        <CreateIcon className='text-darkGrey' />
                                                                        <DeleteIcon className='text-darkGrey' />
                                                                    </Box>
                                                                </Box>
                                                            )
                                                        })}
                                                    </CustomFormCardB>
                                                </Box>
                                                <Box className={'mx-2'}>
                                                    <CustomAttachmentCard
                                                        customBoxClass='form-card-b'
                                                        title={'Attachment'}
                                                        titleClass={'form-card-title'}
                                                    />
                                                </Box>
                                            </Box>

                                        </Box>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleParentDialogHide} variant="text" size={'medium'} >
                                            cancel
                                        </Button>
                                        <Button variant="contained" size={'medium'} type='submit'>Save</Button>
                                    </DialogActions>
                                </Form>

                    </Formik>
                </Dialog>
            }

        </>
    )
}

export default AllParentDialogBoxs