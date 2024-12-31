import React, { FC } from 'react'
import {
    Dialog,
    DialogTitle,
    IconButton,
    DialogContent,
    Typography,
    DialogActions,
    Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface DialogBoxProps {
    open: boolean;
    title: string,
    content: any,
    handleClose: () => void,
}

const DialogBox: FC<DialogBoxProps> = ({ open, title, content, handleClose}) => (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            {title}
        </DialogTitle>
        <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
                position: 'absolute',
                right: 8,
                top: 8,
                color: theme.palette.grey[500],
            })}
        >
            <CloseIcon />
        </IconButton>
        <DialogContent dividers>
            <Typography gutterBottom component="div">
                {content}
            </Typography>
        </DialogContent>
        <DialogActions>
            <Button autoFocus onClick={handleClose}>
                Close
            </Button>
        </DialogActions>
    </Dialog>
);

export default DialogBox;