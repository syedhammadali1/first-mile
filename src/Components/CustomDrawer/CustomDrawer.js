// import * as React from 'react';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import { Drawer } from '@mui/material';


// export default function CustomDrawer({ open }) {
//     const [state, setState] = React.useState({
//         right: open
//     });

//     return (

//         <Drawer
//             anchor={'right'}
//             open={state.right}
//             BackdropProps={{ invisible: true }}
//             disableBackdropTransition={true}
//             // style={{ position: 'static', zIndex: '999', overflow: 'auto' }}
//             ModalProps={{
//                 style: { width: '400px', top: '50%', transform: 'translateY(-50%)' }
//               }}
//         >
//             {/* {list(anchor)} */}
//             dsfsffffffffffffffffffffffffffffffffffff
//         </Drawer>
//     );
// }


import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';

const CustomDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div style={{ position: 'relative', width: '800px', height: '600px' }} className={'find'}>
      <button onClick={handleDrawerOpen}>Open Drawer</button>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {/* Your page content */}
      </div>
      {drawerOpen && (
        <div style={{ position: 'absolute', right: 0, width: '400px' }}>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={handleDrawerClose}
            hideBackdrop={true}
          >
            <div style={{ width: '100%' }}>
             asddddddddddddddddddd
            </div>
          </Drawer>
        </div>
      )}
    </div>
  );
};

export default CustomDrawer;
