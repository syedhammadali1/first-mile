import { DialogTitle, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import './CustomDialogTitle.css'
export const  CustomDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other} className='dialog-title'>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}

                >
                    <CloseIcon className='dialog-close-icon cursor-pointer ' />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}
