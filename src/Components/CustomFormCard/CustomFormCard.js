import { Box, MenuItem, Select, Stack, TextField, InputLabel, FormControl } from '@mui/material'
import React, { useState, useRef } from 'react'
import './CustomFormCard.css';
import CustomSpeedDial from '../CustomSpeedDial/CustomSpeedDial';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import CustomRating from '../CustomRating/CustomRating';
import { SmallAECustomCard } from '../CustomCard/CustomCard';
import { openDualNested } from '../../Redux/dualNestedFormDialogSlice';
import { useDispatch } from 'react-redux';
import { PatternFormat } from 'react-number-format';
import { ErrorMessage, Field } from 'formik';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
function CustomFormCard({ customBoxClass, title, titleClass, data, inputValues, setInputValues = () => { }, speedDialBtn = false, map }) {
    // console.log(speedDialBtn, 'speedDialBtn');
    const handleAllInputFields = (event) => {
        setInputValues({ ...inputValues, [event.target.name]: event.target.value });
    }

    const handleTimeChange = (newTime) => {
        setInputValues({ ...inputValues, time: newTime.format('HH:mm') });
    }

    const handleDateChange = (newDate) => {
        setInputValues({ ...inputValues, date: newDate.format('MM DD YYYY') })
    }
    const dispatch = useDispatch();
    const handleOpen = (formType) => {
        dispatch(openDualNested(formType));
    }

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <Box className={`${customBoxClass} `} >
                    <Stack className={`${titleClass} p-3`}>{title}</Stack>
                    <Box className={'d-flex flex-column px-4'}>
                        {data.inputs && data.inputs.map((input) => {
                            // console.log(input);
                            if (input?.type == 'text') {
                                return (
                                    <>

                                            <Field
                                                as={TextField}
                                                label={input?.label}
                                                variant={input?.variant}
                                                disabled={input?.disabled}
                                                defaultValue={input?.defaultValue}
                                                size={input?.size}
                                                className='py-2'
                                                // onBlur={(e) => validateEmail(e)}
                                                name={input?.name} />
                                            <ErrorMessage name={input?.name} component="div" className='text-danger'/>


                                    </>
                                )
                            } else if (input?.type == 'phoneNumber') {
                                return (<>


                                            <Field name={input?.name} >
                                                {({ field, form }) => (
                                                    <PatternFormat
                                                        variant='standard'
                                                        customInput={TextField}
                                                        format="###-#######"
                                                        mask="_"
                                                        size={input?.size}
                                                        className='py-2'
                                                        {...field}
                                                        label={input?.label}
                                                    />
                                                )}
                                            </Field>
                                            <ErrorMessage name={input?.name} component="div" className='text-danger'/>
  

                                </>


                                )
                            } else if (input?.type == 'select') {
                                return (
                                    <FormControl variant={input.variant} className='py-2'>
                                        <InputLabel id="demo-simple-select-standard-label">{input.label}</InputLabel>

                                                <Field as={Select}
                                                    labelId="demo-simple-select-standard-label"
                                                    id="demo-simple-select-standard"
                                                    // onChange={handleAllInputFields}
                                                    label={input.label}
                                                    name={input?.name}
                                                    // defaultValue="" 
                                                // value={inputValues[input?.name]}

                                                >
                                                    {
                                                        input.menuItems.map((item) => {
                                                            return (
                                                                <MenuItem value={item.value}>{item.label}</MenuItem>
                                                            )
                                                        })
                                                    }
                                                </Field>
                                                <ErrorMessage name={input?.name} component="div" className='text-danger'/>
                                    </FormControl>
                                )
                            } else if (input.type == 'date') {
                                return (<>
                                    {/* <DatePicker
                                    label={input?.label}
                                    onChange={handleDateChange}
                                    className='my-2'
                                    format="DD-MM-YYYY"
                                /> */}
                                            <Field name={input?.name} >
                                                {({ field, form }) => (
                                                    <DatePicker
                                                        // {...field}
                                                        label={input?.label}
                                                        // value={field?.value}
                                                        onChange={(date) => form.setFieldValue(field.name, date)}
                                                        // onBlur={() => form.setFieldTouched(field.name, true)}
                                                        // renderInput={(params) => <TextField {...params} />}
                                                        className="my-2"
                                                        format="DD-MM-YYYY"
                                                    />
                                                )}
                                            </Field>
                                            <ErrorMessage name={input?.name} component="div" className='text-danger'/>


                                </>
                                )

                            } else if (input.type == 'time') {
                                return (
                                    <>

                                        {/* <TimePicker
                                            label={input?.label}
                                            value={input.value}
                                            // onChange={(date) => form.setFieldValue(field.name, date)}
                                            // onBlur={() => form.setFieldTouched(field.name, true)}
                                            // renderInput={(params) => <TextField {...params} />}
                                            className="my-2"
                                        /> */}

                                                <Field name={input?.name} >
                                                    {({ field, form }) => (
                                                        <TimePicker
                                                            label={input?.label}
                                                            // value={field.value}
                                                            onChange={(date) => form.setFieldValue(field.name, date)}
                                                            onBlur={() => form.setFieldTouched(field.name, true)}
                                                            renderInput={(params) => <TextField {...params} />}
                                                            className="my-2"
                                                        />
                                                    )}
                                                </Field>
                                                <ErrorMessage name={input?.name} component="div" className='text-danger'/>


                                    </>
                                )

                            } else if (input.type == 'rating') {
                                return (
                                    <>
                                        <Box className={'pt-2'}>

                                            <Stack>{input?.label}</Stack>
                                            <CustomRating
                                                size={input?.size}
                                            />
                                        </Box>
                                    </>
                                )
                            } else if (input.type == 'component') {
                                return <SmallAECustomCard></SmallAECustomCard>
                            }


                        })}
                        {
                            speedDialBtn &&
                            <SpeedDial
                                ariaLabel="SpeedDial basic example"
                                sx={{ alignItems: 'end' }}
                                icon={<SpeedDialIcon />}
                                FabProps={{ size: 'small' }}
                                onClick={() => handleOpen('create-ae')}
                            >
                            </SpeedDial>
                        }


                    </Box>
                </Box>
            </LocalizationProvider>
        </>
    )
}


