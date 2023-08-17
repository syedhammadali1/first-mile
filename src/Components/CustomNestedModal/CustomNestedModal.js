import React from 'react'
import { ButtonGroup, Box } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CustomFormCard from '../CustomFormCard/CustomFormCard';
import { CustomDialogTitle } from '../CustomDialogTitle/CustomDialogTitle';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { JCIV, JCVS } from '../../Utils/customFormErrorHandling';

function CustomNestedModal({ handleNestedModalClose, open, data, setInputValues = () => { }, inputValues = '', modalTitle = '', speedDialBtn = false, title = '', isEdit = false, validationSchema, initialValues }) {

  const handleSubmit = (values) => {
    console.log(values);
    handleNestedModalClose();
  };

  return (
    <Dialog
      // onClose={handleNestedModalClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullScreen={false}
      maxWidth={'xl'}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >


        <Form>
          <CustomDialogTitle id="customized-dialog-title" onClose={handleNestedModalClose}>
            {modalTitle}
          </CustomDialogTitle>
          <DialogContent dividers>
            <Box className={'d-flex'}>
              <Box className={'mx-2'}>

                <CustomFormCard
                  customBoxClass='form-card-a pb-4'
                  title={title}
                  titleClass={'form-card-title'}
                  data={data}
                  setInputValues={setInputValues}
                  inputValues={inputValues}
                  speedDialBtn={speedDialBtn}
                />
              </Box>
            </Box>
          </DialogContent>
          {isEdit &&
            <DialogActions className='d-flex justify-content-between px-3'>

              <Button autoFocus variant="outlined" color='error' size={'medium'}>
                DELETE
              </Button>
              <Box>
                <Button autoFocus onClick={handleNestedModalClose} variant="text" size={'medium'}  >
                  cancel
                </Button>
                <Button variant="contained" size={'medium'} type="submit">Save</Button>
              </Box>
            </DialogActions>
          }

          {!isEdit &&



            <DialogActions>
              <Button autoFocus onClick={handleNestedModalClose} variant="text" size={'medium'} >
                cancel
              </Button>
              <Button variant="contained" size={'medium'} type="submit" >Save</Button>
            </DialogActions>
          }

        </Form>


      </Formik>

    </Dialog>
  )
}

export default CustomNestedModal