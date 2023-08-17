import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import CustomCard, { PaymentDetailLargeCard } from '../CustomCard/CustomCard';
import { bankDetails } from '../../Utils/dummyData';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}



export default function CustomCardModal() {
  const isOpen = useSelector((state) => state.cardModal.open);
  const cardType = useSelector((state) => state.cardModal.cardType);
  const pCColor = useSelector((state) => state.paymentCardColor.color);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(isOpen);
  })

  const paymentCardColor = (color) => {
    if(color == 'green'){
      return bankDetails.KBank
    }else if(color == 'blue'){
      return bankDetails.KTB
    }else if(color == 'purple'){
      return bankDetails.scbBank
    }
  }
  
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          {
            cardType == 'payment-card-modal' &&
            <PaymentDetailLargeCard className='mb-2 singleCard ' bankdetail={paymentCardColor(pCColor)}/>
          }

          {
            (cardType == 'contact'  ||  cardType == 'AECard') &&
            <CustomCard className={'large-card'} cardType={cardType}></CustomCard>
          }

        </Box>
      </Modal>
    </div>
  );
}
