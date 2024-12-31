import React, { FC } from 'react';
import { Modal, Box } from '@mui/material';

interface ModalProps {
    title: string;
    content: any;
    open: boolean;
    handleClose: () => void;
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
}

const GenericModal: FC<ModalProps> = ({title, content, open, handleClose}) => (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description">
        <Box
            sx={style}
        >
            <h2 id="modal-title">{title}</h2>
            <p id="modal-description">{content}</p>
        </Box>
    </Modal>
)

export default GenericModal;