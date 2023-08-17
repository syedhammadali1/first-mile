import React from 'react'
import { close, open } from '../../Redux/nestedFormDialogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { closeDualNested } from '../../Redux/dualNestedFormDialogSlice';
import CustomNestedModal from '../CustomNestedModal/CustomNestedModal';
import { aeInfoFormCardData, jCInfoFormCardData, paymentInfoFormCardData, responsibleAEInfoFormCardData } from '../../Utils/dummyData';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AEIV, AEVS, JCIV, JCVS, PIIV, PIVS, RAEIV, RAEVS } from '../../Utils/customFormErrorHandling';


function CustomNestedAndDualNestedDialog() {
    const dialogType = useSelector((state) => state.nestedFormDialog.formType)
    const dualNestedDialogType = useSelector((state) => state.dualNestedFormDialog.formType)

    const dispatch = useDispatch();


    const handleNestedModalCloseWithRedux = () => {
        dispatch(close())
    }

    const handleDualNestedModalCloseWithRedux = () => {
        dispatch(closeDualNested());
    }

    return (
        <>
            {/*JC nested modal Add */}
            {
                dialogType == 'add-juristic-contract' &&
                
                <>
                    <CustomNestedModal handleNestedModalClose={handleNestedModalCloseWithRedux} open={true} data={jCInfoFormCardData}
                        title={'Juristic contract Information'}
                        modalTitle={'Add Juristic contract'}
                        validationSchema={JCVS}
                        initialValues={JCIV}
                    ></CustomNestedModal>
                </>
            }

            {/*JC nested modal Edit */}
            {
                dialogType == 'edit-juristic-contract' &&
                <>
                    <CustomNestedModal handleNestedModalClose={handleNestedModalCloseWithRedux} open={true} data={jCInfoFormCardData}
                        title={'Juristic contract Information'}

                        modalTitle={'Edit Juristic contract'}
                        isEdit={true}
                        validationSchema={JCVS}
                        initialValues={JCIV}
                    ></CustomNestedModal>
                </>
            }

            {/*payment nested modal add */}
            {
                dialogType == 'add-payment-detail' &&
                <>
                    <CustomNestedModal handleNestedModalClose={handleNestedModalCloseWithRedux} open={true} data={paymentInfoFormCardData}
                        title={'Payment Information'}

                        modalTitle={'Add Payment Detail'}
                        validationSchema={PIVS}
                        initialValues={PIIV}
                    ></CustomNestedModal>
                </>
            }

            {/*payment nested modal Edit */}
            {
                dialogType == 'edit-payment-detail' &&
                <>
                    <CustomNestedModal handleNestedModalClose={handleNestedModalCloseWithRedux} open={true} data={paymentInfoFormCardData}
                        title={'Payment Information'}

                        modalTitle={'Edit Payment Detail'}
                        isEdit={true}
                        validationSchema={PIVS}
                        initialValues={PIIV}
                    ></CustomNestedModal>
                </>
            }

            {/* responsible ae nested modal add */}
            {
                dialogType == 'add-responsible-ae' &&
                <>
                    <CustomNestedModal handleNestedModalClose={handleNestedModalCloseWithRedux} open={true} data={responsibleAEInfoFormCardData}
                        title={'Responsible AE Information'}

                        modalTitle={'Add Responsible AE'}
                        speedDialBtn={true}
                        validationSchema={RAEVS}
                        initialValues={RAEIV}
                    ></CustomNestedModal>
                </>
            }

            {/*responsible ae nested modal Edit */}

            {
                dialogType == 'edit-responsible-ae' &&
                <>
                    <CustomNestedModal handleNestedModalClose={handleNestedModalCloseWithRedux} open={true} data={responsibleAEInfoFormCardData}
                        title={'Responsible AE Information'}
                        modalTitle={'Edit Responsible AE'}
                        speedDialBtn={true}
                        isEdit={true}
                        validationSchema={RAEVS}
                        initialValues={RAEIV}

                    ></CustomNestedModal>
                </>
            }

            {/*ae nested modal Edit */}
            {
                dualNestedDialogType == 'edit-ae' &&
                <CustomNestedModal handleNestedModalClose={handleDualNestedModalCloseWithRedux} open={true} data={aeInfoFormCardData}
                    title={'AE Information'}

                    modalTitle={'Edit AE'}
                    isEdit={true}
                    validationSchema={AEVS}
                    initialValues={AEIV}

                ></CustomNestedModal>
            }

            {/*ae nested modal add */}

            {
                dualNestedDialogType == 'create-ae' &&
                <CustomNestedModal handleNestedModalClose={handleDualNestedModalCloseWithRedux} open={true} data={aeInfoFormCardData}
                    title={'AE Information'}
                    modalTitle={'Create AE'}
                    validationSchema={AEVS}
                    initialValues={AEIV}
                ></CustomNestedModal>
            }
        </>
    )
}

export default CustomNestedAndDualNestedDialog