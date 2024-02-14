import React, { useState } from 'react'
import ModalSub from '../../../Dialog/ModalSub';
import PrimaryButton from '../PrimaryButton'

const EarlyAccessButton = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleDialogOpen = () => {
      setOpenDialog(true);
    };
    const handleDialogClose = () => {
      setOpenDialog(false);
    };
  
    return (
        <div>
           <PrimaryButton onClick={handleDialogOpen}>
                    Early Access
                  </PrimaryButton>
                  <ModalSub open={openDialog} handleClose={handleDialogClose} />
    
        </div>
    )
}

export default EarlyAccessButton
