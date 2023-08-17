import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ClearIcon from '@mui/icons-material/Clear';
import StarIcon from '@mui/icons-material/Star';
import CreateIcon from '@mui/icons-material/Create';
import CustomRating from '../CustomRating/CustomRating';
import './CustomCard.css'
import { Box, Button, CardActionArea } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { bankDetails, contactCard } from '../../Utils/dummyData';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { openModal,close } from "../../Redux/cardModalSlice";
import { open } from "../../Redux/nestedFormDialogSlice";
import { openDualNested } from '../../Redux/dualNestedFormDialogSlice';
import { UtilService } from '../../Utils/util.service';
import { setColor } from '../../Redux/paymentCardColorSlice';

export default function CustomCard({ size, className, cardType }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(close())
    }

    const handleEditIcon = (formType,isSmallCard) => {
        if(!isSmallCard){

            if (formType == 'contact') {
                dispatch(open('edit-juristic-contract'));
            }
            if (formType == 'AECard') {
                dispatch(open('edit-responsible-ae'));
            }

        }else{
            if (formType == 'contact') {
                dispatch(openModal('contact'));
            }
            if (formType == 'AECard') {
                dispatch(openModal('AECard'));
            }
        }
    }

    return (
        <Card className={`${className}`}>
            <Box className='position-relative p-1' sx={{ bgcolor: `${cardType == 'AECard' ? '#BBDEFB' : '#E1BEE7'} ` }}>
                <Box>
                    <div className='d-flex flex-column align-items-center position-relative'>
                        {cardType == 'AECard' &&
                            <Avatar className='mb-1 avatar' aria-label="recipe" src={UtilService.addBaseUrl('/images/avatar.png')}>
                                src
                            </Avatar>
                        }

                        {cardType == 'contact' &&
                            <>
                                <Avatar sx={{ bgcolor: '#BDBDBD' }} className='mb-1 avatar' aria-label="recipe">
                                    R
                                </Avatar>
                                <CustomRating size={`${className == 'large-card' ? 'medium' : 'small'}`} className='rating' />
                            </>
                        }
                        <Box className='position-absolute' sx={{ right: '3px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {
                                    className == 'large-card' &&
                                    <CloseIcon className='icon cursor-pointer' onClick={() => handleClose()}></CloseIcon>
                                }

                                <StarBorderIcon className='icon cursor-pointer' />
                                {cardType == 'contact' &&
                                    <>
                                        <CreateIcon className='icon mt-1 create-icon cursor-pointer' onClick={() => handleEditIcon('contact', className == 'large-card' ? false :true)} />
                                    </>
                                }

                                {cardType == 'AECard' &&
                                    <>
                                        <CreateIcon className='icon mt-1 create-icon cursor-pointer' onClick={() => handleEditIcon('AECard',className == 'large-card' ? false : true)} />
                                    </>
                                }
                            </div>
                        </Box>

                    </div>
                </Box>

            </Box>
            <CardContent className='p-2'>

                <div className='d-flex justify-content-center'>
                    {cardType == 'contact' &&
                        <>
                            <Box className={'text-right'}>
                                <Typography variant="body2" className={'card-text'}>
                                    Name :
                                </Typography>
                                <Typography variant="body2" className={'card-text'}>
                                    Position :
                                </Typography>
                                <Typography variant="body2" className={'card-text'}>
                                    Phone number 1 :
                                </Typography>
                                <Typography variant="body2" className={'card-text'}>
                                    Phone number 2 :
                                </Typography>
                                <Typography variant="body2" className={'card-text'}>
                                    E-mail 1 :
                                </Typography>
                                <Typography variant="body2" className={'card-text'}>
                                    E-mail 2 :
                                </Typography>
                                <Typography variant="body2" className={'card-text'}>
                                    Line ID :
                                </Typography>
                                <Typography variant="body2" className={'card-text'}>
                                    Agency :
                                </Typography>
                            </Box>
                            <Box className={'w-auto text-left'}>
                                <Typography variant="body2" className={'card-text ml-1'}>
                                    Mr. Moncan Kankoon
                                </Typography>
                                <Typography variant="body2" className={'card-text ml-1'}>
                                    Manager
                                </Typography>
                                <Typography variant="body2" className={'card-text-bold ml-1'}>
                                    0812354984
                                </Typography>
                                <Typography variant="body2" className={'card-text ml-1'}>
                                    -
                                </Typography>
                                <Typography variant="body2" className={'card-text ml-1'}>
                                    Supalai@email.com
                                </Typography>
                                <Typography variant="body2" className={'card-text ml-1'}>
                                    -
                                </Typography>
                                <Typography variant="body2" className={'card-text ml-1'}>
                                    -
                                </Typography>
                                <Typography variant="body2" className={'card-text ml-1'}>
                                    Supalai @ thonglor
                                </Typography>
                            </Box>

                        </>
                    }
                    {cardType == 'AECard' &&
                        <>
                            <Box className={'text-right'}>
                                <Typography variant="body2" className={'card-text'}>
                                    ID :
                                </Typography>
                                <Typography variant="body2" className={'card-text'}>
                                    Name :
                                </Typography>
                                <Typography variant="body2" className={'card-text'}>
                                    Position :
                                </Typography>
                                <Typography variant="body2" className={'card-text'}>
                                    Phone number :
                                </Typography>
                                <Typography variant="body2" className={'card-text'}>
                                    E-mail :
                                </Typography>
                                <Typography variant="body2" className={'card-text'}>
                                    Responsible status :
                                </Typography>
                                <Typography variant="body2" className={'card-text'}>
                                    Responsible date :
                                </Typography>
                                <Typography variant="body2" className={'card-text'}>
                                    Irresponsible date :
                                </Typography>
                            </Box>
                            <Box className={'w-auto text-left'}>
                                <Typography variant="body2" className={'card-text ml-1'}>
                                    123584165
                                </Typography>
                                <Typography variant="body2" className={'card-text ml-1'}>
                                    Mr. Nitikarn N Kalasil
                                </Typography>
                                <Typography variant="body2" className={'card-text ml-1'}>
                                    Project Manager
                                </Typography>
                                <Typography variant="body2" className={'card-text ml-1'}>
                                    0881357373
                                </Typography>
                                <Typography variant="body2" className={'card-text ml-1'}>
                                    NK@email.com
                                </Typography>
                                <Typography variant="body2" className={'card-text-bold card-text-green ml-1'}>
                                    Active
                                </Typography>
                                <Typography variant="body2" className={'card-text ml-1'}>
                                    12/09/2019
                                </Typography>
                                <Typography variant="body2" className={'card-text ml-1'}>
                                    12/09/2019
                                </Typography>
                            </Box>
                        </>
                    }

                </div>

                <Box className='d-flex  justify-content-between footer'>
                    <Typography variant="body2" className={'card-footer-text'}>
                        Editor : Mr. Nitikarn N Kalasil
                    </Typography>

                    <Typography variant="body2" className={'card-footer-text'}>
                        12/09/2019
                    </Typography>
                </Box>

            </CardContent>
        </Card>
    );
}


