import React from 'react'
import { Modal, Fade, Backdrop } from '@material-ui/core'

function ModalComponent({ children, open, toggle }) {
    return (
        <Modal
            className='modal'
            open={open}
            onClose={toggle}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}>
            <Fade in={open}>{children}</Fade>
        </Modal>
    )
}

export default ModalComponent