export const CustomFormCardB = ({ children = '', customBoxClass, title, titleClass, data, setOpenDialog }) => {
    return (
        <>
            <Box className={`${customBoxClass} position-relative`} >
                <Stack className={`${titleClass} p-3`}>{title}</Stack>
                <Box className={'d-flex flex-column px-2 '}>
                    {children}

                    {/* <CustomSpeedDial style={{ position: 'absolute', bottom: '10px', right: '10px' }} size={'small'} /> */}

                    <SpeedDial
                        ariaLabel="SpeedDial basic example"
                        sx={{ position: 'absolute', bottom: '10px', right: '10px' }}
                        icon={<SpeedDialIcon />}
                        FabProps={{ size: 'small' }}
                        onClick={() => setOpenDialog(true)}
                    >

                    </SpeedDial>
                </Box>
            </Box>
        </>
    )
}


export const CustomFormMapCard = ({ customBoxClass, title, titleClass, data, inputValues, setInputValues = () => { }, speedDialBtn = false, map, inputBoxStyle }) => {
    const handleAllInputFields = (event) => {
        setInputValues({ ...inputValues, [event.target.name]: event.target.value });
    }

    return <Box className={`${customBoxClass} `} >
        <Stack className={`${titleClass} p-3`}>{title}</Stack>
        <Box className={'d-flex flex-column px-4'}>


            <Box>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387198.0686934273!2d-74.60353102261044!3d40.69632994818312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1689327765412!5m2!1sen!2s"
                    width='200'
                    height="150"
                    style={{ border: 0, borderRadius: 15, }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            </Box>
            <Box className={`d-flex ${inputBoxStyle}`}>
                {data.inputs.map((input) => {
                    return (
                        <TextField
                            label={input?.label}
                            variant={input?.variant}
                            disabled={input?.disabled}
                            defaultValue={input?.defaultValue}
                            size={input?.size}
                            className='pt-1'
                            onChange={handleAllInputFields}
                            name={input?.name}

                        />
                    )

                })}


            </Box>
        </Box>
    </Box>
}

export const CustomAttachmentCard = ({ customBoxClass, title, titleClass, data, }) => {
    const fileInputRef = useRef(null);

    const handleFileUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        // Handle the selected file here, e.g., upload it or process it.
        const selectedFile = event.target.files[0];
        console.log(selectedFile);
    };
    return (
        <>
            <Box className={`${customBoxClass} position-relative`} >
                <Stack className={`${titleClass} p-3`}>{title}</Stack>
                <Box className={'d-flex flex-column px-4 '}>


                    {/* <CustomSpeedDial style={{ position: 'absolute', bottom: '10px', right: '10px' }} size={'small'} /> */}
                    <input
                        accept="image/*"
                        style={{ display: "none" }}
                        id="icon-button-file"
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                    />
                    <label htmlFor="icon-button-file">
                        <SpeedDial
                            ariaLabel="SpeedDial basic example"
                            sx={{ position: 'absolute', bottom: '10px', right: '10px' }}
                            icon={<SpeedDialIcon />}
                            FabProps={{ size: 'small' }}
                            onClick={handleFileUploadClick}
                        >
                        </SpeedDial>
                    </label>

                </Box>
            </Box>
        </>
    )
}

export default CustomFormCard