export const PaymentDetailCard = ({ className, bankdetail }) => {
    const dispatch = useDispatch();

    const paymentCardColor = (bankdetail) => {
        if(bankdetail.slug == 'k-bank'){
          return 'green';
        }else if(bankdetail.slug == 'ktb'){
          return 'blue';
        }else if(bankdetail.slug == 'scb-bank'){
          return 'purple';
        }
      }

    const handleEditIcon = (cardType) => {
 
                dispatch(openModal(cardType));
             dispatch(setColor(paymentCardColor(bankdetail)))
        }
    

    return (

        <Card className={`paymentDetailCard ${className} p-0 `} sx={{ bgcolor: `${bankdetail.bgColor}` }}>

            <CardContent className='p-0'>

                <Box className='position-relative p-1 border-bottom border-white'>
                    <Box className='d-flex  position-relative'>
                        <Box className='m-1'>
                            <Avatar sx={{ bgcolor: '#BDBDBD' }} className='mb-1 avatar' aria-label="recipe" src={UtilService.addBaseUrl(bankdetail.image)}>
                                
                            </Avatar>
                        </Box>
                        <Box className='text-left ml-2 pt-1'>
                            <Typography variant="body2" className={'card-text'}>
                                {bankdetail.bankName}
                            </Typography>
                            <Typography variant="body2" className={'card-text-bold'}>
                                {bankdetail.acNumber}
                            </Typography>
                            <Typography variant="body2" className={'card-text'}>
                                {bankdetail.holderName}
                            </Typography>
                        </Box>
                        <Box className='position-absolute' sx={{ right: '3px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <StarBorderIcon className='icon cursor-pointer' />
                                <CreateIcon className='icon mt-1 create-icon cursor-pointer' onClick={() => handleEditIcon('payment-card-modal')} />
                            </div>
                        </Box>
                    </Box>
                    <Box className={'text-left pl-3'}>
                        <Typography variant="body2" className={'card-text'}>
                            Note : {bankdetail.note}
                        </Typography>
                    </Box>
                </Box>

                <Box className='d-flex  justify-content-between footer py-1 px-2'>
                    <Typography variant="body2" className={'card-footer-text'}>
                        Editor : Mr. Nitikarn N Kalasil
                    </Typography>

                    <Typography variant="body2" className={'card-footer-text'}>
                        12/09/2019
                    </Typography>
                </Box>

            </CardContent>
        </Card>
    )
}


export const CardWithImage = ({ data, className , clearIcon = false }) => {
    return (
        <Card sx={{ maxWidth: 345 }} className={`small-card ${className}`}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    // image={data.image}
                    image={ UtilService.addBaseUrl('/images/building.jpg')}
                    alt="green iguana"
                />

                <CardContent >
                    <Typography gutterBottom variant="h5" component="div" className='card-title'>
                        {data.title}
                    </Typography>
                    <Box className='text-left'>
                        {data.details && data.details.map((data) => {
                            return (<Typography variant="body2" color="text.secondary" className='card-text custom-brown-color'>
                                {data}
                            </Typography>)
                        })}

                    </Box>

                    <Box>
                    {
                        clearIcon && 
                    <ClearIcon className='clear-icon'></ClearIcon>
                    }
                    </Box>
                </CardContent>
                <CardActions className='justify-content-end'>
                    <Button size="small" color="primary">
                        MORE DETAIL
                    </Button>
                </CardActions>
            </CardActionArea>

        </Card>
    );
}




// payment detail large card

export const PaymentDetailLargeCard = ({ className, bankdetail }) => {

    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(close())
    }

    const handleEditIcon = (formType) => {

        dispatch(open(formType));

    }

    return (

        <Card className={`paymentDetailLargeCard ${className} p-0`} sx={{ bgcolor: `${bankdetail?.bgColorForLarge}` }}>
        {/* // <Card className={`paymentDetailLargeCard ${className} p-0`}> */}

            <CardContent className='p-0 card-content'>

                <Box className='position-relative p-1 '>
                    <Box className='d-flex align-items-center  flex-column position-relative'>
                        <Box className='m-1'>
                            <Avatar sx={{ bgcolor: '#BDBDBD' }} className='mb-1 avatar' aria-label="recipe" src={UtilService.addBaseUrl(bankdetail.image)}>
                                
                            </Avatar>
                        </Box>
                        <Box className='text-center ml-2 pt-1'>
                            <Typography variant="body2" className={'card-text'}>
                                {bankdetail?.bankName}
                            </Typography>
                            <Typography variant="body2" className={'card-text-bold'}>
                                {bankdetail?.acNumber}
                            </Typography>
                            <Typography variant="body2" className={'card-text'}>
                                {bankdetail?.holderName}
                            </Typography>
                        </Box>
                        <Box className='position-absolute' sx={{ right: '3px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <CloseIcon className='icon cursor-pointer' onClick={() => handleClose()}></CloseIcon>
                                <StarBorderIcon className='icon cursor-pointer' />
                                <CreateIcon className='icon mt-1 create-icon cursor-pointer' onClick={() => { handleEditIcon('edit-payment-detail') }} />
                            </div>
                        </Box>
                        <Box className={'text-left pl-3'}>
                            <Typography variant="body2" className={'card-text'}>
                                Note : {bankdetail?.note}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className='d-flex  justify-content-between footer py-1 px-2 border-top border-white'>
                    <Typography variant="body2" className={'card-footer-text'}>
                        Editor : Mr. Nitikarn N Kalasil
                    </Typography>

                    <Typography variant="body2" className={'card-footer-text'}>
                        12/09/2019
                    </Typography>
                </Box>



            </CardContent>
        </Card>
    )
}



// small ae custom card


export const SmallAECustomCard = (className) => {

    const dispatch = useDispatch();
    const handleEditIcon = (formType) => {
            dispatch(openDualNested(formType));
    }

    return (
        <>
            <Card className={` small-ae-card ml-3 ${className}`}>
                <Box className='position-relative p-1' sx={{ bgcolor: '#BBDEFB' }}>
                    <Box>
                        <div className='d-flex flex-column align-items-center position-relative'>

                            <Avatar className='mb-1 avatar' aria-label="recipe" src={UtilService.addBaseUrl('/images/avatar.png')}>
                            </Avatar>

                            <Box className='position-absolute' sx={{ right: '3px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>

                                    <CreateIcon className='icon mt-1 create-icon cursor-pointer'onClick={() => handleEditIcon('edit-ae')} />

                                </div>
                            </Box>

                        </div>
                    </Box>

                </Box>
                <CardContent className='p-2'>

                    <div className='d-flex justify-content-center'>

                        <Box className={'text-right'}>
                            <Typography variant="body2" className={'card-text-bold'}>
                                ID :
                            </Typography>
                            <Typography variant="body2" className={'card-text-bold'}>
                                Name :
                            </Typography>
                            <Typography variant="body2" className={'card-text-bold'}>
                                Position :
                            </Typography>
                            <Typography variant="body2" className={'card-text-bold'}>
                                Phone number :
                            </Typography>
                            <Typography variant="body2" className={'card-text-bold'}>
                                E-mail :
                            </Typography>
                        </Box>
                        <Box className={'w-auto text-left'}>
                            <Typography variant="body2" className={'card-text ml-1'}>
                                123584165
                            </Typography>
                            <Typography variant="body2" className={'card-text ml-1'}>
                                Mr. Nitikarn N Kalasil
                            </Typography>
                            <Typography variant="body2" className={'card-text ml-1'}>
                                Project Manager
                            </Typography>
                            <Typography variant="body2" className={'card-text ml-1'}>
                                0881357373
                            </Typography>
                            <Typography variant="body2" className={'card-text ml-1'}>
                                NK@email.com
                            </Typography>
                        </Box>
                    </div>

                </CardContent>
            </Card>
        </>
    )
}
