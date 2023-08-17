import { Avatar, Chip, Typography } from '@mui/material'
import React from 'react'
import './CustomChip.css'
import CustomCardModal from '../CustomCardModal/CustomCardModal';
import { useDispatch, useSelector } from "react-redux";
import { openModal, close } from "../../Redux/cardModalSlice";
import { UtilService } from '../../Utils/util.service';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { setColor } from '../../Redux/paymentCardColorSlice';

export function CustomAvatarChip({ value = [], modalCardType = '', chipStyle }) {
    const dispatch = useDispatch();

    const handleCardModal = (cardType) => {
        console.log(cardType);
        dispatch(openModal(cardType))
    }

    return (
        <>
            <Chip
                avatar={<Avatar src={`${modalCardType == 'AECard' ? UtilService.addBaseUrl('/images/small-avatar.png') : ''}`} alt={value?.name} className={`avatar-style`} />}
                label={
                    <>
                        <div style={{ paddingTop: "8px", paddingLeft: "11px" }}>
                            <Typography variant='string' className='fs-12'>
                                {value?.name}
                            </Typography>
                            <br />
                            <Typography variant="caption" color="textSecondary" className='fs-10'>
                                {value?.phoneNumber1 ?? value?.position}
                            </Typography>
                        </div>
                    </>

                }
                variant="outlined"
                size='medium'
                className={`${chipStyle} chip-common-style lh-10`}
                onClick={() => { handleCardModal(modalCardType) }}
            />
        </>
    )
}

export function CustomColouredAvatarChip({ value = '', modalCardType = '',chipColor='' }) {

    const theme = createTheme({
        palette: {
            purple: {
                main: '#9844FF',
            },
            green:{
                main:'#17A925'
            },
            blue:{
                main:'#40B9DF'
            }
        },
    });


    const dispatch = useDispatch();

    const handleCardModal = (cardType) => {
        console.log(cardType);
        dispatch(openModal(cardType))
        dispatch(setColor(chipColor))
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <Chip
                    avatar={<Avatar src={UtilService.addBaseUrl(`/images/bank/small-${chipColor}-avatar.png`)} alt={value.accountName} />}
                    label={
                        <>
                            <div style={{ paddingTop: "8px", paddingLeft: "11px" }}>
                                <Typography variant='string' className='fs-12' >
                                    {value?.bankAccountNumber}
                                </Typography>
                                <br />
                                <Typography variant="caption" className='fs-10'>
                                    {value?.accountName}
                                </Typography>
                            </div>
                        </>

                    }
                    size='medium'
                    // color={`secondary`}
                    sx={{bgcolor:`${chipColor}.main`,color:'white'}}
                    className='chip-common-style  lh-10'
                    onClick={() => { handleCardModal(modalCardType) }}
                />
            </ThemeProvider>
        </>
    )
}

export function CustomChipSquare({ value }) {
    return (
        <Chip
            label={
                <>
                    <Typography variant='string' >
                        {value}
                    </Typography>
                </>

            }
            variant="outlined"
            size='medium'
            sx={{
                height: '32px',
                textAlign: 'left',
                boxShadow: '0px 1px 5px 0px #0000001F',
                lineHeight: "16px",
                marginLeft: "5px",
                borderRadius: "12px"
            }}



        />
    )
}

function CustomChip({ value }) {
    return (
        <Chip
            label={
                <>
                    <Typography variant='string' className='fs-12'>
                        {value[0]}
                    </Typography>
                    <br />
                    <Typography variant="caption" color="textSecondary" className='fs-10'>
                        {value[1]}
                    </Typography>
                </>
            }
            variant="outlined"
            size='medium'

            sx={{
                paddingTop: '6px',
            }}

            className='chip-common-style lh-10'

        />


    )
}





export default CustomChip