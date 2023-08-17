import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import CustomChip, { CustomAvatarChip, CustomColouredAvatarChip } from '../CustomChip/CustomChip';
import FolderIcon from '@mui/icons-material/Folder';

import './CustomChipCard.css'

function CustomChipCard({ title, dataType }) {
    const projectInfo = useSelector((state) => state.projectInfo);

    return (
        <>
            <Box>
                <Typography className='card-title my-2'> {title} </Typography>
                <Box className='chipBoxBorder'>
                    {dataType == 'JC' && projectInfo?.juristicContact && projectInfo?.juristicContact.map((singleDetail) => {
                        return (
                            <Box className={'my-2'}>
                                <CustomAvatarChip value={singleDetail} chipStyle={'bg-lightGrey'} modalCardType={'contact'} />
                            </Box>
                        )
                    })
                    }

                    {dataType == 'payment-detail' && projectInfo?.paymentDetail && projectInfo?.paymentDetail.map((singleDetail) => {
                        return (
                            <Box className={'my-2'}>
                                <CustomColouredAvatarChip value={singleDetail} chipStyle={'bg-lightGrey'} modalCardType={'payment-card-modal'} chipColor='purple' />
                            </Box>
                        )
                    })
                    }
                    {dataType == 'AE' && projectInfo?.responsibleAE && projectInfo?.responsibleAE.map((singleDetail) => {
                        return (
                            <Box className={'my-2'}>
                                <CustomAvatarChip value={singleDetail.AE} chipStyle={'bg-lightGrey'} modalCardType={'AECard'} />
                            </Box>
                        )
                    })
                    }

                    {dataType == 'attachment' &&

                        <Box className={'my-2'}>
                            <Stack className='d-flex flex-row  justify-content-center'>
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

                    }

                </Box>

            </Box>
        </>
    )
}

export default CustomChipCard